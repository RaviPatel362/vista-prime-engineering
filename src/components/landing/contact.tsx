'use client'

import { useState } from "react"
import { Phone, Mail, MapPin, User, Clock, ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Contact details — easily editable for the owner.
// Replace the placeholder values with real VPE contact information before going live.
const CONTACT = {
  phone: "+91 84018 32511", // ← Replace with actual VPE phone
  // altPhone: "+91 84018 32511", // ← Replace with alternate number (or remove)
  email: "vistaprimeengineering@gmail.com", // ← Replace with actual email
  address: "09, SHIVEN ENCLAVE ATLADRA, RAILWAY CROSSING, Manjalpur, Vadodara, Gujarat 390011", // ← Replace with actual address
  proprietor: "Ruchit Patel",
}

const CONTACT_CARDS = [
  {
    icon: Phone,
    label: "Call Us",
    value: CONTACT.phone,
    // sub: `Alt: ${CONTACT.altPhone}`,
    href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: CONTACT.email,
    sub: "Drawing-based quotes welcome",
    href: `mailto:${CONTACT.email}`,
  },
]

const SERVICE_OPTIONS = [
  "CNC Turning",
  "VMC Milling",
  "Precision Machining",
  "Long-term Partnership / Bulk Order",
  "Drawing Review / Consultation",
  "Other",
]

export default function Contact() {
  const { toast } = useToast()
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)

    // Simulate async submit — in a real deploy, swap this for a fetch() call
    // to a form backend (Formspree, Google Forms, custom API route, etc.)
    await new Promise((r) => setTimeout(r, 800))

    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") || "")
    const phone = String(data.get("phone") || "")
    const service = String(data.get("service") || "")
    const message = String(data.get("message") || "")

    // Build a mailto link as a no-backend fallback so submissions still land
    // somewhere the proprietor can read even without a backend.
    const subject = encodeURIComponent(`New enquiry from ${name || "website visitor"}`)
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Service interested in: ${service}`,
        ``,
        `Message:`,
        message || "(no message)",
      ].join("\n"),
    )
    const mailto = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`

    setSubmitting(false)
    toast({
      title: "Enquiry ready to send",
      description: "Your email client should open with the details pre-filled.",
    })

    // Open mail client so the user can hit send.
    window.location.href = mailto
    form.reset()
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-secondary/40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] text-[var(--vpe-amber-dark)]">
            <span className="h-px w-8 bg-[var(--vpe-amber-dark)]" />
            Contact
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground">
            Let&apos;s Build Something Precise
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Share a drawing, a tolerance, or a target quantity. Ruchit Patel
            personally reviews every enquiry that comes through this form —
            you&apos;ll hear back from the shop floor, not a call centre.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-8">
          {/* Left: contact cards + map */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid sm:grid-cols-2 gap-3">
              {CONTACT_CARDS.map((card) => {
                const Card = (
                  <div className="group flex h-full flex-col gap-2 rounded-xl border border-border bg-card p-5 transition-all hover:border-[var(--vpe-amber)]/50 hover:shadow-sm">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--vpe-amber)]/10 ring-1 ring-[var(--vpe-amber)]/30">
                        <card.icon className="h-5 w-5 text-[var(--vpe-amber-dark)]" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                          {card.label}
                        </p>
                        <p className="truncate text-sm font-semibold text-foreground">
                          {card.value}
                        </p>
                      </div>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{card.sub}</p>
                  </div>
                )
                return card.href ? (
                  <a key={card.label} href={card.href} className="block">
                    {Card}
                  </a>
                ) : (
                  <div key={card.label}>{Card}</div>
                )
              })}
            </div>

            {/* Proprietor strip */}
            <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
              <div className="h-12 w-12 rounded-full bg-[var(--vpe-charcoal-deep)] text-[var(--vpe-amber)] flex items-center justify-center ring-1 ring-[var(--vpe-amber)]/40">
                <User className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                  Proprietor
                </p>
                <p className="font-display text-base font-semibold uppercase tracking-wide text-foreground">
                  {CONTACT.proprietor}
                </p>
                <p className="text-xs text-muted-foreground">
                  Direct line available on request
                </p>
              </div>
            </div>

            {/* Address block */}
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--vpe-amber-dark)]" />
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                    Workshop Address
                  </p>
                  <p className="mt-1 text-sm text-foreground leading-relaxed">
                    {CONTACT.address}
                  </p>
                </div>
              </div>
              <div id="map" className="mt-4 overflow-hidden rounded-lg border border-border">
                <iframe
                  title="VPE workshop location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=72.5%2C22.9%2C73.0%2C23.4&layer=mapnik"
                  className="h-44 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-2 text-[11px] text-muted-foreground">
                Map shown is approximate. Update with the actual workshop
                coordinates for production.
              </p>
            </div>
          </div>

          {/* Right: enquiry form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
                Request a Quote
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Required fields are marked with an asterisk. Your information is
                used only to respond to your enquiry.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      autoComplete="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service interested in</Label>
                    <Select name="service">
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {SERVICE_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project details / message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Share quantity, material, critical tolerances, target date — anything that helps us quote accurately."
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                  <p className="text-xs text-muted-foreground">
                    Submitting opens your email client with the details
                    pre-filled — a no-backend fallback for GitHub Pages hosting.
                  </p>
                  <Button type="submit" size="lg" className="group self-start sm:self-auto" disabled={submitting}>
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Preparing…
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
