import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Store, Award, Clock, MapPin } from "lucide-react"

const proveedores = [
  {
    nombre: "Costco",
    descripcion:
      "Pasteles y postres de alta calidad en tamaños generosos, perfectos para grandes celebraciones y eventos familiares.",
    especialidad: "Pasteles de gran tamaño",
    destacado: "Cheesecake de Nueva York",
    origen: "Internacional",
    icon: "🛒",
  },
  {
    nombre: "Sam's Club",
    descripcion:
      "Variedad premium de postres y pasteles con excelente relación calidad-precio para todo tipo de ocasiones.",
    especialidad: "Pasteles personalizados",
    destacado: "Tres Leches Premium",
    origen: "Internacional",
    icon: "🏪",
  },
  {
    nombre: "Pastelerías La Esperanza",
    descripcion:
      "Tradición mexicana desde 1920, famosa por sus recetas originales y sabor auténtico que ha pasado de generación en generación.",
    especialidad: "Repostería tradicional",
    destacado: "Pan de muerto y Roscas",
    origen: "México",
    icon: "🥖",
  },
  {
    nombre: "El Globo",
    descripcion:
      "Icónica pastelería mexicana con más de 60 años de experiencia, reconocida por su calidad y variedad de productos artesanales.",
    especialidad: "Pan dulce artesanal",
    destacado: "Conchas y Cuernos",
    origen: "México",
    icon: "🎈",
  },
  {
    nombre: "El Horno",
    descripcion:
      "Pastelería artesanal que combina técnicas tradicionales con innovación, ofreciendo productos frescos horneados diariamente.",
    especialidad: "Pasteles artesanales",
    destacado: "Pasteles de chocolate belga",
    origen: "México",
    icon: "🔥",
  },
]

export default function Proveedores() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 text-balance">
              Nuestros <span className="text-primary">Proveedores</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Trabajamos con las mejores marcas y pastelerías de México para ofrecerte productos de la más alta calidad
              y sabor excepcional
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            {proveedores.map((proveedor, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-5xl">{proveedor.icon}</div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{proveedor.nombre}</CardTitle>
                        <CardDescription className="text-base">{proveedor.descripcion}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      {proveedor.origen}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                      <Store className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Especialidad</p>
                        <p className="font-semibold">{proveedor.especialidad}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                      <Award className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Producto Destacado</p>
                        <p className="font-semibold">{proveedor.destacado}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6 border-2">
              <div className="flex justify-center mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Award className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Calidad Garantizada</h3>
              <p className="text-muted-foreground leading-relaxed">
                Todos nuestros proveedores cumplen con los más altos estándares de calidad
              </p>
            </Card>

            <Card className="text-center p-6 border-2">
              <div className="flex justify-center mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Productos Frescos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Trabajamos con productos frescos y de la mejor calidad disponible
              </p>
            </Card>

            <Card className="text-center p-6 border-2">
              <div className="flex justify-center mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Entrega Confiable</h3>
              <p className="text-muted-foreground leading-relaxed">
                Coordinamos con nuestros proveedores para garantizar entregas puntuales
              </p>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
