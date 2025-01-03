import Link from 'next/link'

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center">
          <p className="text-white/80 text-sm mb-6 md:mb-0 text-center md:text-left">
            © 2023 Truth or Dare App. All rights reserved.
          </p>
          <nav className="flex flex-col md:flex-row gap-4 items-center">
            <Link 
              href="/features" 
              className="text-white/80 hover:text-white transition"
            >
              Features
            </Link>
            <Link 
              href="/about" 
              className="text-white/80 hover:text-white transition"
            >
              About
            </Link>
            <Link 
              href="/privacy" 
              className="text-white/80 hover:text-white transition"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-white/80 hover:text-white transition"
            >
              Terms of Service
            </Link>
            <Link 
              href="/legal" 
              className="text-white/80 hover:text-white transition"
            >
              Legal Notice
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

