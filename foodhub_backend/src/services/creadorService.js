import {
  findByEmail,
  registerCreador,
  scheduleUserDeletion,
} from "../repository/creadorRepository.js";
import { sendConfirmationEmail } from "./emailService.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import { createToken } from "./jwtService.js";

export const registerCreadorService = async (data) => {
  try {
    const token = uuidv4(); // token
    const hashedPassword = await bcrypt.hash(data.contrasenia, 10); // hashear password

    // registrar creador en bd
    const creador = await registerCreador({
      ...data,
      contrasenia: hashedPassword,
      token_confirmacion: token,
    });

    await sendConfirmationEmail(data.correo_electronico, data.nombre, token);

    scheduleUserDeletion(creador.id_creador);

    return creador;
  } catch (error) {
    throw error.message;
  }
};

export const autenticateCreadorService = async (email, pass) => {
  const user = await findByEmail(email);
  if (!user) throw new Error("Usuario no encontrado");

  const isPasswordValid = await bcrypt.compare(pass, user.contrasenia);
  if (!isPasswordValid) throw new Error("Contraseña incorrecta.");

  const token = await createToken({
    correo: user.correo_electronico,
    role: user.role,
  });

  return { token, user: { correo_electronico: user.correo_electronico } };
};
