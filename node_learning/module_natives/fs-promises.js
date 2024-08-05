// forma asincrona - con promesas
// al convertirlas en promesa ya no necesita callbacks

const fs = require("node:fs/promises");

console.log("Leyendo el primer archivo");
fs.readFile("./hola.txt", "utf-8")
  // then(entonces) -> es para cuando devuelva y se resuelva la promesa
  .then((text) => console.log(`Primer texto: ${text}`));

console.log("---- Hacer cosas mientras lee el archivo ----");

console.log("Leyendo el segundo archivo");
fs.readFile("./hola1.txt", "utf-8")
  // then(entonces) -> es para cuando devuelva y se resuelva la promesa
  .then((text) => console.log(`Segundo texto: ${text}`));
