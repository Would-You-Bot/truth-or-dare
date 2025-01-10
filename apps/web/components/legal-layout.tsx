import { Footer } from './Footer'
import { Header } from './Header'

interface LegalLayoutProps {
  children: React.ReactNode
  title: string
}

export function LegalLayout({ children, title }: LegalLayoutProps) {
  return (
    <>
      <script
        defer
        data-domain="truthordare.gg"
        src="https://stats.wouldyoubot.gg/js/script.js"
      />
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
        <div className="container mx-auto flex-grow px-4 py-8">
          <Header />
          <main className="mt-12 mb-20">
            <h1 className="mb-8 font-bold text-4xl text-white">{title}</h1>
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
              <div className="prose prose-invert max-w-none prose-ul:list-disc prose-ul:text-white">
                {children}
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}
