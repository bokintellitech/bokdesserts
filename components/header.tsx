
"use client"

import { Cake } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
            <Cake className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold text-foreground">BokDesserts</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
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
          <Button size="sm" className="rounded-full">
            Contacto
          </Button>
        </nav>
      </div>
    </header>
  )
}
