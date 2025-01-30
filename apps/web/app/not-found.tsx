import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#FF7F50] via-[#FF69B4] to-[#9370DB] text-white">
      <div className="container px-4 py-16 flex flex-col items-center text-center space-y-8">
        <div className="relative">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
            404
          </h1>
          <Sparkles className="absolute -top-6 -right-6 w-12 h-12 text-yellow-300 animate-pulse" />
        </div>

        <div className="space-y-4 max-w-[600px]">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Truth: This Page Doesn&apos;t Exist
          </h2>
          <p className="text-lg md:text-xl text-white/90">
            Dare: Go back to the homepage and start an unforgettable game with
            your friends!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Link href="/">
            <Button
              size="lg"
              className="bg-white text-pink-600 hover:bg-white/90 font-semibold px-8"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
