import { ProductDetailPage } from "@/components/product-detail-page"
import type { Metadata } from "next"

const productsData: Record<string, any> = {
  "1": {
    id: 1,
    name: "Pastel de Chocolate Costco",
    provider: "Costco",
    price: 65,
    description:
      "Delicioso pastel de chocolate premium con capas de bizcocho esponjoso y cobertura de chocolate belga.",
  },
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = productsData[params.id]

  if (!product) {
    return {
      title: "Producto no encontrado | BokDesserts",
    }
  }

  return {
    title: `${product.name} - ${product.provider} | BokDesserts`,
    description: product.description,
    keywords: [product.name, product.provider, "postres premium", "delivery México", "BokDesserts"],
    openGraph: {
      title: `${product.name} - ${product.provider}`,
      description: product.description,
      type: "product",
      locale: "es_MX",
    },
  }
}

export default function ProductoDetalle({ params }: { params: { id: string } }) {
  return <ProductDetailPage productId={params.id} />
}
