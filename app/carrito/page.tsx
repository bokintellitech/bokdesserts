import { CartPage } from "@/components/cart-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Carrito de Compras | BokDesserts",
  description: "Revisa tu carrito de compras y procede al pago. Envío gratis en todos los pedidos.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function Carrito() {
  return <CartPage />
}
