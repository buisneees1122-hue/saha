import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="w-full border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="#top" className="flex items-center gap-3">
          <Image
            src="/images/sahalogo-removebg-preview.png"
            alt="Car Detailing Saha logo"
            width={40}
            height={40}
            priority
          />
          <span className="font-semibold tracking-wide">Car Detailing Saha</span>
        </Link>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
          <Link href="#about" className="hover:underline">About</Link>
          <Link href="#services" className="hover:underline">Services</Link>
          <Link href="#gallery" className="hover:underline">Gallery</Link>
          <Link href="#pricing" className="hover:underline">Pricing</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
          <Link href="#contact">
            <Button className="bg-primary text-primary-foreground">Book Now</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
