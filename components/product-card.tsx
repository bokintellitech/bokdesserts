
"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

interface Product {
  id: number
  name: string
  provider: string
  price: number
  image: string
  category: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const { toast } = useToast()

  const handleAddToCart = () => {
    toast({
      title: "¡Agregado al carrito!",
      description: `${product.name} ha sido agregado a tu carrito.`,
      duration: 3000,
    })
  }

  const handleToggleLike = () => {
    setIsLiked(!isLiked)
    toast({
      title: isLiked ? "Eliminado de favoritos" : "¡Agregado a favoritos!",
      description: isLiked
        ? `${product.name} ha sido eliminado de tus favoritos.`
        : `${product.name} ha sido agregado a tus favoritos.`,
      duration: 3000,
    })
  }

  return (
    <Card
      className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
          />
          <div className="absolute top-3 right-3 z-10">
            <Button
              size="icon"
              variant="secondary"
              className={`rounded-full transition-all duration-300 ${
                isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
              onClick={handleToggleLike}
            >
              <Heart className={`h-4 w-4 transition-colors ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
            </Button>
          </div>
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-background/90 backdrop-blur">
              {product.provider}
            </Badge>
          </div>
        </div>

        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold text-foreground line-clamp-1">{product.name}</h3>
          <p className="text-2xl font-bold text-primary">
            ${product.price}
            <span className="text-sm font-normal text-muted-foreground"> MXN</span>
          </p>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2 rounded-full" onClick={handleAddToCart}>
          <ShoppingCart className="h-4 w-4" />
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  )
}
