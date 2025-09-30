
"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Cake, Coffee } from "lucide-react"

const postres = [
  {
    id: 1,
    name: "Pastel de Chocolate Costco",
    provider: "Costco",
    price: 299,
    image: "/decadent-chocolate-cake.png",
    category: "postres",
  },
  {
    id: 2,
    name: "Cheesecake Sam's Club",
    provider: "Sam's Club",
    price: 249,
    image: "/classic-cheesecake.png",
    category: "postres",
  },
  {
    id: 3,
    name: "Tres Leches La Esperanza",
    provider: "La Esperanza",
    price: 189,
    image: "/tres-leches-cake.jpg",
    category: "postres",
  },
  {
    id: 4,
    name: "Pastel de Fresa El Globo",
    provider: "El Globo",
    price: 219,
    image: "/strawberry-cake.png",
    category: "postres",
  },
  {
    id: 5,
    name: "Tiramisu Costco",
    provider: "Costco",
    price: 279,
    image: "/classic-tiramisu.png",
    category: "postres",
  },
  {
    id: 6,
    name: "Red Velvet Sam's Club",
    provider: "Sam's Club",
    price: 259,
    image: "/red-velvet-cake.png",
    category: "postres",
  },
]

const bebidas = [
  {
    id: 7,
    name: "Café Americano",
    provider: "BokDesserts",
    price: 45,
    image: "/americano-coffee.png",
    category: "bebidas",
  },
  {
    id: 8,
    name: "Cappuccino",
    provider: "BokDesserts",
    price: 55,
    image: "/frothy-cappuccino.png",
    category: "bebidas",
  },
  {
    id: 9,
    name: "Té Verde",
    provider: "BokDesserts",
    price: 40,
    image: "/cup-of-green-tea.png",
    category: "bebidas",
  },
  {
    id: 10,
    name: "Chocolate Caliente",
    provider: "BokDesserts",
    price: 50,
    image: "/steaming-hot-chocolate.png",
    category: "bebidas",
  },
  {
    id: 11,
    name: "Latte",
    provider: "BokDesserts",
    price: 55,
    image: "/latte-coffee.png",
    category: "bebidas",
  },
  {
    id: 12,
    name: "Té Chai",
    provider: "BokDesserts",
    price: 48,
    image: "/spiced-chai.png",
    category: "bebidas",
  },
]

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<"all" | "postres" | "bebidas">("all")

  const filteredProducts =
    activeCategory === "all" ? [...postres, ...bebidas] : activeCategory === "postres" ? postres : bebidas

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="mb-12 flex flex-col items-center gap-6">
          <h2 className="text-balance text-4xl font-bold text-foreground md:text-5xl">Nuestros Productos</h2>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              variant={activeCategory === "all" ? "default" : "outline"}
              size="lg"
              className="rounded-full"
              onClick={() => setActiveCategory("all")}
            >
              Todos
            </Button>
            <Button
              variant={activeCategory === "postres" ? "default" : "outline"}
              size="lg"
              className="rounded-full gap-2"
              onClick={() => setActiveCategory("postres")}
            >
              <Cake className="h-4 w-4" />
              Postres
            </Button>
            <Button
              variant={activeCategory === "bebidas" ? "default" : "outline"}
              size="lg"
              className="rounded-full gap-2"
              onClick={() => setActiveCategory("bebidas")}
            >
              <Coffee className="h-4 w-4" />
              Bebidas
            </Button>
          </div>
        </div>

        {/* Postres Section */}
        <div id="postres" className="mb-16">
          <h3 className="mb-8 text-3xl font-bold text-foreground">Postres Premium</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(activeCategory === "all" || activeCategory === "postres") &&
              postres.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>

        {/* Bebidas Section */}
        <div id="bebidas">
          <h3 className="mb-8 text-3xl font-bold text-foreground">Bebidas Calientes</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(activeCategory === "all" || activeCategory === "bebidas") &&
              bebidas.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
