import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, email, telefono, mensaje } = body

    // Validar datos
    if (!nombre || !email || !telefono || !mensaje) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
    }

    // Crear el contenido del email
    const emailContent = `
      Nueva consulta de contacto - BokDesserts
      
      Nombre: ${nombre}
      Email: ${email}
      Teléfono: ${telefono}
      
      Mensaje:
      ${mensaje}
      
      ---
      Este mensaje fue enviado desde el formulario de contacto de BokDesserts
    `

    // En producción, aquí integrarías con un servicio de email como Resend, SendGrid, etc.
    // Por ahora, simulamos el envío exitoso
    console.log("[v0] Email a enviar:", emailContent)
    console.log("[v0] Destinatario: bokdesserts@outlook.com")

    // Simular delay de envío
    await new Promise((resolve) => setTimeout(resolve, 1000))

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
