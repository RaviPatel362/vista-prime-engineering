'use client'

import { Layers, Ruler, Gauge, Microscope, Boxes, Factory } from "lucide-react"

const CAPABILITIES = [
  {
    icon: Ruler,
    title: "Tolerance Range",
    value: "±0.01 mm",
    note: "Held on critical dimensions across batches",
  },
  {
    icon: Gauge,
    title: "Surface Finish",
    value: "Ra 0.8 – 1.6",
    note: "Achievable on turned & milled surfaces",
  },
  {
    icon: Layers,
    title: "Material Range",
    value: "Multi-grade",
    note: "MS, SS, EN series, aluminium, brass, copper",
  },
  {
    icon: Boxes,
    title: "Batch Size",
    value: "1 → N",
    note: "From prototype to repeat production",
  },
  {
    icon: Microscope,
    title: "Inspection",
    value: "In-process",
    note: "Vernier, micrometer & bore gauge verified",
  },
  {
    icon: Factory,
    title: "Lead Time",
    value: "Competitive",
    note: "Plan-driven scheduling, on-time dispatch",
  },
]

const MATERIALS = [
  "Mild Steel",
  "Stainless Steel",
  "EN Series",
  "Aluminium",
  "Brass",
  "Copper",
  "Cast Iron",
  "Bronze",
  "Alloy Steel",
  "Free-Cutting Steel",
]

const INDUSTRIES = [
  "Automotive",
  "Valves & Fittings",
  "General Engineering",
  "Electrical",
  "Agriculture Implements",
  "Custom Job Work",
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-20 sm:py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left: heading */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] text-[var(--vpe-amber-dark)]">
                <span className="h-px w-8 bg-[var(--vpe-amber-dark)]" />
                Capabilities
              </p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground">
                The Numbers That Build Trust
              </h2>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Capability is more than machine specs. It is the combination of
                tolerance, finish, material range, batch flexibility, inspection
                discipline, and lead-time reliability — together, the
                foundation of every part we deliver.
              </p>

              <div className="mt-8 rounded-xl border border-border bg-card p-5">
                <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                  Materials We Cut
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {MATERIALS.map((m) => (
                    <span
                      key={m}
                      className="inline-flex items-center rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium text-foreground"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: capability grid + industries */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {CAPABILITIES.map((cap) => (
                <div
                  key={cap.title}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all hover:border-[var(--vpe-amber)]/50 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--vpe-amber)]/10 ring-1 ring-[var(--vpe-amber)]/30">
                      <cap.icon className="h-5 w-5 text-[var(--vpe-amber-dark)]" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                      VPE
                    </span>
                  </div>
                  <p className="mt-4 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    {cap.title}
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold text-foreground">
                    {cap.value}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {cap.note}
                  </p>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--vpe-amber)]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              ))}
            </div>

            {/* Industries served */}
            <div className="mt-10 rounded-2xl border border-border bg-gradient-to-br from-card to-secondary/30 p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    Industries We Serve
                  </p>
                  <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
                    From Auto To Agriculture
                  </h3>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--vpe-amber-dark)]">
                  Sector-agnostic machining
                </span>
              </div>
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {INDUSTRIES.map((ind) => (
                  <div
                    key={ind}
                    className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2.5 text-sm font-medium text-foreground"
                  >
                    <span className="h-2 w-2 rounded-full bg-[var(--vpe-amber)]" />
                    {ind}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
