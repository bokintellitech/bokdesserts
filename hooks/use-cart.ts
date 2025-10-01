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

export interface CartItem extends Product {
  quantity: number
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("bokdesserts-cart")
      if (stored) {
        try {
          setCart(JSON.parse(stored))
        } catch (error) {
          console.error("Error parsing cart:", error)
        }
      }
      setIsLoaded(true)
    }
  }, [])

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart)
    if (typeof window !== "undefined") {
      localStorage.setItem("bokdesserts-cart", JSON.stringify(newCart))
    }
  }

  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.id === product.id)

    if (existingItem) {
      const newCart = cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      saveCart(newCart)
    } else {
      const newCart = [...cart, { ...product, quantity: 1 }]
      saveCart(newCart)
    }
  }

  const removeFromCart = (productId: number) => {
    const newCart = cart.filter((item) => item.id !== productId)
    saveCart(newCart)
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }

    const newCart = cart.map((item) => (item.id === productId ? { ...item, quantity } : item))
    saveCart(newCart)
  }

  const clearCart = () => {
    saveCart([])
  }

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0)
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotal,
    getItemCount,
    isLoaded,
  }
}
