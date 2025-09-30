import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();
  
  try {
    await resend.emails.send({
      from: 'BokDesserts <onboarding@resend.dev>',
      to: 'bokdesserts@outlook.com',
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `
    });
    
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Error al enviar' }, { status: 500 });
  }
}
