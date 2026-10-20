'use client'

import Link from "next/link"
import { ArrowRight, ChevronDown, Cog, Drill, Hammer, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[var(--vpe-charcoal-deep)] text-white"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 bg-amber-glow" aria-hidden="true" />
      <div
        className="absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(91,101,242,0.22), transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20 sm:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            {/* Brand badge: real logo + tagline */}
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur">
              <img
                src="/logo-192.png"
                alt="VPE logo"
                width={24}
                height={24}
                className="h-6 w-6 rounded-sm bg-white object-contain"
              />
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-white/85">
                Precision Today · Better Tomorrow
              </span>
            </div>

            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tight leading-[1.05]">
              <span className="block text-white">Vista Prime</span>
              <span className="block bg-gradient-to-r from-[var(--vpe-blue)] via-indigo-300 to-[var(--vpe-blue)] bg-clip-text text-transparent">
                Engineering
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/75 leading-relaxed">
              A precision machining house turning ideas into metal. We
              specialise in <span className="text-white font-medium">CNC Turning</span>,{" "}
              <span className="text-white font-medium">VMC Milling</span>, and{" "}
              <span className="text-white font-medium">Precision Machining</span> for
              industries that demand accuracy without compromise — and a
              partnership built to last.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="group">
                <Link href="#contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>

            {/* Quick stats */}
            <dl className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl">
              {[
                { value: "4", label: "Core services" },
                { value: "1", label: "Trusted owner" },
                { value: "∞", label: "Tolerances held" },
              ].map((stat) => (
                <div key={stat.label} className="border-l border-[var(--vpe-amber)]/40 pl-4">
                  <dt className="font-display text-2xl sm:text-3xl font-bold text-[var(--vpe-amber)]">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-[11px] sm:text-xs font-mono uppercase tracking-[0.18em] text-white/60">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: visual mock */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Decorative floating cards */}
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[var(--vpe-blue)]/40 via-[var(--vpe-amber)]/20 to-transparent blur-xl" aria-hidden="true" />

                <div className="relative rounded-2xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-sm shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-white/70">
                      <Cog className="h-3.5 w-3.5 text-[var(--vpe-amber)]" />
                      Capability Card
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50">
                      VPE / 001
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {[
                      { icon: Cog, title: "CNC Turning", note: "±0.01 mm" },
                      { icon: Drill, title: "VMC Milling", note: "3 / 4 axis" },
                      { icon: Hammer, title: "Precision Machining", note: "ISO grade" },
                      { icon: ShieldCheck, title: "Long-term Trust", note: "Partnership" },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="group/cap rounded-lg border border-white/10 bg-white/[0.04] p-4 hover:border-[var(--vpe-amber)]/50 hover:bg-white/[0.06] transition-colors"
                      >
                        <item.icon className="h-5 w-5 text-[var(--vpe-amber)]" />
                        <div className="mt-2 text-sm font-semibold text-white">
                          {item.title}
                        </div>
                        <div className="mt-0.5 text-[11px] font-mono uppercase tracking-wider text-white/55">
                          {item.note}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-lg bg-[var(--vpe-amber)]/10 border border-[var(--vpe-amber)]/30 p-3 text-center">
                    <p className="font-display text-sm uppercase tracking-[0.2em] text-[var(--vpe-amber)]">
                      Together We Build Better
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex justify-center">
          <Link
            href="#about"
            aria-label="Scroll to about"
            className="inline-flex flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-white/55 hover:text-white transition-colors"
          >
            Scroll
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </Link>
        </div>
      </div>

      {/* Bottom metal-shine divider */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--vpe-amber)]/60 to-transparent" aria-hidden="true" />
    </section>
  )
}
