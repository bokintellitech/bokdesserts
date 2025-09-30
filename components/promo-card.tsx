"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ShoppingCart, Sparkles } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

interface Promo {
  id: number
  titulo: string
  descripcion: string
  precio: string
  precioOriginal: string
  descuento: string
  imagen: string
  imageQuery: string
  incluye: string[]
  destacado: boolean
}

interface PromoCardProps {
  promo: Promo
}

export function PromoCard({ promo }: PromoCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { toast } = useToast()

  const handleAddToCart = () => {
    toast({
      title: "Agregado al carrito",
      description: `${promo.titulo} ha sido agregado a tu pedido`,
    })
  }

  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-300 ${
        promo.destacado ? "border-primary border-2" : "border-2"
      } ${isHovered ? "shadow-2xl scale-105" : "shadow-md"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {promo.destacado && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-primary text-primary-foreground shadow-lg">
            <Sparkles className="h-3 w-3 mr-1" />
            Popular
          </Badge>
        </div>
      )}

      <div className="absolute top-4 left-4 z-10">
        <Badge variant="destructive" className="text-sm font-bold shadow-lg">
          {promo.descuento}
        </Badge>
      </div>

      <div className="relative h-56 overflow-hidden bg-muted">
        <Image
          src={promo.imagen || "/placeholder.svg"}
          alt={promo.titulo}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
          query={promo.imageQuery}
        />
      </div>

      <CardHeader>
        <CardTitle className="text-2xl">{promo.titulo}</CardTitle>
        <CardDescription className="text-base leading-relaxed">{promo.descripcion}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="mb-4">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-3xl font-bold text-primary">{promo.precio}</span>
            <span className="text-lg text-muted-foreground line-through">{promo.precioOriginal}</span>
          </div>
          <p className="text-sm text-muted-foreground">Precio especial de promoción</p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">Incluye:</p>
          {promo.incluye.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Button
          onClick={handleAddToCart}
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
          size="lg"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  )
}
