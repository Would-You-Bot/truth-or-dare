import { Features } from '@/components/Features'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PhoneMockups } from '@/components/phone-mockups'

export default function TruthOrDareLanding() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5" />
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
