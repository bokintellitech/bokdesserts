"use client"

import { Cake, Heart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useFavorites } from "@/hooks/use-favorites"
import { Badge } from "@/components/ui/badge"
import { CartSheet } from "@/components/cart-sheet"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const { favorites, isLoaded } = useFavorites()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <Link href="/" className="flex items-center gap-2">
                 <Image 
                  src="/bok_logo.png" 
                  alt="BokDesserts Logo" 
                  width={40} 
                  height={40}
                  className="rounded-xl"
                />
              </Link>
          </div>
          <span className="text-2xl font-bold text-foreground">BokDesserts</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              pathname === "/" ? "text-foreground" : "text-foreground/80 hover:text-foreground"
            }`}
          >
            Inicio
          </Link>

          {isHome ? (
            <>
              <button
                onClick={() => scrollToSection("postres")}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Postres
              </button>
              <button
                onClick={() => scrollToSection("bebidas")}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Bebidas
              </button>
            </>
          ) : null}

          <Link
            href="/promociones"
            className={`text-sm font-medium transition-colors ${
              pathname === "/promociones" ? "text-foreground" : "text-foreground/80 hover:text-foreground"
            }`}
          >
            Promociones
          </Link>

          <Link
            href="/proveedores"
            className={`text-sm font-medium transition-colors ${
              pathname === "/proveedores" ? "text-foreground" : "text-foreground/80 hover:text-foreground"
            }`}
          >
            Proveedores
          </Link>

          <Link
            href="/sobre-nosotros"
            className={`text-sm font-medium transition-colors ${
              pathname === "/sobre-nosotros" ? "text-foreground" : "text-foreground/80 hover:text-foreground"
            }`}
          >
            Sobre Nosotros
          </Link>

          <Link href="/favoritos">
            <Button size="icon" variant="ghost" className="relative">
              <Heart className="h-5 w-5" />
              {isLoaded && favorites.length > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {favorites.length}
                </Badge>
              )}
            </Button>
          </Link>

          <CartSheet />

          <Link href="/#contacto">
            <Button size="sm" className="rounded-full">
              Contacto
            </Button>
          </Link>
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <Link href="/favoritos">
            <Button size="icon" variant="ghost" className="relative">
              <Heart className="h-5 w-5" />
              {isLoaded && favorites.length > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {favorites.length}
                </Badge>
              )}
            </Button>
          </Link>

          <CartSheet />

          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menú</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6">
                <Link
                  href="/"
                  className={`text-lg font-medium transition-colors ${
                    pathname === "/" ? "text-foreground" : "text-foreground/80"
                  }`}
                >
                  Inicio
                </Link>
                <Link
                  href="/promociones"
                  className={`text-lg font-medium transition-colors ${
                    pathname === "/promociones" ? "text-foreground" : "text-foreground/80"
                  }`}
                >
                  Promociones
                </Link>
                <Link
                  href="/proveedores"
                  className={`text-lg font-medium transition-colors ${
                    pathname === "/proveedores" ? "text-foreground" : "text-foreground/80"
                  }`}
                >
                  Proveedores
                </Link>
                <Link
                  href="/sobre-nosotros"
                  className={`text-lg font-medium transition-colors ${
                    pathname === "/sobre-nosotros" ? "text-foreground" : "text-foreground/80"
                  }`}
                >
                  Sobre Nosotros
                </Link>
                <Link href="/#contacto">
                  <Button className="w-full rounded-full mt-4">Contacto</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
