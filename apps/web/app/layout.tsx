import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import type { ReactNode } from 'react'

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans'
})

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
})

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <script
          defer
          data-domain="truthordare.gg"
          src="https://stats.wouldyoubot.gg/js/script.js"
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
