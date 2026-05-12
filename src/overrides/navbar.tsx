'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, ChevronDown, LogOut, User as UserIcon } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG } from '@/lib/site-config'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export const NAVBAR_OVERRIDE_ENABLED = true

const navLinks = [
  {
    label: 'Home',
    href: '/',
    children: [
      { label: 'Overview', href: '/' },
      { label: 'Featured Listings', href: '/listings' },
    ],
  },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about' },
    ],
  },
  {
    label: 'Services',
    href: '/listings',
    children: [
      { label: 'All Listings', href: '/listings' },
      { label: 'Search Services', href: '/search' },
      { label: 'Help Center', href: '/help' },
    ],
  },
]

export function NavbarOverride() {
  const [open, setOpen] = useState(false)
  const [hoverIdx, setHoverIdx] = useState<number | null>(null)
  const pathname = usePathname()
  const router = useRouter()
  const { isAuthenticated, user, logout } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e6d5c2] bg-[#fdf8f1]/95 text-[#3d2a1c] backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full">
            <img src="/favicon.png?v=20260401" alt={`${SITE_CONFIG.name} logo`} className="h-[140%] w-[140%] object-contain" />
          </div>
          <div className="hidden sm:block">
            <span className="block font-serif text-lg font-semibold tracking-wide text-[#8b6240]">{SITE_CONFIG.name}</span>
            <span className="block text-[10px] uppercase tracking-[0.3em] text-[#a08161]">Premium Listings</span>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item, idx) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setHoverIdx(idx)}
                onMouseLeave={() => setHoverIdx(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-[#8b6240]' : 'text-[#5a4231] hover:text-[#8b6240]'
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                </Link>
                {hoverIdx === idx && (
                  <div className="absolute left-0 top-full min-w-[200px] rounded-2xl border border-[#e6d5c2] bg-white p-2 shadow-[0_20px_50px_rgba(139,98,64,0.15)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-xl px-4 py-2.5 text-sm text-[#5a4231] transition-colors hover:bg-[#fbf3e8] hover:text-[#8b6240]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <div className="hidden items-center gap-2 md:flex">
              <span className="flex items-center gap-2 rounded-full bg-[#fbf3e8] px-3 py-2 text-sm font-medium text-[#8b6240]">
                <UserIcon className="h-4 w-4" />
                {user?.name?.split(' ')[0] || 'Account'}
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e6d5c2] text-[#8b6240] hover:bg-[#fbf3e8]"
                    aria-label="Profile menu"
                  >
                    <UserIcon className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40 border-[#e6d5c2] bg-white">
                  <DropdownMenuItem
                    onClick={() => {
                      logout()
                      router.push('/')
                    }}
                    className="text-[#8b6240] focus:bg-[#fbf3e8] focus:text-[#8b6240]"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="hidden items-center gap-2 md:flex">
              <Link
                href="/login"
                className="rounded-full px-5 py-2.5 text-sm font-medium text-[#5a4231] transition-colors hover:bg-[#fbf3e8] hover:text-[#8b6240]"
              >
                Sign In
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-[#b88a5e] to-[#8b6240] px-6 py-2.5 text-sm font-medium text-white shadow-[0_8px_20px_rgba(139,98,64,0.25)] transition-transform hover:scale-105"
              >
                Contact
              </Link>
            </div>
          )}

          <button
            className="rounded-full p-2 text-[#5a4231] lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[#e6d5c2] bg-[#fdf8f1] lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-[#5a4231] hover:bg-[#fbf3e8] hover:text-[#8b6240]"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              {isAuthenticated ? (
                <button
                  onClick={() => { logout(); router.push('/'); setOpen(false) }}
                  className="block w-full rounded-full border border-[#e6d5c2] px-4 py-3 text-center text-sm font-medium text-[#8b6240]"
                >
                  Sign out
                </button>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="block rounded-full border border-[#e6d5c2] px-4 py-3 text-center text-sm font-medium text-[#8b6240]"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="mt-2 block rounded-full bg-gradient-to-r from-[#b88a5e] to-[#8b6240] px-4 py-3 text-center text-sm font-medium text-white"
                  >
                    Contact
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
