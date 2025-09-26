"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-background">
      <div className="relative mx-auto max-w-6xl px-4 py-14">
        {/* Luxury HD background with soft fade for readability */}
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-lg hero-luxury-bg">
          <div className="hero-bg-overlay" />
          <span className="sr-only">Background showcasing premium detailing finish</span>
        </div>

        <div className="relative">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Premium Mobile Detailing</p>
            <h1 className="text-pretty text-5xl md:text-6xl font-semibold mt-2">We Shine With Details</h1>
            <p className="mt-4 text-lg md:text-xl leading-relaxed text-balance">
              Premium car washing and detailing services at your convenience. From quick exterior washes to full interior
              restorations and ceramic coatings — we keep your car looking its best.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="#contact">
                <Button className="bg-primary text-primary-foreground">Book an Appointment</Button>
              </Link>
              <Link href="#services">
                <Button variant="outline">Explore Services</Button>
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Image src="/placeholder-user.jpg" alt="Customer" width={28} height={28} className="rounded-full" />
                <span>Trusted by local owners</span>
              </div>
              <span aria-hidden>•</span>
              <span>Fully insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
