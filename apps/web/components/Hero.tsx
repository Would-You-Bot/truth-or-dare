import { ArrowRight, Calendar } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="space-y-6 text-white">
      <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur-sm">
        <Calendar className="h-4 w-4" />
        Coming in 2025
      </div>
      <h1 className="font-bold text-4xl leading-tight sm:text-5xl md:text-6xl">
        The Ultimate <br className="hidden sm:inline" />
        Truth Or Dare <br className="hidden sm:inline" />
        Experience
      </h1>
      <p className="text-lg text-white/90 sm:text-xl md:text-2xl">
        Get ready for unforgettable moments with friends through interactive
        questions and dares. Powered by community engagement.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="#waitlist"
          className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-purple-600 transition hover:bg-white/90"
        >
          Join Waitlist
          <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
        </Link>
        <Link
          href="/about"
          className="rounded-full bg-purple-700 px-8 py-3 text-center font-semibold text-white backdrop-blur-sm transition hover:bg-purple-800"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}
