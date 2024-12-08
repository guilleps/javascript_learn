import {
  findByEmail,
  findByTokenAndEnableUser,
  registerCreador,
  scheduleUserDeletion,
} from "../repository/authRepository.js";
import { sendConfirmationEmail } from "./emailService.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import { createToken } from "./jwtService.js";
import { confirmarColegiadoService, validarCodigoColegiadoService } from "./colegiadoService.js";
import { RoleEnum } from "../model/Role.js";

export const registerCreadorService = async (data) => {
  // Validar si el correo electrónico ya está registrado
  const existingCreador = await findByEmail(data.correo_electronico);
  if (existingCreador) {
    throw new Error("El correo electrónico ya está registrado.");
  }

  // Validar si el código de colegiatura está confirmado
  const colegiado = await validarCodigoColegiadoService(data.codigo_colegiatura);
  if (!colegiado) {
    throw new Error("El código de colegiado no es válido o ya está asociado.");
  }
  
  const token = uuidv4(); // token
  const hashedPassword = await bcrypt.hash(data.contrasenia, 10); // hashear password

  // registrar creador en bd
  const creador = await registerCreador({
    ...data,
    contrasenia: hashedPassword,
    token_confirmacion: token,
    role: data.role || RoleEnum.USER,
  });

  await sendConfirmationEmail(data.correo_electronico, data.nombre, token);

  scheduleUserDeletion(creador.id_creador);

  return creador;
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

  return token;
};

export const confirmAccountService = async (token) => {
  const user = await findByTokenAndEnableUser(token);
  if (!user) throw new Error("Usuario no encontrado");

  // Manejo de errores en confirmación de colegiado
  try {
    await confirmarColegiadoService(user.codigo_colegiatura);
  } catch (error) {
    console.error("Error al confirmar colegiado:", error.message);
    throw new Error("Error al confirmar el colegiado asociado");
  }
};
