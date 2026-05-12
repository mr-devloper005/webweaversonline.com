import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

export function FooterOverride() {
  return (
    <footer className="bg-gradient-to-b from-[#b88a5e] to-[#8b6240] text-[#fdf8f1]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/30 bg-white/10">
                <img src="/favicon.png?v=20260401" alt={`${SITE_CONFIG.name} logo`} className="h-[140%] w-[140%] object-contain" />
              </div>
              <div>
                <p className="font-serif text-xl font-semibold">{SITE_CONFIG.name}</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">Premium Listings</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-white/80">
              {SITE_CONFIG.description}
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/listings" className="hover:text-white">Listings</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold">Company</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-white/70">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
