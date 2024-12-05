// CARPETA CONFGI SU FINALIDAD ES LA CONFIGURACION DEL BACKEND
// EJEM. CONEXION CON BD MYSQL
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const db = pool.promise();

(async () => {
  try {
    await db.query("SELECT 1");
    console.log(`Conexion exitosa con la BD: ${process.env.DB_NAME}`);
  } catch (error) {
    console.error("Error al conectar: ", error.message);
    process.exit(1);
  }
})();

export default db;
