import { validateCategoria } from "../model/Categoria.js";
import { saveReceta } from "../repository/recetaRepository.js";

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
