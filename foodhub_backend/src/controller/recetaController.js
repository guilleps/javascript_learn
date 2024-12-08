import { ZodError } from "zod";
import { RecetaSchema } from "../model/dto/RecetaDTO.js";
import Receta from "../model/Receta.js";
import { findIdByEmail } from "../services/creadorService.js";
import {
  buscarDetalleRecetaPorId,
  crearRecetaService,
  recetasDeCategoria,
} from "../services/recetaService.js";
import { NotFoundError, ValidationError } from "../excepcion/customErrors.js";

export async function crearReceta(req, res, next) {
  try {
    if (!req.user || !req.user.sub) {
      return next(new ValidationError("Usuario no autenticado."));
    }

    const creadorId = await findIdByEmail(req.user.sub);
    if (!creadorId) throw new NotFoundError("Creador no encontrado.");

    const validatedRecipe = RecetaSchema.create.parse(req.body);

    const receta = new Receta({
      ...validatedRecipe,
      id_creador: creadorId,
    });

    await crearRecetaService(receta);

    res.status(201).json({ message: "Receta creada exitosamente" });
  } catch (error) {
    if (error instanceof ZodError) {
      const formattedErrors = error.errors.map((err) => ({
        path: err.path.join(" > "),
        message: err.message,
      }));
      return next(new ValidationError("Error de validación", formattedErrors));
    }

    next(error);
  }
}

export async function recetasPorCategoria(req, res, next) {
  try {
    const { categoria } = req.query;

    const recetas = await recetasDeCategoria(categoria);
    if (!recetas.length)
      throw new NotFoundError("No se encontraron recetas en esta categoría.");

    res.status(200).json({ recetas });
  } catch (error) {
    next(error);
  }
}

export async function verDetalleReceta(req, res, next) {
  try {
    const { recetaId } = req.query;

    const receta = await buscarDetalleRecetaPorId(recetaId);
    if (!receta) throw new NotFoundError("Receta no encontrada.");

    res.status(200).json({ receta });
  } catch (error) {
    next(error);
  }
}
