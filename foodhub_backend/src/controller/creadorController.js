import { NotFoundError } from "../excepcion/customErrors.js";
import {
  verCantidadDeRecetas,
  verDatosPerfil,
} from "../services/creadorService.js";

export async function verPerfil(req, res, next) {
  try {
    const { sub } = req.user;

    const response = await verDatosPerfil(sub);
    if (!response) throw new NotFoundError("Perfil no encontrado.");

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

export async function cantidadDeRecetasCreadas(req, res, next) {
  try {
    const { sub } = req.user;

    const response = await verCantidadDeRecetas(sub);
    if (!response)
      throw new NotFoundError("No se encontraron recetas para este creador.");

    res.status(200).json({ cantidad: response });
  } catch (error) {
    next(error);
  }
}
