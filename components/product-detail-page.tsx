"use client"

import { ShoppingCart, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ProductGallery } from "@/components/product-gallery"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { useCart } from "@/hooks/use-cart"
import { useFavorites } from "@/hooks/use-favorites"
import { useToast } from "@/hooks/use-toast"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Footer } from "@/components/footer"

// Mock data - en producción vendría de una API o base de datos
const productsData: Record<string, any> = {
  "1": {
    id: 1,
    name: "Pastel de Chocolate Costco",
    provider: "Costco",
    price: 65,
    images: ["/decadent-chocolate-cake.png", "/chocolate-cake-slice.png", "/chocolate-cake-layers.jpg"],
    category: "postres",
    description:
      "Delicioso pastel de chocolate premium con capas de bizcocho esponjoso y cobertura de chocolate belga. Perfecto para celebraciones especiales o simplemente para disfrutar en familia.",
    features: ["8-10 porciones", "Chocolate belga premium", "Bizcocho esponjoso", "Decoración elegante"],
    allergens: ["Gluten", "Huevo", "Lácteos"],
  },
}

interface ProductDetailPageProps {
  productId: string
}

export function ProductDetailPage({ productId }: ProductDetailPageProps) {
  const router = useRouter()
  const { addToCart } = useCart()
  const { toggleFavorite } = useFavorites()
  const { toast } = useToast()
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const product = productsData[productId]

  useEffect(() => {
    if (typeof window !== "undefined") {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")
      setIsFavorite(favorites.some((fav: any) => fav.id === product?.id))
    }
  }, [product?.id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
          <Button onClick={() => router.push("/")}>Volver al inicio</Button>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    toast({
      title: "¡Agregado al carrito!",
      description: `${quantity} ${product.name} agregado(s) a tu carrito.`,
      duration: 3000,
    })
  }

  const handleToggleFavorite = () => {
    const wasLiked = isFavorite
    toggleFavorite(product)
    setIsFavorite(!wasLiked)
    toast({
      title: wasLiked ? "Eliminado de favoritos" : "¡Agregado a favoritos!",
      description: wasLiked
        ? `${product.name} ha sido eliminado de tus favoritos.`
        : `${product.name} ha sido agregado a tus favoritos.`,
      duration: 3000,
    })
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Mira este producto: ${product.name}`,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast({
        title: "Enlace copiado",
        description: "El enlace ha sido copiado al portapapeles",
        duration: 3000,
      })
    }
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            brand: {
              "@type": "Brand",
              name: product.provider,
            },
            offers: {
              "@type": "Offer",
              price: product.price,
              priceCurrency: "MXN",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: "BokDesserts",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "127",
            },
          }),
        }}
      />
      <section className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: product.category === "postres" ? "Postres" : "Bebidas", href: `/#${product.category}` },
            { label: product.name },
          ]}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Gallery */}
          <div>
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-3">
                {product.provider}
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-primary">
                ${product.price}
                <span className="text-lg font-normal text-muted-foreground"> MXN</span>
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-lg font-semibold mb-2">Descripción</h2>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">Características</h2>
              <ul className="space-y-2">
                {product.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Alérgenos</h2>
              <div className="flex flex-wrap gap-2">
                {product.allergens.map((allergen: string, index: number) => (
                  <Badge key={index} variant="outline">
                    {allergen}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium">Cantidad:</label>
                <div className="flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10"
                  >
                    -
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button size="icon" variant="outline" onClick={() => setQuantity(quantity + 1)} className="h-10 w-10">
                    +
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 gap-2 rounded-full" size="lg" onClick={handleAddToCart}>
                  <ShoppingCart className="h-5 w-5" />
                  Agregar al Carrito
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-12 w-12 rounded-full bg-transparent"
                  onClick={handleToggleFavorite}
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-12 w-12 rounded-full bg-transparent"
                  onClick={handleShare}
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Tiempo de entrega</span>
                    <span className="font-medium">30 - 40 min.</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Disponibilidad</span>
                    <span className="font-medium text-green-600">En stock</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
