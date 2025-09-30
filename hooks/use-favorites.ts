"use client"

import { useState, useEffect } from "react"

export interface Product {
  id: number
  name: string
  provider: string
  price: number
  image: string
  category: string
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<Product[]>([])

  useEffect(() => {
    const stored = localStorage.getItem("bokdesserts-favorites")
    if (stored) {
      setFavorites(JSON.parse(stored))
    }
  }, [])

  const addFavorite = (product: Product) => {
    const newFavorites = [...favorites, product]
    setFavorites(newFavorites)
    localStorage.setItem("bokdesserts-favorites", JSON.stringify(newFavorites))
  }

  const removeFavorite = (productId: number) => {
    const newFavorites = favorites.filter((item) => item.id !== productId)
    setFavorites(newFavorites)
    localStorage.setItem("bokdesserts-favorites", JSON.stringify(newFavorites))
  }

  const isFavorite = (productId: number) => {
    return favorites.some((item) => item.id === productId)
  }

  const toggleFavorite = (product: Product) => {
    if (isFavorite(product.id)) {
      removeFavorite(product.id)
    } else {
      addFavorite(product)
    }
  }

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
  }
}
