import { Footer } from "@/components/footer"
import { PromoCard } from "@/components/promo-card"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

const promociones = [
  {
    id: 1,
    titulo: "Combo Dulce Pareja",
    descripcion: "Dos rebanadas de pastel de tu elección + una bebida caliente",
    precio: "$180",
    precioOriginal: "$220",
    descuento: "18% OFF",
    imagen: "/combo-pareja.jpg",
    imageQuery: "two slices of delicious cake with a hot coffee on elegant table",
    incluye: ["2 Rebanadas de pastel", "1 Bebida caliente", "Servilletas y cubiertos"],
    destacado: true,
  },
  {
    id: 2,
    titulo: "Combo Cafecito",
    descripcion: "Pastel individual + café americano o té",
    precio: "$95",
    precioOriginal: "$120",
    descuento: "21% OFF",
    imagen: "/combo-cafe.jpg",
    imageQuery: "slice of cake with coffee cup on wooden table",
    incluye: ["1 Rebanada de pastel", "1 Café o té", "Azúcar y crema"],
    destacado: false,
  },
  {
    id: 3,
    titulo: "Combo Familiar",
    descripcion: "Pastel entero + 4 bebidas calientes de tu elección",
    precio: "$450",
    precioOriginal: "$550",
    descuento: "18% OFF",
    imagen: "/combo-familiar.jpg",
    imageQuery: "whole cake with four coffee cups for family gathering",
    incluye: ["1 Pastel entero", "4 Bebidas calientes", "Platos y cubiertos"],
    destacado: true,
  },
  {
    id: 4,
    titulo: "Combo Merienda",
    descripcion: "3 rebanadas de pastel + 2 bebidas calientes",
    precio: "$250",
    precioOriginal: "$300",
    descuento: "17% OFF",
    imagen: "/combo-merienda.jpg",
    imageQuery: "three cake slices with two hot beverages afternoon snack",
    incluye: ["3 Rebanadas variadas", "2 Bebidas calientes", "Servilletas"],
    destacado: false,
  },
  {
    id: 5,
    titulo: "Combo Celebración",
    descripcion: "Pastel entero + 6 bebidas + decoración especial",
    precio: "$650",
    precioOriginal: "$800",
    descuento: "19% OFF",
    imagen: "/combo-celebracion.jpg",
    imageQuery: "decorated celebration cake with six beverages party setup",
    incluye: ["1 Pastel decorado", "6 Bebidas calientes", "Velas y decoración"],
    destacado: true,
  },
  {
    id: 6,
    titulo: "Combo Express",
    descripcion: "1 rebanada de pastel + café americano para llevar",
    precio: "$75",
    precioOriginal: "$95",
    descuento: "21% OFF",
    imagen: "/combo-express.jpg",
    imageQuery: "cake slice in takeaway box with coffee cup to go",
    incluye: ["1 Rebanada", "1 Café americano", "Empaque para llevar"],
    destacado: false,
  },
]

export default function Promociones() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Badge variant="secondary" className="text-base px-4 py-2">
                <Sparkles className="h-4 w-4 mr-2 inline" />
                Ofertas Especiales
              </Badge>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-balance">
              Promociones <span className="text-primary">Irresistibles</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Aprovecha nuestros combos especiales y disfruta de los mejores postres con bebidas calientes a precios
              increíbles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promociones.map((promo) => (
              <PromoCard key={promo.id} promo={promo} />
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Cómo funcionan nuestras promociones?</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-background rounded-xl p-6 border-2">
                <div className="text-4xl font-bold text-primary mb-2">1</div>
                <h3 className="text-xl font-bold mb-2">Elige tu combo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Selecciona la promoción que más te guste de nuestra variedad de combos
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 border-2">
                <div className="text-4xl font-bold text-primary mb-2">2</div>
                <h3 className="text-xl font-bold mb-2">Realiza tu pedido</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Contáctanos por WhatsApp o formulario mencionando el combo que deseas
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 border-2">
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <h3 className="text-xl font-bold mb-2">Disfruta y ahorra</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Recibe tu pedido y disfruta de productos premium con descuento especial
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              * Promociones válidas hasta agotar existencias. Los precios pueden variar según disponibilidad.
              <br />
              Consulta términos y condiciones para más información.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
