"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sent">("idle")

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // In a future step we can wire an API or email integration.
    setStatus("sent")
  }

  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Contact & Booking</h2>
        <p className="mt-2 leading-relaxed">
          Tell us about your vehicle and preferred time. We’ll get back to you shortly.
        </p>

        <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input required type="text" placeholder="Full Name" aria-label="Full Name" />
          <Input required type="tel" placeholder="Phone Number" aria-label="Phone Number" />
          <Input className="md:col-span-2" type="email" placeholder="Email (optional)" aria-label="Email" />
          <Textarea className="md:col-span-2" required placeholder="Vehicle & Service Details" aria-label="Details" />
          <div className="md:col-span-2">
            <Button type="submit" className="bg-primary text-primary-foreground">
              Send
            </Button>
            {status === "sent" && <span className="ml-3 text-sm">Thanks! We received your request.</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
