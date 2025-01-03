import { Header } from './Header'
import { Footer } from './Footer'

export function LegalLayout({ children, title }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 flex flex-col">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5 bg-repeat"></div>
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto px-4 py-8 flex-grow">
          <Header />
          <main className="mt-12 mb-20">
            <h1 className="text-4xl font-bold text-white mb-8">{title}</h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="prose prose-invert max-w-none prose-ul:list-disc prose-ul:text-white">
                {children}
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  )
}

