import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  // Configurar nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Puedes usar cualquier servicio de correo
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Opciones del correo
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'eterjos@gmail.com',
    subject: 'Saludo al Gran Joseph',
    text: 'Hola Mundo y buenos días'
  };

  // Enviar el correo
  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Correo enviado con éxito' });
  } catch (error) {
    return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 });
  }
}
