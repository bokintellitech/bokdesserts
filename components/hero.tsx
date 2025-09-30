"use client"

import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById("postres")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/20 to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            <span>Los mejores postres</span>
          </div>

          <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            Deliciosos postres para cada ocasión
          </h1>

          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
            Descubre nuestra selección de pasteles de Costco, Sam's Club, La Esperanza, El Globo y más. Acompañados de
            las mejores bebidas calientes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full text-base" onClick={scrollToProducts}>
              Ver Productos
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base bg-transparent">
              Conocer Más
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
    </section>
  )
}

