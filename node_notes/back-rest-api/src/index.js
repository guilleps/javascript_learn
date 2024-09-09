// debemos de agregar la extension del archivo al cual vamos a traer la funcion de app,
// ya que son archivos creados por uno mismo y no es una biblioteca externa caso contrario funcionaria
// sin la extension
import app from "./app.js";

import { connectDB } from "./db/db.js";

connectDB();

// funcion que permite al servidor escuchar en el puerto X de la maquina local
// en etapa de desarrollo indicar el puerto es comun para hacer pruebas y demas
// pero en produccion esto suele ser asignado como una variable constante o archivo de entorno dado el puerto asignado en el despliegue de la aplicacion
app.listen(3000);

console.log("server on port", 3000);
