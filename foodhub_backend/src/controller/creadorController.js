import {
  verCantidadDeRecetas,
  verDatosPerfil,
} from "../services/creadorService.js";

export async function verPerfil(req, res) {
  try {
    const { sub } = req.user;
    const response = await verDatosPerfil(sub);

    res.status(200).json(response);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export async function cantidadDeRecetasCreadas(req, res) {
  try {
    const { sub } = req.user;
    const response = await verCantidadDeRecetas(sub);

    res.status(200).json(response);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
