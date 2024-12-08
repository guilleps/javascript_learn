import { ZodError } from "zod";
import { RecetaSchema } from "../model/dto/RecetaDTO.js";
import Receta from "../model/Receta.js";
import { findIdByEmail } from "../services/creadorService.js";
import { crearRecetaService } from "../services/recetaService.js";

export async function crearReceta(req, res) {
  try {
    if (!req.user || !req.user.sub) {
      return res.status(401).json({ error: "Usuario no autenticado" });
    }

    const creadorId = await findIdByEmail(req.user.sub);

    const validatedRecipe = RecetaSchema.create.parse(req.body);

    if (!validatedRecipe.categoria) {
      throw new Error("El campo 'categoria' es obligatorio");
    }

    const receta = new Receta({
      ...validatedRecipe,
      id_creador: creadorId,
    });

    await crearRecetaService(receta);

    res.status(201).json({ message: "Receta creada exitosamente" });
  } catch (error) {
    if (error instanceof ZodError) {
      // Procesar errores de validación
      const formattedErrors = error.errors.map((err) => ({
        path: err.path.join(" > "), // Convierte la ruta a un formato legible
        message: err.message,
      }));
      return res.status(400).json({ validationErrors: formattedErrors });
    }

    // Otros errores
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
