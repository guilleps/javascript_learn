import db from "../config/db.js";
import { findByEmail } from "./authRepository.js";

export const verPerfil = async (email) => {
  const [rows] = await db.query(
    "SELECT nombre, apellido_paterno, apellido_materno, correo_electronico, codigo_colegiatura FROM creador WHERE correo_electronico = ?",
    [email]
  );

  if (rows.length === 0) {
    return null;
  }

  return rows[0]; // Retorna solo los campos seleccionados
};

export const cantidadDeRecetas = async (email) => {
  const creador = await findByEmail(email);
  const [rows] = await db.query(
    "SELECT COUNT(*) AS total_recetas FROM receta WHERE id_creador = ?",
    [creador.id_creador]
  );
  return rows[0].total_recetas; // Devuelve el conteo
};
