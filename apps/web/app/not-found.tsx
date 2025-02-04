import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-[#FF7F50] via-[#FF69B4] to-[#9370DB] text-white">
      <div className="container flex flex-col items-center space-y-8 px-4 py-16 text-center">
        <div className="relative">
          <h1 className="font-bold text-6xl tracking-tighter md:text-8xl">
            404
          </h1>
          <Sparkles className="-top-6 -right-6 absolute h-12 w-12 animate-pulse text-yellow-300" />
        </div>

        <div className="max-w-[600px] space-y-4">
          <h2 className="font-semibold text-3xl md:text-4xl">
            Truth: This Page Doesn&apos;t Exist
          </h2>
          <p className="text-lg text-white/90 md:text-xl">
            Dare: Go back to the homepage and start an unforgettable game with
            your friends!
          </p>
        </div>

        <div className="flex flex-col gap-4 pt-8 sm:flex-row">
          <Link href="/">
            <Button
              size="lg"
              className="bg-white px-8 font-semibold text-pink-600 hover:bg-white/90"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
