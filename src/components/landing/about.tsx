'use client'

import { CheckCircle2, Factory, Quote } from "lucide-react"

const HIGHLIGHTS = [
  "Owner-driven quality with Ruchit Patel at the helm",
  "Modern CNC & VMC machinery maintained for repeatability",
  "Job-shop flexibility with batch-to-mass production support",
  "Material versatility across ferrous, non-ferrous & alloys",
]

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] text-[var(--vpe-amber-dark)]">
              <span className="h-px w-8 bg-[var(--vpe-amber-dark)]" />
              About VPE
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground">
              Where Precision Meets <span className="text-[var(--vpe-amber-dark)]">Partnership</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Vista Prime Engineering is a precision machining house built on a
              simple belief — what we deliver today shapes what our customers
              become tomorrow. Every part that leaves our shop floor carries
              with it a commitment to dimensional accuracy, surface integrity,
              and on-time delivery that lets our partners plan ahead with
              confidence.
            </p>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              From one-off prototype components to repeat batch production, we
              bring the same disciplined approach: study the drawing, plan the
              process, hold the tolerance, document the result. It is the
              routine — not the exception — that defines our identity.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 hover:border-[var(--vpe-amber)]/40 transition-colors"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--vpe-amber-dark)]" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: statement card */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[var(--vpe-amber)]/30 via-transparent to-transparent blur-md"
                aria-hidden="true"
              />
              <div className="relative rounded-2xl border border-border bg-[var(--vpe-charcoal-deep)] text-white p-8 shadow-xl">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[var(--vpe-amber)]/15 ring-1 ring-[var(--vpe-amber)]/40">
                    <Factory className="h-5 w-5 text-[var(--vpe-amber)]" />
                  </span>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/55">
                      Our Promise
                    </p>
                    <p className="font-display text-lg font-semibold uppercase tracking-wider">
                      Precision Today
                    </p>
                  </div>
                </div>

                <Quote className="mt-6 h-8 w-8 text-[var(--vpe-amber)]/60" aria-hidden="true" />
                <p className="mt-4 text-lg sm:text-xl leading-relaxed text-white/90">
                  &ldquo;Every cut we make is a step toward a stronger
                  partnership. We do not chase perfection once — we chase it
                  every single part, every single day.&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="h-12 w-12 rounded-full bg-[var(--vpe-amber)] text-[var(--vpe-charcoal-deep)] flex items-center justify-center font-display font-bold text-lg">
                    RP
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold uppercase tracking-wider">
                      Ruchit Patel
                    </p>
                    <p className="text-xs text-white/55 font-mono uppercase tracking-[0.18em]">
                      Proprietor · Vista Prime Engineering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
