/**
 * filesystem, sistema de archivos en Node.js
 *
 */

const fs = require("node:fs");

const stats = fs.statSync("./hola.txt");

console.log(
  stats.isFile(), // si es un archivo
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // si es un enlace simbolico
  stats.size // tamaño en bytes
);
