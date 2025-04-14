
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { OpenAI } from 'openai'
import { getNotionClient } from '@/lib/services/notion-client'
import { calculateAgingRate, validateTimeline } from '@/lib/utils/character-utils'

const prisma = new PrismaClient()
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
const notion = getNotionClient()

export async function POST(req: Request) {
  try {
    const data = await req.json()
    
    if (!data.characterData) {
      return NextResponse.json({ error: 'Missing character data' }, { status: 400 })
    }

    // Validate aging and timeline
    const agingValidation = calculateAgingRate(data.characterData.age)
    const timelineCheck = await validateTimeline(data.characterData)
    
    // AI analysis for lore consistency
    const aiAnalysis = await analyzeSubmission(data.characterData)

    // Create submission record
    const submission = await prisma.characterSubmission.create({
      data: {
        characterData: data.characterData,
        aiAnalysis,
        timelineVerification: timelineCheck,
        agingValidation,
        submitterEmail: data.email || null
      }
    })

    // Create Notion page for review
    if (process.env.NOTION_DATABASE_ID) {
      const notionPage = await notion.pages.create({
        parent: { database_id: process.env.NOTION_DATABASE_ID },
        properties: {
          Name: { title: [{ text: { content: `Character Submission #${submission.id}` } }] },
          Status: { select: { name: 'Pending Review' } },
          'AI Analysis': { rich_text: [{ text: { content: JSON.stringify(aiAnalysis) } }] }
        }
      })
      
      await prisma.characterSubmission.update({
        where: { id: submission.id },
        data: { notionPageId: notionPage.id }
      })
    }

    return NextResponse.json({ id: submission.id })
  } catch (error) {
    console.error('Submission error:', error)
    return NextResponse.json({ error: 'Failed to process submission' }, { status: 500 })
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const status = searchParams.get('status')
    const adminToken = req.headers.get('x-admin-token')

    if (!adminToken || adminToken !== process.env.ADMIN_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const submissions = await prisma.characterSubmission.findMany({
      where: status ? { status: status as any } : {},
      orderBy: { createdAt: 'desc' }
    })
    
    return NextResponse.json(submissions)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch submissions' }, { status: 500 })
  }
}

async function analyzeSubmission(characterData: any) {
  const analysis = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are analyzing a character submission for the 0N1 universe. Check for timeline consistency, aging validation, and canon compliance."
      },
      {
        role: "user",
        content: JSON.stringify(characterData)
      }
    ]
  })

  return {
    analysis: analysis.choices[0].message.content,
    timestamp: new Date().toISOString()
  }
}
