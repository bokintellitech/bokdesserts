import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://bokdesserts.com"), // Actual domain
  title: {
    default: "BokDesserts - Postres y Bebidas Premium",
    template: "%s | BokDesserts",
  },
  description:
    "Los mejores postres de Costco, Sam's Club, La Esperanza, El Globo y más. Envío gratis en todos los pedidos.",
  keywords: [
    "postres premium",
    "pasteles México",
    "delivery postres",
    "BokDesserts",
    "bebidas calientes",
    "Costco",
    "Sam's Club",
  ],
  authors: [{ name: "BokDesserts" }],
  creator: "BokDesserts",
  publisher: "BokDesserts",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "BokDesserts",
    title: "BokDesserts - Postres y Bebidas Premium",
    description: "Los mejores postres premium",
  },
  twitter: {
    card: "summary_large_image",
    title: "BokDesserts - Postres Premium",
    description: "Los mejores postres premium",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "@gangasrotogati",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "BokDesserts",
              description: "Los mejores postres y bebidas premium",
              url: "bokdesserts.vercel.app",
              telephone: "+52 564733-9306",
              email: "bokdesserts@outlook.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "MX",
                addressLocality: "México",
              },
              priceRange: "$$",
              servesCuisine: "Postres",
              areaServed: {
                "@type": "Country",
                name: "México",
              },
            }),
          }}
        />
        <Suspense fallback={null}>
          <Header />
          {children}
          <WhatsAppButton />
          <Toaster />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
