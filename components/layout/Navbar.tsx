'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { NAV_LINKS } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-[#0a0a0f]/85 backdrop-blur-2xl border-b border-white/[0.06]'
        : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative flex-shrink-0 drop-shadow-[0_2px_8px_rgba(124,58,237,0.45)] group-hover:drop-shadow-[0_2px_12px_rgba(124,58,237,0.65)] transition-all duration-200">
              <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <linearGradient id="nav-p" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#a855f7"/>
                    <stop offset="1" stopColor="#4338ca"/>
                  </linearGradient>
                  <linearGradient id="nav-gl" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#fff" stopOpacity=".13"/>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <rect width="64" height="64" rx="14" fill="#0c0a1e"/>
                <rect x="7" y="23" width="37" height="20" rx="3.5"
                      fill="#7c3aed" fillOpacity=".10"
                      stroke="#9333ea" strokeOpacity=".60" strokeWidth="1.5"/>
                <rect x="28" y="10" width="21" height="42" rx="5" fill="url(#nav-p)"/>
                <rect x="28" y="10" width="21" height="13.5" rx="5" fill="url(#nav-gl)"/>
              </svg>
            </div>
            <span className="font-display font-bold text-[17px] text-white tracking-tight">FrameFlow</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3.5 py-2 rounded-lg text-sm transition-all duration-150',
                  pathname === link.href
                    ? 'text-white font-medium bg-white/[0.06]'
                    : 'text-white/50 hover:text-white hover:bg-white/[0.04]'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/[0.06] transition-all cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
            <Link href="/login">
              <button className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors cursor-pointer">
                Log in
              </button>
            </Link>
            <Link href="/signup">
              <button className="px-4 py-2 text-sm font-medium bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors shadow-lg shadow-violet-600/20 cursor-pointer">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white/50 hover:text-white transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111118] border-b border-white/[0.06] px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                'block py-3 text-sm border-b border-white/[0.04] transition-colors',
                pathname === link.href ? 'text-white' : 'text-white/50 hover:text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-4">
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <button className="w-full py-2.5 text-sm text-white/60 hover:text-white transition-colors text-center cursor-pointer">
                Log in
              </button>
            </Link>
            <Link href="/signup" onClick={() => setIsOpen(false)}>
              <button className="w-full py-2.5 text-sm font-medium bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors cursor-pointer">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
