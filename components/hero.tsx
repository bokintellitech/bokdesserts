"use client"

import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById("postres")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 z-0">
        <Image
          src="/herocupcake.png"
          alt="Delicioso cupcake de crema con fresa"
          fill
          className="object-cover"
          priority
          quality={90}
          query="delicious strawberry cream cupcake with fresh strawberry on top, professional food photography, soft lighting"
        />
        {/* Overlay con gradiente para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/90 backdrop-blur-sm px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg">
            <Sparkles className="h-4 w-4" />
            <span>Los mejores postres</span>
          </div>

          <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl drop-shadow-lg">
            Deliciosos postres para cada ocasión
          </h1>

          <p className="mb-8 text-pretty text-lg text-foreground/90 md:text-xl drop-shadow-md">
            Descubre nuestra selección de pasteles de Costco, Sam's Club, La Esperanza, El Globo y más. Acompañados de
            las mejores bebidas calientes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full text-base shadow-xl" onClick={scrollToProducts}>
              Ver Productos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-base bg-background/80 backdrop-blur-sm border-2 shadow-lg"
            >
              Conocer Más
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl z-0" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-secondary/5 blur-3xl z-0" />
    </section>
  )
}

