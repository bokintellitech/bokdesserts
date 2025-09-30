import { Hero } from "@/components/hero"
import { ProductGrid } from "@/components/product-grid"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BokDesserts - Postres Premium y Bebidas Calientes | Delivery en México",
  description:
    "Descubre los mejores postres premium de Costco, Sam's Club y más. Pasteles, cheesecakes, tiramisú y bebidas calientes.",
  keywords: [
    "postres premium",
    "pasteles México",
    "cheesecake",
    "tiramisú",
    "bebidas calientes",
    "café",
    "delivery postres",
    "BokDesserts",
  ],
  openGraph: {
    title: "BokDesserts - Postres Premium y Bebidas Calientes",
    description: "Los mejores postres premium y bebidas calientes",
    type: "website",
    locale: "es_MX",
    siteName: "BokDesserts",
  },
  twitter: {
    card: "summary_large_image",
    title: "BokDesserts - Postres Premium",
    description: "Los mejores postres premium y bebidas calientes",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductGrid />
      <ContactForm />
      <Footer />
    </main>
  )
}
