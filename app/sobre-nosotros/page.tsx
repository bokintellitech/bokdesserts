import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Award, Sparkles } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre Nosotros - Nuestra Historia | BokDesserts",
  description:
    "Conoce la historia de BokDesserts. Endulzando momentos especiales con los mejores postres y bebidas calientes. Calidad premium y atención personalizada.",
  keywords: ["sobre BokDesserts", "historia BokDesserts", "empresa postres México", "misión visión", "calidad premium"],
  openGraph: {
    title: "Sobre Nosotros - Nuestra Historia | BokDesserts",
    description: "Endulzando momentos especiales desde el corazón",
    type: "website",
    locale: "es_MX",
    siteName: "BokDesserts",
  },
}

export default function SobreNosotros() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-6 text-balance">
            Sobre <span className="text-primary">BokDesserts</span>
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-12 text-pretty">
            Endulzando momentos especiales desde el corazón
          </p>

          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-lg leading-relaxed text-foreground/90">
              En <strong>BokDesserts</strong>, creemos que cada celebración merece el postre perfecto. Somos una empresa
              dedicada a llevar los mejores postres y bebidas calientes directamente a tu mesa, seleccionando
              cuidadosamente productos de las marcas más reconocidas y pastelerías tradicionales de México.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              Nuestra misión es simple: hacer que cada momento dulce sea memorable. Ya sea un cumpleaños, una reunión
              familiar, o simplemente un antojo especial, estamos aquí para ofrecerte la mejor selección de pasteles,
              postres y bebidas que complementan perfectamente cualquier ocasión.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Nuestra Pasión</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Amamos lo que hacemos. Cada producto que ofrecemos es seleccionado con dedicación para garantizar
                      la mejor calidad y sabor.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Nuestro Equipo</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Un equipo comprometido con tu satisfacción, trabajando para brindarte el mejor servicio y atención
                      personalizada.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Calidad Premium</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Trabajamos con las mejores marcas y pastelerías reconocidas para ofrecerte productos de la más
                      alta calidad.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Experiencia Única</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Cada pedido es una oportunidad para crear momentos especiales y memorias dulces que durarán para
                      siempre.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Por qué elegirnos?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              En BokDesserts no solo vendemos postres, creamos experiencias. Nuestra selección cuidadosa de productos,
              atención personalizada y compromiso con la calidad nos convierten en tu mejor opción para endulzar cada
              momento especial.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
