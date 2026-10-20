'use client'

import { useState } from "react"
import { Phone, Mail, Clock, User, ArrowRight, Loader2, Calendar, ShieldCheck } from "lucide-react"
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

// ============================================================================
// IMPORTANT: Replace this email with your actual VPE email address.
// This is where all form submissions will be delivered.
// ============================================================================
const FORM_RECIPIENT_EMAIL = "vistaprimeengineering@gmail.com"

// Contact details — kept in sync with footer.tsx
const CONTACT = {
  phone: "+91 84018 32511",
  email: "vistaprimeengineering@gmail.com",
  proprietor: "Ruchit Patel",
  hours: "Mon – Sat · 09:30 – 18:30 IST",
}

const CONTACT_CARDS = [
  {
    icon: Phone,
    label: "Call Us",
    value: CONTACT.phone,
    sub: "Direct line · Ruchit Patel",
    href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: CONTACT.email,
    sub: "Drawing-based quotes welcome",
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat",
    sub: CONTACT.hours,
    href: undefined,
  },
  {
    icon: Calendar,
    label: "Workshop Visits",
    value: "By Appointment",
    sub: "Call ahead to schedule a visit",
    href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
  },
]

const SERVICE_OPTIONS = [
  "CNC Turning",
  "VMC Milling",
  "Precision Machining",
  "Long-term Partnership / Bulk Order",
  "Other",
]

export default function Contact() {
  const { toast } = useToast()
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get("name") || "")
    const phone = String(formData.get("phone") || "")
    const email = String(formData.get("email") || "")
    const service = String(formData.get("service") || "")
    const message = String(formData.get("message") || "")

    const honeypot = String(formData.get("_honey") || "")
    if (honeypot) {
      setSubmitting(false)
      toast({
        title: "Enquiry submitted",
        description: "Thank you — we'll get back to you within 24 hours.",
      })
      form.reset()
      return
    }

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(FORM_RECIPIENT_EMAIL)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `New VPE enquiry from ${name || "website visitor"}`,
            _template: "table",
            _captcha: "false",
            _autoresponse: `Hello ${name},\n\nThank you for contacting Vista Prime Engineering. We have received your enquiry and Ruchit Patel will respond within 24 hours.\n\nBest regards,\nVista Prime Engineering\nPrecision Today · Better Tomorrow`,
            Name: name,
            Phone: phone,
            Email: email,
            "Service interested in": service,
            Message: message,
          }),
        }
      )

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const data = await response.json()

      if (data.success === "true" || data.success === true) {
        toast({
          title: "Enquiry sent successfully",
          description: "Thank you — Ruchit Patel will respond within 24 hours.",
        })
        form.reset()
      } else {
        throw new Error(data.message || "Submission failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        title: "Could not send enquiry",
        description: `Please try again, or call us directly at ${CONTACT.phone}`,
        variant: "destructive",
      })
    } finally {
      setSubmitting(false)
    }
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
          {/* Left: contact cards + proprietor + trust badge */}
          <div className="lg:col-span-5 space-y-4">
            {/* 4-card grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {CONTACT_CARDS.map((card) => {
                const Card = (
                  <div className="group flex h-full flex-col gap-2 rounded-xl border border-border bg-card p-5 transition-all hover:border-[var(--vpe-amber)]/50 hover:shadow-sm">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--vpe-amber)]/10 ring-1 ring-[var(--vpe-amber)]/30">
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
              <div className="h-12 w-12 rounded-full bg-[var(--vpe-charcoal-deep)] text-[var(--vpe-amber)] flex items-center justify-center ring-1 ring-[var(--vpe-amber)]/40 flex-shrink-0">
                <User className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                  Proprietor
                </p>
                <p className="font-display text-base font-semibold uppercase tracking-wide text-foreground">
                  {CONTACT.proprietor}
                </p>
                <p className="text-xs text-muted-foreground">
                  Personally reviews every enquiry
                </p>
              </div>
            </div>

            {/* Trust / privacy note */}
            <div className="flex items-start gap-3 rounded-xl border border-[var(--vpe-blue)]/20 bg-[var(--vpe-blue-soft)]/30 p-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--vpe-blue-dark)]" />
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground">
                  Your information stays private
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                  Submissions are delivered directly to Ruchit Patel — never
                  shared, sold, or added to a marketing list.
                </p>
              </div>
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
                {/* Honeypot — hidden from humans, visible to bots */}
                <input
                  type="text"
                  name="_honey"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

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
                  <div className="space-y-2 min-w-0">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      autoComplete="email"
                    />
                  </div>
                  <div className="space-y-2 min-w-0">
                    <Label htmlFor="service">Service interested in</Label>
                    <Select name="service">
                      <SelectTrigger id="service" className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="max-h-72">
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
                    Submissions are delivered to Ruchit Patel directly. We
                    typically respond within 24 hours.
                  </p>
                  <Button type="submit" size="lg" className="group self-start sm:self-auto" disabled={submitting}>
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending…
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