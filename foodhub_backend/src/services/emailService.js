import { transporter } from "../config/email.js";

export const sendConfirmationEmail = async (email, name, token) => {
  const confirmationUrl = `http://localhost:8080/auth/confirmar?token=${token}`;
  await transporter.sendMail({
    to: email,
    subject: "Account Verification - FoodHub",
    text: `Estimado/a ${name},\n\nGracias por registrarte en nuestra plataforma 'FoodHub'. Por favor, haz clic en el siguiente enlace para confirmar tu cuenta:\n\n ${confirmationUrl} \n\nSaludos,\ny disfruta de una nueva experiencia.`,
  });
};
