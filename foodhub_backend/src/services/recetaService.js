import { validateCategoria } from "../model/Categoria.js";
import {
  buscarRecetasPorCategoria,
  saveReceta,
} from "../repository/recetaRepository.js";

export const crearRecetaService = async (data) => {
  try {
    if (!data.categoria) {
      throw new Error("La categoría no puede ser nula");
    }

    validateCategoria(data.categoria);

    const recetaData = {
      ...data,
      imagen: data.imagen || null, // Si no está definido, establecer como null
    };

    const receta = await saveReceta(recetaData);
    return receta;
  } catch (error) {
    console.error("Error al guardar la receta en el servicio:", error.message);
    throw new Error("No se pudo guardar la receta");
  }
};

export async function recetasDeCategoria(categoria) {
  const recetas = await buscarRecetasPorCategoria(categoria);
  if (!recetas)
    throw new Error(
      "Error al obtener todas las recetas de la categoria ",
      categoria
    );
  return recetas;
}

export async function buscarDetalleRecetaPorId(recetaId) {
    
}
