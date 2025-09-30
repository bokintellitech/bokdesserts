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

    try {
      const { data, error } = await resend.emails.send({
        from: "BokDesserts <onboarding@resend.dev>", // Cambiar por tu dominio verificado
        to: ["bokdesserts@outlook.com"],
        subject: `Nueva consulta de ${nombre}`,
        html: `
          <h2>Nueva consulta de contacto - BokDesserts</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <br>
          <p><strong>Mensaje:</strong></p>
          <p>${mensaje}</p>
          <br>
          <hr>
          <p style="color: #666; font-size: 12px;">Este mensaje fue enviado desde el formulario de contacto de BokDesserts</p>
        `,
      })

      if (error) {
        console.error("[v0] Error al enviar email con Resend:", error)
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
    } catch (emailError) {
      console.error("[v0] Error al enviar email:", emailError)
      return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 })
    }
  } catch (error) {
    console.error("[v0] Error al procesar contacto:", error)
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 })
  }
}
