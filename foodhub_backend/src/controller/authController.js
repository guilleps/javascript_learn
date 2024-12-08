import { CreadorSchema } from "../model/dto/CreadorDTO.js";
import { RoleEnum } from "../model/Role.js";
import {
  autenticateCreadorService,
  confirmAccountService,
  registerCreadorService,
} from "../services/authService.js";

export async function createCreadorController(req, res) {
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
    console.error("Error al registrar creador:", error.message);

    if (error.message.includes("correo electrónico")) {
      return res
        .status(400)
        .json({ error: "El correo electrónico ya está registrado." });
    }

    if (error.message.includes("código de colegiado")) {
      return res
        .status(400)
        .json({
          error: "El código de colegiado no es válido o ya está asociado.",
        });
    }

    res
      .status(500)
      .json({ error: "Ocurrió un error al procesar la solicitud." });
  }
}

export async function confirmAccount(req, res) {
  try {
    const { token } = req.query;
    await confirmAccountService(token);

    res.status(200).json({ message: "Cuenta confirmada exitosamente." });
  } catch (error) {
    console.error("Error al confirmar cuenta:", error);
    if (
      error.message === "Usuario no encontrado" ||
      error.message === "Código de colegiado no encontrado"
    ) {
      return res.status(404).json({ error: error.message });
    }
    res.status(500).json({ error: "Ocurrió un error al confirmar la cuenta." });
  }
}

export async function loginCreadorController(req, res) {
  try {
    // validacion
    const { correo_electronico, contrasenia } = CreadorSchema.login.parse(
      req.body
    );
    const response = await autenticateCreadorService(
      correo_electronico,
      contrasenia
    );

    res.status(200).json({ data: response });
  } catch (error) {
    if (error.name === "ValidationError") {
      // Errores de validación
      return res.status(400).json({ errors: error.errors });
    } else if (
      error.message === "Usuario no encontrado." ||
      error.message === "Contraseña incorrecta."
    ) {
      // Errores de autenticación
      return res.status(401).json({ error: error.message });
    } else {
      // Error genérico del servidor
      console.error("Error en login:", error.message);
      return res
        .status(500)
        .json({ error: "Ocurrió un error al procesar la solicitud." });
    }
  }
}
