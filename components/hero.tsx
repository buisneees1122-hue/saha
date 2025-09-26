"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const heroImages = [
  "/exterior-car-wash-scene.jpg",
  "/interior-detailing-car-seats.jpg",
  "/ceramic-coating-application.png",
  "/engine-bay-clean.jpg",
]

export function Hero() {
  const [api, setApi] = useState<CarouselApi | null>(null)

  useEffect(() => {
    if (!api) return
    const id = setInterval(() => {
      api?.scrollNext()
    }, 4500)
    return () => clearInterval(id)
  }, [api])

  return (
    <section className="bg-background">
      <div className="relative mx-auto max-w-6xl px-4 py-14">
        {/* Background carousel */}
        <div className="absolute inset-0 -z-10 rounded-lg overflow-hidden">
          <Carousel className="h-full" opts={{ loop: true, align: "start" }} setApi={setApi}>
            <CarouselContent className="h-full">
              {heroImages.map((src) => (
                <CarouselItem key={src} className="h-[60vh] md:h-[72vh]">
                  <div className="relative h-full w-full">
                    {/* Use next/image for optimal loading */}
                    <Image src={src} alt="Showcase vehicle detailing" fill className="object-cover" priority />
                    {/* Soft dark gradient overlay to keep a subtle dark look */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-background/70 to-background/50" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="relative grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Premium Mobile Detailing</p>
            <h1 className="text-pretty text-4xl md:text-5xl font-semibold mt-2">We Shine With Details</h1>
            <p className="mt-4 leading-relaxed text-balance">
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

          <div className="relative hidden md:block">
            <div className="relative aspect-[4/3] rounded-lg border border-border overflow-hidden">
              <Image src="/interior-detailing-car-seats.jpg" alt="Interior detailing in progress" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
