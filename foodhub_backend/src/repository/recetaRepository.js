import db from "../config/db.js";

export const saveReceta = async (receta) => {
  const [result] = await db.query(
    `INSERT INTO receta (titulo, descripcion, tiempo_coccion, porciones, calorias, categoria, imagen, id_creador) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      receta.titulo,
      receta.descripcion,
      receta.tiempo_coccion,
      receta.porciones,
      receta.calorias,
      receta.categoria,
      receta.imagen || null,
      receta.id_creador,
    ]
  );

  const recetaId = result.insertId;

  // Guardar ingredientes
  for (const ingrediente of receta.ingredientes) {
    await db.query(
      `INSERT INTO ingrediente (ingrediente, id_receta) VALUES (?, ?)`,
      [ingrediente.ingrediente, recetaId]
    );
  }

  // Guardar instrucciones
  for (const instruccion of receta.instrucciones) {
    await db.query(
      `INSERT INTO instruccion (instruccion, id_receta) VALUES (?, ?)`,
      [instruccion.instruccion, recetaId]
    );
  }

  return { ...receta };
};
