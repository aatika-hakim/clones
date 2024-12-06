import { Inter } from 'next/font/google'
import "./globals.css"
import { AuthProvider } from '@/components/auth-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LinkedIn Clone",
  description: "A professional community platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}

