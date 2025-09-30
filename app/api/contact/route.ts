import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, email, telefono, mensaje } = body

    // Validar datos
    if (!nombre || !email || !telefono || !mensaje) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: "BokDesserts <onboarding@resend.dev>",
      to: ["bokdesserts@outlook.com"],
      subject: `Nueva consulta de contacto - ${nombre}`,
      text: `
Nueva consulta de contacto - BokDesserts

Nombre: ${nombre}
Email: ${email}
Teléfono: ${telefono}

Mensaje:
${mensaje}

---
Este mensaje fue enviado desde el formulario de contacto de BokDesserts
      `,
    })

    if (error) {
      console.error("[v0] Error al enviar email:", error)
      return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 })
    }

    console.log("[v0] Email enviado exitosamente:", data)

    return NextResponse.json(
      {
        success: true,
        message: "Mensaje enviado correctamente",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Error al procesar contacto:", error)
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 })
  }
}
