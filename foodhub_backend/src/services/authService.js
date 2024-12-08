import {
  findByEmail,
  findByTokenAndEnableUser,
  findEnableUser,
  registerCreador,
  scheduleUserDeletion,
} from "../repository/authRepository.js";
import { sendConfirmationEmail } from "./emailService.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import { createToken } from "./jwtService.js";
import {
  confirmarColegiadoService,
  validarCodigoColegiadoService,
} from "./colegiadoService.js";
import { RoleEnum } from "../model/Role.js";
import { NotFoundError, ValidationError } from "../excepcion/customErrors.js";

export const registerCreadorService = async (data) => {
  // Validar si el correo electrónico ya está registrado
  const existingCreador = await findByEmail(data.correo_electronico);
  if (existingCreador) {
    throw new Error("El correo electrónico ya está registrado.");
  }

  // Validar si el código de colegiatura está confirmado
  const colegiado = await validarCodigoColegiadoService(
    data.nombre,
    data.apellido_paterno,
    data.apellido_materno,
    data.codigo_colegiatura
  );
  if (!colegiado) {
    throw new Error("El código de colegiado no es válido o ya está asociado.");
  }

  const token = uuidv4(); // token
  const hashedPassword = await bcrypt.hash(data.contrasenia, 10); // hashear password

  const creationTime = new Date();
  // registrar creador en bd
  const creador = await registerCreador({
    ...data,
    contrasenia: hashedPassword,
    token_confirmacion: token,
    role: data.role || RoleEnum.USER,
  });

  await sendConfirmationEmail(data.correo_electronico, data.nombre, token);

  scheduleUserDeletion(creador.id_creador, creationTime);

  return creador;
};

export const autenticateCreadorService = async (email, pass) => {
  const user = await findByEmail(email);
  if (!user) throw new NotFoundError("Usuario no encontrado");

  const isPasswordValid = await bcrypt.compare(pass, user.contrasenia);
  if (!isPasswordValid) throw new ValidationError("Contraseña incorrecta.");

  const isEnableUser = await findEnableUser(user.id_creador);

  if (!isEnableUser)
    throw new ValidationError("La cuenta no ha sido verificada.");

  return {
    token: createToken({
      correo: user.correo_electronico,
      role: user.role,
    }),
  };
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
