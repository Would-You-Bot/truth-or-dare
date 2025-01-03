'use client'

import { Menu, Sparkles, X } from 'lucide-react'
import Link from 'next/link'
import type React from 'react'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-10">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-2xl text-white"
        >
          <Sparkles className="h-6 w-6" />
          Truth or Dare
        </Link>
        <nav className="hidden gap-4 md:flex">
          <HeaderLink href="/features">Features</HeaderLink>
          <HeaderLink href="/about">About</HeaderLink>
        </nav>
        <div className="hidden gap-4 md:flex">
          <Link
            href="#waitlist"
            className="rounded-full bg-white px-6 py-2 font-medium text-purple-600 transition hover:bg-white/90"
          >
            Join Waitlist
          </Link>
        </div>
        <button
          type="button"
          className="rounded-full p-2 text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full right-0 left-0 mx-4 mt-2 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-xl backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-4">
            <HeaderLink
              href="/features"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </HeaderLink>
            <HeaderLink
              href="/about"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </HeaderLink>
            <Link
              href="#waitlist"
              className="rounded-full bg-white px-6 py-3 text-center font-medium text-purple-600 transition hover:bg-white/90"
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

interface HeaderLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

function HeaderLink({ href, children, ...props }: HeaderLinkProps) {
  return (
    <Link
      href={href}
      className="text-white/80 transition hover:text-white"
      {...props}
    >
      {children}
    </Link>
  )
}
