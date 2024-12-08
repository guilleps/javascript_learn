import db from "../config/db.js";

export const confirmColegiado = async (codigo) => {
  const [rows] = await db.query(
    "SELECT * FROM colegiado WHERE codigo_colegiado = ?",
    [codigo]
  );

  if (rows.length === 0) {
    throw new Error("Código de colegiado no encontrado.");
  }

  const colegiado = rows[0];

  await db.query(
    "UPDATE colegiado SET cuenta_confirmada = true WHERE id_colegiado = ?",
    [colegiado.id_colegiado]
  );

  return colegiado;
};

export const findColegiadoByCodigoColegiado = async (codigo) => {
  const [rows] = await db.query(
    "SELECT * FROM colegiado WHERE codigo_colegiado = ? AND cuenta_confirmada = false",
    [codigo]
  );
  return rows[0];
};
