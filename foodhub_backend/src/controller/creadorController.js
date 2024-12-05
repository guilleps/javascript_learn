import db from "../config/db.js";
import { CreadorSchema } from "../dto/CreadorDTO.js";
import { autenticateCreadorService, registerCreadorService } from "../services/creadorService.js";

export const createCreadorController = async (req, res) => {
  try {
    const newCreador = CreadorSchema.register.parse(req.body); // Validar aquí
    const response = await registerCreadorService(newCreador);

    res.status(201).json({
      message: "Registro exitoso. Por favor verifica tu correo electrónico.",
      data: response,
    });
  } catch (error) {
    if (error && typeof error === "object" && !Array.isArray(error)) {
      res.status(400).json({ error }); // Devuelve el objeto de errores
    } else {
      // Error genérico del servidor
      console.error("Error al registrar creador:", error.message);
      res
        .status(500)
        .json({ error: "Ocurrió un error al procesar la solicitud." });
    }
  }
};

export const confirmAccount = async (req, res) => {
  try {
    const { token } = req.query;

    const [rows] = await db.query(
      "SELECT * FROM creador WHERE token_confirmacion = ?",
      [token]
    );

    if (rows.length === 0) {
      return res
        .status(400)
        .json({ error: "Token inválido o la cuenta ya ha sido confirmada." });
    }

    const creador = rows[0];

    // Actualizar el estado del usuario
    await db.query(
      "UPDATE creador SET is_enabled = true, token_confirmacion = null WHERE id_creador = ?",
      [creador.id_creador]
    );

    res.status(200).json({ message: "Cuenta confirmada exitosamente." });
  } catch (error) {
    console.error("Error al confirmar cuenta:", error);
    res.status(500).json({ error: "Ocurrió un error al confirmar la cuenta." });
  }
};

export const loginCreadorController = async (req, res) => {
  try {
    // validacion
    const { correo_electronico, contrasenia } = CreadorSchema.login.parse(req.body);
    const response = await autenticateCreadorService(correo_electronico, contrasenia);

    res.status(200).json({ message: "Autenticacion exitosa.", data: response });
  } catch (error) {
    console.error("Error en login:", error.message);
    // if (error.name === "ValidationError") {
    //   // Errores de validación
    //   return res.status(400).json({ errors: error.errors });
    // } else if (
    //   error.message === "Usuario no encontrado." ||
    //   error.message === "Contraseña incorrecta."
    // ) {
    //   // Errores de autenticación
    //   return res.status(401).json({ error: error.message });
    // } else {
    //   // Error genérico del servidor
    //   console.error("Error en login:", error.message);
    //   return res
    //     .status(500)
    //     .json({ error: "Ocurrió un error al procesar la solicitud." });
    // }
  }
};
