import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">About Car Detailing Saha</h2>
          <p className="mt-4 leading-relaxed">
            We are a detail-first studio focused on elevating your vehicle’s look and protection. From eco-friendly
            exterior washes to meticulous interior restoration and ceramic coatings, our mission is to deliver a
            showroom-level finish that lasts.
          </p>
          <ul className="mt-6 grid gap-3 text-sm leading-relaxed">
            <li className="flex items-start gap-2"><span className="mt-1 size-1.5 rounded-full bg-primary" /> Mobile service at your location</li>
            <li className="flex items-start gap-2"><span className="mt-1 size-1.5 rounded-full bg-primary" /> Premium, pH-balanced products only</li>
            <li className="flex items-start gap-2"><span className="mt-1 size-1.5 rounded-full bg-primary" /> Paint-safe methods and tools</li>
            <li className="flex items-start gap-2"><span className="mt-1 size-1.5 rounded-full bg-primary" /> Satisfaction guaranteed</li>
          </ul>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/3] rounded-lg border border-border overflow-hidden">
            <Image src="/exterior-car-wash-scene.jpg" alt="Exterior wash with foam and rinse" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
