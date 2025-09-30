"use client"

import { ShoppingCart, Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/hooks/use-cart"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export function CartSheet() {
  const { cart, updateQuantity, removeFromCart, getTotal, getItemCount } = useCart()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {getItemCount() > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              {getItemCount()}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Carrito de Compras
          </SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <ShoppingCart className="mb-4 h-16 w-16 text-muted-foreground" />
            <h3 className="mb-2 text-lg font-semibold">Tu carrito está vacío</h3>
            <p className="text-sm text-muted-foreground">Agrega productos para comenzar tu pedido</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto py-4">
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-lg bg-muted">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>

                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-sm font-semibold line-clamp-1">{item.name}</h4>
                          <p className="text-xs text-muted-foreground">{item.provider}</p>
                        </div>
                        <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => removeFromCart(item.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-7 w-7 bg-transparent"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-7 w-7 bg-transparent"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <p className="text-sm font-bold">${item.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 border-t pt-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${getTotal()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Envío</span>
                  <span className="font-medium">Gratis</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-lg font-bold text-primary">${getTotal()} MXN</span>
                </div>
              </div>

              <Link href="/carrito">
                <Button className="w-full rounded-full" size="lg">
                  Ver Carrito Completo
                </Button>
              </Link>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
