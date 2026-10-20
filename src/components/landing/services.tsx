'use client'

import { Cog, Drill, Hammer, Handshake, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const SERVICES = [
  {
    icon: Cog,
    title: "CNC Turning",
    tagline: "Turns Your Ideas Into Reality",
    description:
      "High-precision turned components on multi-axis CNC lathes — from simple diameters to complex profiles with tight tolerances and consistent surface finish across production batches.",
    points: [
      "Cylindrical & stepped components",
      "Internal threading & boring",
      "Batch-to-mass production",
    ],
    accent: "from-orange-500/25 to-transparent",
  },
  {
    icon: Drill,
    title: "VMC Milling",
    tagline: "Precision In Every Cut",
    description:
      "Vertical Machining Centre milling for prismatic parts, pockets, contours, and complex 3D geometries — delivering repeatable accuracy on ferrous, non-ferrous, and engineered alloys.",
    points: [
      "3-axis & 4-axis capabilities",
      "Complex pocket & contour milling",
      "Tight flatness & parallelism",
    ],
    accent: "from-blue-500/25 to-transparent",
  },
  {
    icon: Hammer,
    title: "Precision Machining",
    tagline: "Higher Accuracy · Higher Quality",
    description:
      "When tolerances are non-negotiable — our precision machining capability holds micron-level accuracy on critical dimensions while maintaining surface integrity and inspection-ready output.",
    points: [
      "Micron-level tolerances",
      "Surface integrity focus",
      "In-process inspection",
    ],
    accent: "from-orange-400/25 to-transparent",
  },
  {
    icon: Handshake,
    title: "Long-term Partnership",
    tagline: "Your Trust · Our Strength",
    description:
      "More than a vendor — a partner. We invest in understanding your drawing, your supply chain, and your quality expectations so the first batch feels like the hundredth.",
    points: [
      "Drawing-level consultation",
      "Consistent batch quality",
      "Reliable delivery windows",
    ],
    accent: "from-blue-400/25 to-transparent",
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-secondary/40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] text-[var(--vpe-amber-dark)]">
            <span className="h-px w-8 bg-[var(--vpe-amber-dark)]" />
            What We Do
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground">
            Four Capabilities · One Promise
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Our service portfolio covers the complete machining journey — from
            turned blanks to milled features to final precision passes — held
            together by a partnership-first philosophy that keeps customers
            coming back.
          </p>
        </div>

        {/* Service grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all hover:border-[var(--vpe-amber)]/50 hover:shadow-lg"
            >
              <div
                className={`pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${service.accent} blur-2xl opacity-70 transition-opacity group-hover:opacity-100`}
                aria-hidden="true"
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--vpe-charcoal-deep)] ring-1 ring-[var(--vpe-amber)]/40">
                    <service.icon className="h-6 w-6 text-[var(--vpe-amber)]" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground/50 transition-colors group-hover:text-[var(--vpe-amber)]" />
                </div>

                <h3 className="mt-5 font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-1 text-xs font-mono uppercase tracking-[0.18em] text-[var(--vpe-amber-dark)]">
                  {service.tagline}
                </p>

                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm text-foreground/85"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--vpe-amber)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-10 flex justify-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-[var(--vpe-amber-dark)] transition-colors"
          >
            Need something not listed?
            <span className="font-mono uppercase tracking-widest underline underline-offset-4">
              Let&apos;s talk
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
