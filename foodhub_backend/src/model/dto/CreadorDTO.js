import { z } from "zod";
import { RoleEnum } from "../Role.js";

export const CreadorSchema = {
  register: z.object({
    nombre: z
      .string()
      .min(1, "El nombre es obligatorio.")
      .max(20, "El nombre debe tener máximo 20 caracteres."),
    apellido_paterno: z
      .string()
      .min(1, "El apellido paterno es obligatorio.")
      .max(20, "El apellido paterno debe tener máximo 20 caracteres."),
    apellido_materno: z
      .string()
      .min(1, "El apellido materno es obligatorio.")  
      .max(20, "El apellido materno debe tener máximo 20 caracteres."),
    correo_electronico: z
      .string()
      .email("Formato inválido de correo.")
      .max(30, "El correo debe tener máximo 30 caracteres."),
    contrasenia: z
      .string()
      .regex(
        /^(?=.*[0-9])(?=.*[A-Z])[^s]+$/,
        "La contrasenia debe contener al menos un número y una letra mayúscula, y no debe tener espacios."
      )
      .max(15, "La contrasenia debe tener máximo 15 caracteres."),
    codigo_colegiatura: z
      .string()
      .length(
        6,
        "El código de colegiatura debe tener exactamente 6 caracteres."
      )
      .regex(/^\d+$/, "El código de colegiatura solo debe contener números."),
    is_enabled: z.boolean().default(false),
    account_non_expired: z.boolean().default(false),
    account_non_locked: z.boolean().default(false),
    credentials_non_expired: z.boolean().default(false),
    role: z.nativeEnum(RoleEnum).default(RoleEnum.USER),
  }),
  login: z.object({
    correo_electronico: z
      .string()
      .email("Formato inválido de correo.")
      .max(30, "El correo debe tener máximo 30 caracteres."),
    contrasenia: z
      .string()
      .regex(
        /^(?=.*[0-9])(?=.*[A-Z])[^s]+$/,
        "La contrasenia debe contener al menos un número y una letra mayúscula, y no debe tener espacios."
      ),
  }),
};

// Método para validar
export const validate = (schema, data) => {
  try {
    return schema.parse(data);
  } catch (error) {
    const errors = error.errors.reduce((acc, e) => {
      acc[e.path[0]] = e.message;
      return acc;
    }, {});
    throw { name: "ValidationError", errors };
  }
};
