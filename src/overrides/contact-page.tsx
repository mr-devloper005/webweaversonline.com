'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { Send, Clock, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

const reasons = [
  'List your business on our curated platform',
  'Partner with us for featured placements',
  'Get help finding the right vendor for your needs',
  'Request a custom category or coverage area',
]

export function ContactPageOverride() {
  const [submitted, setSubmitted] = useState(false)
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || `hello@${SITE_CONFIG.domain}`

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className="min-h-screen bg-[#c89977]">
      <div className="mx-auto max-w-7xl bg-[#fdf8f1] shadow-2xl">
        <NavbarShell />

        <section className="relative overflow-hidden border-b border-[#e6d5c2]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#fbf3e8] via-[#fdf8f1] to-[#f5e7d0]" />
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#e6c9a8]/50 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e6d5c2] bg-white/80 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-[#8b6240] backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Let's Connect
            </div>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-tight text-[#3d2a1c] sm:text-6xl">
              We'd Love to<br />Hear From You
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#6e5547]">
              Whether you're looking to list your business, partner with us, or simply discover the right service - our team is here to make your journey smooth and personal.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-3xl bg-gradient-to-br from-[#8b6240] to-[#b88a5e] p-8 text-white sm:p-10">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#f5d9b8]">Get in touch</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                Every great connection starts with a simple message
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/85">
                Tell us what you're looking for and we'll point you in the right direction - quickly, thoughtfully, and without the runaround.
              </p>
              <div className="mt-8 space-y-3">
                {reasons.map((r) => (
                  <div key={r} className="flex items-start gap-3 text-sm text-white/90">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#f5d9b8]" />
                    <span>{r}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
                <Clock className="h-5 w-5 text-[#f5d9b8]" />
                <p className="mt-3 text-sm font-medium">Response time</p>
                <p className="mt-1 text-xs text-white/80">
                  We respond to every inquiry within 24 hours during business days.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-[#e6d5c2] bg-white p-8 shadow-sm sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#b88a5e] to-[#8b6240] text-white">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-[#3d2a1c]">Message sent!</h3>
                  <p className="mt-2 max-w-sm text-sm text-[#6e5547]">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b6240]">Contact form</p>
                    <h2 className="mt-2 font-serif text-2xl font-semibold text-[#3d2a1c]">Send us a message</h2>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-[#8b6240]">First name</label>
                      <input
                        required
                        className="h-12 w-full rounded-full border border-[#e6d5c2] bg-[#fbf3e8] px-4 text-sm text-[#3d2a1c] placeholder:text-[#a08161] focus:border-[#8b6240] focus:outline-none"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-[#8b6240]">Last name</label>
                      <input
                        required
                        className="h-12 w-full rounded-full border border-[#e6d5c2] bg-[#fbf3e8] px-4 text-sm text-[#3d2a1c] placeholder:text-[#a08161] focus:border-[#8b6240] focus:outline-none"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#8b6240]">Email address</label>
                    <input
                      required
                      type="email"
                      className="h-12 w-full rounded-full border border-[#e6d5c2] bg-[#fbf3e8] px-4 text-sm text-[#3d2a1c] placeholder:text-[#a08161] focus:border-[#8b6240] focus:outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#8b6240]">Subject</label>
                    <select
                      required
                      className="h-12 w-full rounded-full border border-[#e6d5c2] bg-[#fbf3e8] px-4 text-sm text-[#3d2a1c] focus:border-[#8b6240] focus:outline-none"
                    >
                      <option>General inquiry</option>
                      <option>List my business</option>
                      <option>Partnership opportunity</option>
                      <option>Technical support</option>
                      <option>Press & media</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#8b6240]">Your message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full rounded-2xl border border-[#e6d5c2] bg-[#fbf3e8] px-4 py-3 text-sm text-[#3d2a1c] placeholder:text-[#a08161] focus:border-[#8b6240] focus:outline-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#b88a5e] to-[#8b6240] text-sm font-medium text-white shadow-lg transition-transform hover:scale-[1.02]"
                  >
                    Send message
                    <Send className="h-4 w-4" />
                  </button>
                  <p className="text-center text-xs text-[#a08161]">
                    By submitting, you agree to our <Link href="/privacy" className="underline hover:text-[#8b6240]">Privacy Policy</Link>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#e6c9a8] to-[#fbf3e8] p-10 text-center">
            <h2 className="font-serif text-3xl font-semibold text-[#3d2a1c] sm:text-4xl">
              Ready to be part of something elegant?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-[#6e5547]">
              Join thousands of businesses and clients who trust our platform.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b88a5e] to-[#8b6240] px-6 py-3 text-sm font-medium text-white shadow-lg hover:scale-105"
              >
                Create account
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/listings"
                className="inline-flex items-center gap-2 rounded-full border border-[#8b6240] px-6 py-3 text-sm font-medium text-[#8b6240] hover:bg-white"
              >
                Browse listings
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
