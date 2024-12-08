import db from "../config/db.js";

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
    
}