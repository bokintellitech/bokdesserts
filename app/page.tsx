import { Hero } from "@/components/hero"
import { ProductGrid } from "@/components/product-grid"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

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
