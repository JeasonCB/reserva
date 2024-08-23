// pages/api/cron.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
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
    res.status(200).json({ message: 'Correo enviado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al enviar el correo' });
  }
}
