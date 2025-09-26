import { Hero } from "@/components/hero"
import { ServicesSection } from "@/components/services-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AboutSection } from "@/components/about-section"
import { GallerySection } from "@/components/gallery-section"

export default function HomePage() {
  return (
    <main id="top" className="min-h-dvh bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <PricingSection />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
