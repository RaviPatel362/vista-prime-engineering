import Navbar from "@/components/landing/navbar"
import Hero from "@/components/landing/hero"
import About from "@/components/landing/about"
import Services from "@/components/landing/services"
import Capabilities from "@/components/landing/capabilities"
import WhyVPE from "@/components/landing/why-vpe"
import Contact from "@/components/landing/contact"
import Footer from "@/components/landing/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Capabilities />
        <WhyVPE />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
