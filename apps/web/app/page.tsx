import { Features } from '@/components/Features'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PhoneMockups } from '@/components/phone-mockups'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://truthordare.gg'),
  title: 'Truth or Dare - Mobile App',
  description:
    'Get ready for unforgettable moments with friends through interactive questions and dares. Powered by community engagement.',
  robots: 'index, follow',
  publisher: 'Rivo',
  openGraph: {
    title: 'Truth or Dare - Mobile App',
    description:
      'Get ready for unforgettable moments with friends through interactive questions and dares. Powered by community engagement.',
    url: 'https://truthordare.gg',
    type: 'website'
  }
}

export const viewport: Viewport = {
  themeColor: '#ef5688',
  maximumScale: 5,
  initialScale: 1,
  width: 'device-width',
  height: 'device-height'
}

export default function TruthOrDareLanding() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
      <div className="flex min-h-screen flex-col">
        <div className="container mx-auto flex-grow px-4 py-8">
          <Header />
          <main className="mt-16">
            <div className="grid items-center gap-12 pb-20 lg:grid-cols-2">
              <Hero />
              <div className="hidden lg:block">
                <PhoneMockups />
              </div>
            </div>
            <Features />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  )
}
