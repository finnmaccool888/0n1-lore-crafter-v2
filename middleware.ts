
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Protect admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const adminToken = request.headers.get('x-admin-token')
    if (adminToken !== process.env.ADMIN_SECRET) {
      return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      })
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}
