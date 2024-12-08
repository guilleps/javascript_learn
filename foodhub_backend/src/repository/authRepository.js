// LOGICA CON LA ENTIDAD CREADOR
import db from "../config/db.js";
import schedule from "node-schedule";
import { NotFoundError } from "../excepcion/customErrors.js";

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

export const scheduleUserDeletion = (id_creador, creationTime) => {
  const deletionTime = new Date(creationTime.getTime() + 15 * 60 * 1000);

  schedule.scheduleJob(deletionTime, async () => {
    try {
      const [rows] = await db.query(
        "SELECT * FROM creador WHERE id_creador = ? AND is_enabled = false",
        [id_creador]
      );

      if (rows.length > 0) {
        await db.query("DELETE FROM creador WHERE id_creador = ?", [
          id_creador,
        ]);
        console.log(`Usuario ${id_creador} no confirmó su cuenta, eliminado`);
      }
    } catch (error) {
      console.error(`Error al eliminar usuario ${id_creador}:`, error.message);
    }
  });
};

export const findByEmail = async (correo_electronico) => {
  const [rows] = await db.query(
    "SELECT * FROM creador WHERE correo_electronico = ?",
    [correo_electronico]
  );
  return rows[0];
};

export const findEnableUser = async (creadorId) => {
  const [rows] = await db.query(
    "SELECT is_enabled FROM creador WHERE id_creador = ?",
    [creadorId]
  );

  if (rows.length === 0) {
    throw new NotFoundError("Usuario no encontrado.");
  }

  const isEnabled = rows[0].is_enabled;
  const isEnabledBoolean = Buffer.isBuffer(isEnabled)
    ? isEnabled.readUInt8(0) === 1
    : !!isEnabled;

  return isEnabledBoolean;
};

export const findByTokenAndEnableUser = async (token) => {
  const [rows] = await db.query(
    "SELECT * FROM creador WHERE token_confirmacion = ?",
    [token]
  );

  if (rows.length === 0) {
    throw new Error("Usuario no encontrado");
  }

  const user = rows[0];

  // Actualizar el estado del usuario
  await db.query(
    "UPDATE creador SET is_enabled = true, token_confirmacion = null WHERE id_creador = ?",
    [user.id_creador]
  );
  return user;
};
