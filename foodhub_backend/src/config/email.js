import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// CONFIGURACION DEL TRANSPORTADOR
export const transporter = nodemailer.createTransport({
  service: "gmail", // proovedor
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER, // correo origen
    pass: process.env.EMAIL_PASSWORD, // contraseña de aplicacion de la cuenta origen
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Funcion del envio del correo
export const sendEmail = async ({ to, subject, text }) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    });
    console.log("Correo enviado:", info.response);
  } catch (error) {
    console.error("Error al enviar correo:", error);
    throw error;
  }
};
