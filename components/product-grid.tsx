"use client"

import { useState, useMemo } from "react"
import { ProductCard } from "@/components/product-card"
import { ProductSearch } from "@/components/product-search"
import { Button } from "@/components/ui/button"
import { Cake, Coffee } from "lucide-react"

const postres = [
  {
    id: 1,
    name: "Pastel de Chocolate Costco",
    provider: "Costco",
    price: 60,
    image: "/decadent-chocolate-cake.png",
    category: "postres",
  },
  {
    id: 2,
    name: "Cheesecake Sam's Club",
    provider: "Sam's Club",
    price: 55,
    image: "/classic-cheesecake.png",
    category: "postres",
  },
  {
    id: 3,
    name: "Tres Leches La Esperanza",
    provider: "La Esperanza",
    price: 65,
    image: "/tres-leches-cake.jpg",
    category: "postres",
  },
  {
    id: 4,
    name: "Pastel de Fresa El Globo",
    provider: "El Globo",
    price: 70,
    image: "/strawberry-cake.png",
    category: "postres",
  },
  {
    id: 5,
    name: "Tiramisu Costco",
    provider: "Costco",
    price: 80,
    image: "/classic-tiramisu.png",
    category: "postres",
  },
  {
    id: 6,
    name: "Red Velvet Sam's Club",
    provider: "Sam's Club",
    price: 65,
    image: "/red-velvet-cake.png",
    category: "postres",
  },
]

const bebidas = [
  {
    id: 7,
    name: "Café Americano",
    provider: "BokDesserts",
    price: 40,
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
    price: 50,
    image: "/spiced-chai.png",
    category: "bebidas",
  },
]

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<"all" | "postres" | "bebidas">("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("default")
  const [priceRange, setPriceRange] = useState("all")

  const filteredProducts = useMemo(() => {
    let products =
      activeCategory === "all" ? [...postres, ...bebidas] : activeCategory === "postres" ? postres : bebidas

    if (searchQuery) {
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.provider.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map((v) => (v === "+" ? Number.POSITIVE_INFINITY : Number.parseInt(v)))
      products = products.filter((product) => product.price >= min && (max ? product.price <= max : true))
    }

    switch (sortBy) {
      case "price-asc":
        products.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        products.sort((a, b) => b.price - a.price)
        break
      case "name":
        products.sort((a, b) => a.name.localeCompare(b.name))
        break
    }

    return products
  }, [activeCategory, searchQuery, sortBy, priceRange])

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

        {/* Search and Filter Component */}
        <ProductSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
        />

        {/* Filtered Products with Empty State */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-lg text-muted-foreground">No se encontraron productos</p>
          </div>
        ) : (
          <>
            {/* Postres Section */}
            {(activeCategory === "all" || activeCategory === "postres") && (
              <div id="postres" className="mb-16">
                <h3 className="mb-8 text-3xl font-bold text-foreground">Postres Premium</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProducts
                    .filter((p) => p.category === "postres")
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </div>
            )}

            {/* Bebidas Section */}
            {(activeCategory === "all" || activeCategory === "bebidas") && (
              <div id="bebidas">
                <h3 className="mb-8 text-3xl font-bold text-foreground">Bebidas Calientes</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProducts
                    .filter((p) => p.category === "bebidas")
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
