"use client"

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const galleryImages = [
  { src: "/exterior-car-wash-scene.jpg", alt: "Exterior wash with foam" },
  { src: "/interior-detailing-car-seats.jpg", alt: "Interior detailing seats" },
  { src: "/ceramic-coating-application.png", alt: "Ceramic coating application" },
  { src: "/engine-bay-clean.jpg", alt: "Engine bay clean" },
  { src: "/interior-detailing-car-seats.jpg", alt: "Dashboard and steering clean" },
  { src: "/exterior-car-wash-scene.jpg", alt: "High-pressure rinse" },
  { src: "/engine-bay-clean.jpg", alt: "Engine bay detail" },
  { src: "/ceramic-coating-application.png", alt: "Coating for deep gloss" },
]

export function GallerySection() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<{ src: string; alt: string } | null>(null)

  return (
    <section id="gallery" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Gallery</h2>
        <p className="mt-2 leading-relaxed">A look at recent details and finishes.</p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryImages.map((img, idx) => (
            <Dialog key={idx} open={open && active?.src === img.src} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button
                  className="group relative aspect-square overflow-hidden rounded-md border border-border"
                  onClick={() => {
                    setActive(img)
                    setOpen(true)
                  }}
                  aria-label={`View ${img.alt}`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl p-2" showCloseButton>
                {active && (
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md">
                    <Image src={active.src} alt={active.alt} fill className="object-cover" />
                  </div>
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
