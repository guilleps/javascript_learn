import { ZodError } from "zod";

export const errorHandler = (err, req, res, next) => {
  console.error("Error:", err.message);

  // Manejo de errores específicos
  if (err.name === "ValidationError" || err instanceof ZodError) {
    return res.status(400).json({
      error: "Error de validación",
      details: err.errors || err.message,
    });
  }

  if (err.name === "AuthenticationError") {
    return res.status(401).json({
      error: "No autorizado",
      message: err.message,
    });
  }

  if (err.name === "NotFoundError") {
    return res.status(404).json({
      error: "No encontrado",
      message: err.message,
    });
  }

  // Manejo de errores genéricos
  return res.status(500).json({
    error: "Error interno del servidor",
    message: err.message || "Algo salió mal.",
  });
};
