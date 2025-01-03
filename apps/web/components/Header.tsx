'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Sparkles, Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-10">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold flex items-center gap-2">
          <Sparkles className="h-6 w-6" />
          Truth or Dare
        </Link>
        <nav className="hidden md:flex gap-4">
          <HeaderLink href="/features">Features</HeaderLink>
          <HeaderLink href="/about">About</HeaderLink>
        </nav>
        <div className="hidden md:flex gap-4">
          <Link 
            href="#waitlist"
            className="bg-white text-purple-600 px-6 py-2 rounded-full font-medium hover:bg-white/90 transition"
          >
            Join Waitlist
          </Link>
        </div>
        <button 
          className="md:hidden text-white hover:bg-white/10 p-2 rounded-full transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-xl md:hidden">
          <nav className="flex flex-col gap-4">
            <HeaderLink href="/features" onClick={() => setIsMenuOpen(false)}>
              Features
            </HeaderLink>
            <HeaderLink href="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </HeaderLink>
            <Link 
              href="#waitlist"
              className="bg-white text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-white/90 transition text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Waitlist
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

function HeaderLink({ href, children, ...props }) {
  return (
    <Link 
      href={href}
      className="text-white/80 hover:text-white transition"
      {...props}
    >
      {children}
    </Link>
  )
}

