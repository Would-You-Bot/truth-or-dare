import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

export function Hero() {
  return (
    <div className="text-white space-y-6">
      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
        <Calendar className="h-4 w-4" />
        Coming in 2025
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
        The Ultimate <br className="hidden sm:inline" />
        Truth Or Dare <br className="hidden sm:inline" />
        Experience
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-white/90">
        Get ready for unforgettable moments with friends through interactive questions and dares. Powered by community engagement.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="#waitlist"
          className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold inline-flex items-center justify-center group hover:bg-white/90 transition"
        >
          Join Waitlist
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" />
        </Link>
        <Link 
          href="#features"
          className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-full font-semibold backdrop-blur-sm transition text-center"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}

