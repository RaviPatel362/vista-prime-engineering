'use client'

import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const FOOTER_NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Why VPE", href: "#why-vpe" },
  { label: "Contact", href: "#contact" },
]

const FOOTER_SERVICES = [
  "CNC Turning",
  "VMC Milling",
  "Precision Machining",
  "Long-term Partnership",
]

// Keep in sync with contact.tsx — replace before going live.
const CONTACT = {
  phone: "+91 98765 43210",
  email: "info@vistaprimeengineering.com",
  address: "Plot No. 00, Industrial Estate, City, State — 000000, India",
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto bg-[var(--vpe-charcoal-deep)] text-white">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--vpe-amber)]/60 to-transparent" aria-hidden="true" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand + manifesto */}
          <div className="md:col-span-5">
            <Link href="#top" className="inline-flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Vista Prime Engineering logo"
                width={56}
                height={56}
                className="h-14 w-14 rounded-md bg-white object-contain ring-1 ring-[var(--vpe-blue)]/30"
                loading="eager"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold uppercase tracking-[0.18em] text-white">
                  Vista Prime
                </span>
                <span className="text-[11px] font-mono uppercase tracking-[0.32em] text-[var(--vpe-amber)]">
                  Engineering
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm text-white/70 leading-relaxed">
              A precision machining house turning ideas into metal. We
              specialise in CNC Turning, VMC Milling, and Precision Machining —
              one drawing at a time, one tolerance held, one partnership earned.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-md border border-[var(--vpe-amber)]/30 bg-[var(--vpe-amber)]/[0.08] px-3 py-1.5 text-xs font-display font-semibold uppercase tracking-[0.2em] text-[var(--vpe-amber)]">
              Together We Build Better
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/45">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[var(--vpe-amber)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/45">
              Services
            </p>
            <ul className="mt-4 space-y-2">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <Link
                    href="#services"
                    className="text-sm text-white/70 hover:text-[var(--vpe-amber)] transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/45">
              Reach Us
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--vpe-amber)]" />
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-[var(--vpe-amber)] transition-colors break-all">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--vpe-amber)]" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-[var(--vpe-amber)] transition-colors break-all">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--vpe-amber)]" />
                <span className="text-white/60">
                  Industrial Estate, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            © {year} Vista Prime Engineering · Proprietor: Ruchit Patel · All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.18em]">
            Precision Today · Better Tomorrow
          </p>
        </div>
      </div>
    </footer>
  )
}
