"use client"

import { Heart } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { useFavorites } from "@/hooks/use-favorites"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Link from "next/link"

export function FavoritesPage() {
  const { favorites } = useFavorites()

  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Mis Favoritos" }]} />

        <div className="mb-12 flex items-center gap-3">
          <Heart className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">Mis Favoritos</h1>
        </div>

        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Heart className="mb-4 h-16 w-16 text-muted-foreground" />
            <h2 className="mb-2 text-2xl font-semibold text-foreground">No tienes favoritos aún</h2>
            <p className="mb-6 text-muted-foreground">Explora nuestros productos y agrega tus favoritos</p>
            <Link href="/">
              <Button size="lg" className="rounded-full">
                Ver Productos
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <p className="mb-8 text-muted-foreground">
              Tienes {favorites.length} {favorites.length === 1 ? "producto" : "productos"} en favoritos
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {favorites.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  )
}
