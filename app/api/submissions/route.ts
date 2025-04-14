
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { OpenAI } from 'openai'
import { getNotionClient } from '@/lib/services/notion-client'

const prisma = new PrismaClient()
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(req: Request) {
  try {
    const data = await req.json()
    
    // Validate character data
    if (!data.characterData) {
      return NextResponse.json({ error: 'Missing character data' }, { status: 400 })
    }

    // Perform AI analysis
    const aiAnalysis = await analyzeSubmission(data.characterData)

    // Create submission record
    const submission = await prisma.characterSubmission.create({
      data: {
        characterData: data.characterData,
        aiAnalysis
      }
    })

    return NextResponse.json({ id: submission.id })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process submission' }, { status: 500 })
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const status = searchParams.get('status')

  try {
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
  // Implement AI analysis using OpenAI
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
