import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-white/20 border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
          <p className="mb-6 text-center text-sm text-white/80 md:mb-0 md:text-left">
            © 2025 <Link href="https://rivo.gg" className='hover:text-white' >Rivo</Link>. All rights reserved.
          </p>
          <nav className="flex flex-col items-center gap-4 md:flex-row">
            <Link
              href="/features"
              className="text-white/80 transition hover:text-white"
            >
              Features
            </Link>
            <Link
              href="/about"
              className="text-white/80 transition hover:text-white"
            >
              About
            </Link>
            <Link
              href="/privacy"
              className="text-white/80 transition hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/80 transition hover:text-white"
            >
              Terms of Service
            </Link>
            <Link
              href="/legal"
              className="text-white/80 transition hover:text-white"
            >
              Legal Notice
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
