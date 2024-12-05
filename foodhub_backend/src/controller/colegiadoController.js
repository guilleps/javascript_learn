// LOGICA DE NEGOCIO - OPERACIONES ESPECIFICAS LO QUE ACCEDE, PROCESA O DEVUELVA UNA RESPUESTA - REUTILIZACION
import db from "../config/db.js";

export const getAllColegiados = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM colegiado");

    const formattedRows = rows.map((row) => ({
      ...row,
      cuenta_confirmada: row.cuenta_confirmada[0] === 1,
    }));

    res.status(200).json({ message: formattedRows });
  } catch (error) {
    console.error("Error no hay", error.message);
    res.status(500).json({ error: "Errorsote" });
  }
};
