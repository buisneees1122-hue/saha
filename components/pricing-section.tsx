import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const tiers = [
  {
    name: "Basic Wash",
    price: "$25",
    features: ["Exterior hand wash", "Tire shine", "Quick dry"],
  },
  {
    name: "Interior Care",
    price: "$60",
    features: ["Vacuum", "Dashboard clean", "Window clean", "Deodorize"],
    popular: true,
  },
  {
    name: "Full Detail",
    price: "$150",
    features: ["Full exterior + interior", "Wax or sealant", "Wheel deep clean"],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Pricing</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {tiers.map((t) => (
            <Card
              key={t.name}
              className={cn(
                "pricing-card bg-card text-card-foreground transition-shadow",
                t.popular && "ring-1 ring-primary/30 shadow-md"
              )}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{t.name}</span>
                  {t.popular && (
                    <span className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground">Popular</span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div>
                  <div className="text-3xl font-semibold">{t.price}</div>
                  <div className="text-xs text-muted-foreground">per vehicle</div>
                </div>
                <ul className="space-y-1 leading-relaxed">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-2 size-1.5 rounded-full bg-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-primary text-primary-foreground">Choose</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
