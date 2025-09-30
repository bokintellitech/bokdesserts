"use client"

import { ShoppingCart, Minus, Plus, Trash2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Breadcrumbs } from "@/components/breadcrumbs"

export function CartPage() {
  const { cart, updateQuantity, removeFromCart, getTotal, getItemCount, clearCart } = useCart()
  const { toast } = useToast()

  const handleCheckout = () => {
    toast({
      title: "¡Pedido realizado!",
      description: "Tu pedido ha sido procesado exitosamente. Te contactaremos pronto.",
      duration: 5000,
    })
    clearCart()
  }

  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Carrito de Compras" }]} />

        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2 mb-4">
              <ArrowLeft className="h-4 w-4" />
              Seguir Comprando
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">Carrito de Compras</h1>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <ShoppingCart className="mb-4 h-16 w-16 text-muted-foreground" />
            <h2 className="mb-2 text-2xl font-semibold text-foreground">Tu carrito está vacío</h2>
            <p className="mb-6 text-muted-foreground">Explora nuestros productos y agrega algunos al carrito</p>
            <Link href="/">
              <Button size="lg" className="rounded-full">
                Ver Productos
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">
                      Productos ({getItemCount()} {getItemCount() === 1 ? "artículo" : "artículos"})
                    </h2>
                    <Button variant="ghost" size="sm" onClick={clearCart}>
                      Vaciar carrito
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {cart.map((item) => (
                      <div key={item.id}>
                        <div className="flex gap-4">
                          <div className="relative h-24 w-24 overflow-hidden rounded-lg bg-muted">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <div className="flex flex-1 flex-col">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h3 className="font-semibold">{item.name}</h3>
                                <p className="text-sm text-muted-foreground">{item.provider}</p>
                              </div>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Button
                                  size="icon"
                                  variant="outline"
                                  className="h-8 w-8 bg-transparent"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-12 text-center font-medium">{item.quantity}</span>
                                <Button
                                  size="icon"
                                  variant="outline"
                                  className="h-8 w-8 bg-transparent"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                              <p className="text-lg font-bold">${item.price * item.quantity} MXN</p>
                            </div>
                          </div>
                        </div>
                        <Separator className="mt-6" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h2 className="mb-6 text-xl font-semibold">Resumen del Pedido</h2>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-medium">${getTotal()}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">IVA (16%)</span>
                        <span className="font-medium">${Math.round(getTotal() * 0.16)}</span>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-lg font-bold">Total</span>
                        <span className="text-lg font-bold text-primary">${Math.round(getTotal() * 1.16)} MXN</span>
                      </div>
                    </div>

                    <div className="space-y-3 pt-4">
                      <div>
                        <Label htmlFor="coupon">Código de descuento</Label>
                        <div className="mt-2 flex gap-2">
                          <Input id="coupon" placeholder="Ingresa tu código" />
                          <Button variant="outline">Aplicar</Button>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full rounded-full" size="lg" onClick={handleCheckout}>
                      Proceder al Pago
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
