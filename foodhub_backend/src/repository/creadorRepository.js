// LOGICA CON LA ENTIDAD CREADOR
import db from "../config/db.js";

export const registerCreador = async (data) => {
  const [result] = await db.query(
    `INSERT INTO creador (
      nombre, 
      apellido_paterno, 
      apellido_materno, 
      correo_electronico, 
      contrasenia, 
      codigo_colegiatura,
      is_enabled,
      account_non_expired,
      account_non_locked,
      credentials_non_expired,
      token_confirmacion
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      data.nombre,
      data.apellido_paterno,
      data.apellido_materno,
      data.correo_electronico,
      data.contrasenia,
      data.codigo_colegiatura,
      data.is_enabled,
      data.account_non_expired,
      data.account_non_locked,
      data.credentials_non_expired,
      data.token_confirmacion,
    ]
  );

  return { id_creador: result.insertId, token: data.token_confirmacion };
};

export const scheduleUserDeletion = (id_creador) => {
  setTimeout(async () => {
    const [rows] = await db.query(
      "SELECT * FROM creador WHERE id_creador = ? AND is_enabled = false",
      [id_creador]
    );

    if (rows.length > 0) {
      await db.query("DELETE FROM creador WHERE id_creador = ?", [id_creador]);
      console.log(`Usuario ${id_creador} no confirmó su cuenta, eliminado`);
    }
  }, 15 * 60 * 1000);
};

export const findByEmail = async (correo_electronico) => {
  const [rows] = await db.query(
    "SELECT * FROM creador WHERE correo_electronico = ?",
    [correo_electronico]
  );
  return rows[0];
};