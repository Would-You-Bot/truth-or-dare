import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { PhoneMockups } from '../components/PhoneMockups'
import { Features } from '../components/Features'
import { Footer } from '../components/Footer'

export default function TruthOrDareLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 flex flex-col">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5 bg-repeat" />
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto px-4 py-8 flex-grow">
          <Header />
          <main className="mt-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center pb-20">
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

