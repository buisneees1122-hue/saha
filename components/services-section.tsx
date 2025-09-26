import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Exterior Wash",
    desc: "Hand wash, dry, and tire shine for a spotless shine.",
    img: "/exterior-car-wash-scene.jpg",
  },
  {
    title: "Interior Detailing",
    desc: "Vacuum, upholstery clean, dashboard care, and odor removal.",
    img: "/interior-detailing-car-seats.jpg",
  },
  {
    title: "Ceramic Coating",
    desc: "Long-lasting protection and deep gloss finish.",
    img: "/ceramic-coating-application.png",
  },
  {
    title: "Engine Bay Clean",
    desc: "Degrease and protect for a tidy engine bay.",
    img: "/engine-bay-clean.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Our Services</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <Card key={s.title} className="bg-card text-card-foreground transition-transform duration-300 hover:-translate-y-0.5">
              <CardHeader>
                <CardTitle className="text-lg">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <div className="relative overflow-hidden rounded-md border border-border">
                  <img
                    src={s.img || "/placeholder.svg"}
                    alt={`${s.title} illustration`}
                    className="size-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <p className="leading-relaxed">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
