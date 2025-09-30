import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, FileText, AlertCircle, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos y Condiciones | BokDesserts",
  description:
    "Lee nuestros términos y condiciones de servicio. Políticas de pedidos, entregas, cancelaciones y privacidad de datos.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function Terminos() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-balance">Términos y Condiciones</h1>
            <p className="text-lg text-muted-foreground">Última actualización: Enero 2025</p>
          </div>

          <Card className="mb-8 border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                1. Aceptación de Términos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                Al acceder y utilizar los servicios de BokDesserts, usted acepta estar sujeto a estos términos y
                condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros
                servicios.
              </p>
              <p>
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en
                vigor inmediatamente después de su publicación en nuestro sitio web.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8 border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                2. Productos y Servicios
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                BokDesserts ofrece una selección de postres, pasteles y bebidas calientes de proveedores reconocidos.
                Nos esforzamos por mantener la información de productos actualizada y precisa.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Los productos están sujetos a disponibilidad</li>
                <li>Las imágenes son ilustrativas y pueden variar del producto real</li>
                <li>Los precios pueden cambiar sin previo aviso</li>
                <li>Nos reservamos el derecho de limitar cantidades</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8 border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                3. Pedidos y Pagos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                Los pedidos se realizan a través de WhatsApp o nuestro formulario de contacto. Al realizar un pedido,
                usted acepta proporcionar información precisa y completa.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Confirmación de pedido por WhatsApp o correo electrónico</li>
                <li>Métodos de pago acordados al momento del pedido</li>
                <li>Los pedidos están sujetos a confirmación de disponibilidad</li>
                <li>Tiempo de entrega estimado según ubicación</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8 border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                4. Entregas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                Realizamos entregas en las zonas especificadas. Los tiempos de entrega son estimados y pueden variar
                según condiciones externas.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Horarios de entrega coordinados previamente</li>
                <li>Costos de envío según ubicación</li>
                <li>El cliente debe estar disponible en la dirección proporcionada</li>
                <li>Productos perecederos deben refrigerarse inmediatamente</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8 border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                5. Cancelaciones y Devoluciones
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                Debido a la naturaleza perecedera de nuestros productos, las políticas de cancelación y devolución son
                limitadas.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cancelaciones aceptadas con 24 horas de anticipación</li>
                <li>Devoluciones solo por productos defectuosos o incorrectos</li>
                <li>Notificar problemas dentro de las 2 horas posteriores a la entrega</li>
                <li>Reembolsos procesados según método de pago original</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8 border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                6. Privacidad y Datos Personales
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                Respetamos su privacidad y protegemos sus datos personales de acuerdo con las leyes aplicables de
                protección de datos.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Información recopilada solo para procesar pedidos</li>
                <li>No compartimos datos con terceros sin consentimiento</li>
                <li>Comunicaciones solo relacionadas con pedidos y promociones</li>
                <li>Derecho a solicitar eliminación de datos personales</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8 border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                7. Limitación de Responsabilidad
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
              <p>BokDesserts no se hace responsable por:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Reacciones alérgicas a ingredientes de productos</li>
                <li>Daños causados por mal manejo después de la entrega</li>
                <li>Retrasos por causas de fuerza mayor</li>
                <li>Cambios en disponibilidad de productos de proveedores</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 bg-primary/5">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-3">Contacto</h3>
              <p className="text-muted-foreground leading-relaxed">
                Para preguntas sobre estos términos y condiciones, contáctanos en:
              </p>
              <p className="font-semibold mt-2">bokdesserts@outlook.com</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  )
}
