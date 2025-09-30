import { FavoritesPage } from "@/components/favorites-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mis Favoritos | BokDesserts",
  description: "Tus productos favoritos guardados para comprar más tarde.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function Favoritos() {
  return <FavoritesPage />
}
