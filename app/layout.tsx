import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { AuthProvider } from '@/lib/auth/auth-context'; // Add AuthProvider import
import Link from 'next/link'; // Import Link component
import { AuthButton } from '@/components/auth-button'; // Import AuthButton component


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "0N1 Soul Generator",
  description: "Create detailed personal identity lore for your 0N1 Force NFT character",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <header className="border-b p-4">
              <nav className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">0N1 Lore</Link>
                <AuthButton />
              </nav>
            </header>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'

// Placeholder components -  These need to be implemented separately
function AuthButton() {
  return <button>Login/Signup</button>; // Replace with actual authentication logic
}


// Placeholder for auth-context.js - needs full implementation.
// export const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   // ... authentication logic ...
//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };