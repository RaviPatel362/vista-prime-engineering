'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Why VPE", href: "#why-vpe" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 sm:h-20 items-center justify-between">
          <Link href="#top" className="group flex items-center gap-3">
            {/* VPE logo (PNG, web-optimised at /public/logo.png) */}
            <span className="relative inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center overflow-hidden rounded-md bg-white ring-1 ring-[var(--vpe-blue)]/30 transition-shadow group-hover:ring-[var(--vpe-blue)]/60">
              <img
                src="/logo.png"
                alt="Vista Prime Engineering logo"
                width={48}
                height={48}
                className="h-full w-full object-contain"
                loading="eager"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-base sm:text-lg font-bold uppercase tracking-[0.16em] text-[var(--vpe-blue-dark)]">
                Vista Prime
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.32em] text-[var(--vpe-amber-dark)]">
                Engineering
              </span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="ml-2">
              <Link href="#contact">
                Request a Quote
              </Link>
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <div className="flex items-center justify-between">
                <SheetTitle className="flex items-center gap-3">
                  <img
                    src="/logo.png"
                    alt="VPE logo"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-md object-contain ring-1 ring-[var(--vpe-blue)]/30"
                  />
                  <span className="font-display uppercase tracking-[0.18em] text-[var(--vpe-blue-dark)]">
                    Menu
                  </span>
                </SheetTitle>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" aria-label="Close menu">
                    <X className="h-5 w-5" />
                  </Button>
                </SheetClose>
              </div>
              <div className="mt-8 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="mt-3">
                    <Link href="#contact">Request a Quote</Link>
                  </Button>
                </SheetClose>
              </div>
              <div className="mt-10 pt-6 border-t border-border text-sm text-muted-foreground">
                <p className="font-mono uppercase tracking-widest text-xs">
                  Proprietor
                </p>
                <p className="mt-1 font-medium text-foreground">Ruchit Patel</p>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}
