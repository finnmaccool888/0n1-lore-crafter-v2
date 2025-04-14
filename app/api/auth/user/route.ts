
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const userId = request.headers.get('X-Replit-User-Id')
  const userName = request.headers.get('X-Replit-User-Name')
  
  if (!userId) {
    return NextResponse.json({ user: null })
  }

  return NextResponse.json({
    user: {
      id: userId,
      name: userName
    }
  })
}
