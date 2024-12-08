import { ValidationError } from "../excepcion/customErrors.js";
import { CreadorSchema } from "../model/dto/CreadorDTO.js";
import { RoleEnum } from "../model/Role.js";
import {
  autenticateCreadorService,
  confirmAccountService,
  registerCreadorService,
} from "../services/authService.js";

export async function createCreadorController(req, res, next) {
  try {
    const newCreador = CreadorSchema.register.parse({
      ...req.body,
      role: req.body.role || RoleEnum.USER,
    });

    // Validar aquí
    const response = await registerCreadorService(newCreador);

    res.status(201).json({
      message: "Registro exitoso. Por favor verifica tu correo electrónico.",
      data: response,
    });
  } catch (error) {
    if (error.message.includes("correo electronico")) {
      return next(
        new ValidationError("El correo electrónico ya está registrado.")
      );
    }

    if (error.message.includes("código de colegiado")) {
      return next(
        new ValidationError(
          "El código de colegiado no es válido o ya esta asociado."
        )
      );
    }

    return next(error);
  }
}

export async function loginCreadorController(req, res, next) {
  try {
    // validacion
    const { correo_electronico, contrasenia } = CreadorSchema.login.parse(
      req.body
    );
    const response = await autenticateCreadorService(correo_electronico, contrasenia);

    res.status(200).json({ data: response });
  } catch (error) {
    if (error.name === "ValidationError") {
      return next(new ValidationError("Datos de inicio de sesión inválidos."));
    }

    if (error.message.includes("Usuario no encontrado") || error.message.includes("Contraseña incorrecta")) {
      return next(new ValidationError(error.message));
    }

    next(error);
  }
}

export async function confirmAccount(req, res, next) {
  try {
    const { token } = req.query;

    await confirmAccountService(token);

    res.status(200).json({ message: "Cuenta confirmada exitosamente." });
  } catch (error) {
    if (error.message.includes("Usuario no encontrado") || error.message.includes("Código de colegiado no encontrado")) {
      return next(new NotFoundError(error.message));
    }

    next(error);
  }
}
