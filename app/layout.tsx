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
  title: "BokDesserts - Postres y Bebidas Premium",
  description: "Los mejores postres de Costco, Sam's Club, La Esperanza, El Globo y más",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
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
