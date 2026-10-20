'use client'

import { ClipboardList, Cog, Search, Truck, ShieldCheck, FileText } from "lucide-react"

const STEPS = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Drawing Review",
    description:
      "We study your drawing — critical tolerances, surface callouts, material spec, and inspection points — before quoting. Surprises belong in the planning, not the parts.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Quote & Plan",
    description:
      "You receive an honest, line-itemised quote with cycle-time reasoning and a delivery window. No hidden costs, no optimistic estimates.",
  },
  {
    icon: Cog,
    step: "03",
    title: "Machining",
    description:
      "Process plan in hand, we machine on calibrated CNC lathes and VMCs — holding tolerances in-process rather than catching them after the fact.",
  },
  {
    icon: Search,
    step: "04",
    title: "In-process Inspection",
    description:
      "Vernier, micrometer, and bore gauge checks at defined stages. Each batch ships with the discipline of an aerospace shop, not the speed of a job-shop rush.",
  },
  {
    icon: ShieldCheck,
    step: "05",
    title: "Final QC & Dispatch",
    description:
      "Final dimensional pass, surface review, packaging fit for transit. Your part arrives the way it left the machine — clean, correct, on time.",
  },
  {
    icon: Truck,
    step: "06",
    title: "On-time Delivery",
    description:
      "Dispatch windows are commitments, not estimates. You can plan your downstream operations knowing your batch will land when promised.",
  },
]

export default function WhyVPE() {
  return (
    <section id="why-vpe" className="relative py-20 sm:py-28 bg-[var(--vpe-charcoal-deep)] text-white overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-50" aria-hidden="true" />
      <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--vpe-amber)]/60 to-transparent" aria-hidden="true" />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] text-[var(--vpe-amber)]">
            <span className="h-px w-8 bg-[var(--vpe-amber)]" />
            Why VPE
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight">
            A Process Built To Be Repeatable
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed">
            &ldquo;Precision&rdquo; becomes meaningless without a process that
            protects it. We have refined our workflow across six gates — from
            the first drawing review to the dispatch dock — so quality is the
            routine, not the rescue.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="group relative rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:border-[var(--vpe-amber)]/40 hover:bg-white/[0.06] transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--vpe-amber)]/10 ring-1 ring-[var(--vpe-amber)]/30">
                  <step.icon className="h-5 w-5 text-[var(--vpe-amber)]" />
                </span>
                <span className="font-display text-3xl font-bold text-white/10 group-hover:text-[var(--vpe-amber)]/40 transition-colors">
                  {step.step}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                {step.description}
              </p>

              {/* Connector dot for visual flow */}
              {idx < STEPS.length - 1 && (
                <span className="hidden lg:block absolute top-1/2 -right-3 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[var(--vpe-amber)]/50" />
              )}
            </div>
          ))}
        </div>

        {/* Banner strip */}
        <div className="mt-12 rounded-2xl border border-[var(--vpe-amber)]/30 bg-[var(--vpe-amber)]/[0.07] p-6 sm:p-8 text-center">
          <p className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">
            Together We Build Better
          </p>
          <p className="mt-2 text-sm text-white/65 max-w-2xl mx-auto">
            Not a slogan — an operating principle. When you grow, we grow. When
            you trust us with your hardest tolerance, we treat it as our own.
          </p>
        </div>
      </div>
    </section>
  )
}
