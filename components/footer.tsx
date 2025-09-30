
import { Cake, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <Cake className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">BokDesserts</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Los mejores postres premium y bebidas calientes para endulzar tu día.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Productos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#postres" className="hover:text-foreground transition-colors">
                  Postres
                </a>
              </li>
              <li>
                <a href="#bebidas" className="hover:text-foreground transition-colors">
                  Bebidas Calientes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Promociones
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Proveedores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Contacto</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@bokdesserts.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+52 55 1234 5678</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Ciudad de México</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 BokDesserts. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
