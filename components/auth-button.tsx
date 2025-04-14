
"use client"

import { useAuth } from '@/lib/auth/auth-context'
import { Button } from './ui/button'
import Link from 'next/link'

export function AuthButton() {
  const { user } = useAuth()

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <Link href="/profile">
          <Button variant="outline">My Characters</Button>
        </Link>
        <span className="text-sm text-gray-400">{user.name}</span>
      </div>
    )
  }

  return (
    <div>
      <script
        authed="location.reload()"
        src="https://auth.util.repl.co/script.js"
      ></script>
    </div>
  )
}
