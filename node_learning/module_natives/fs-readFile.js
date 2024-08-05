// forma asincrona

const fs = require("node:fs");

console.log("Leyendo el primer archivo");
fs.readFile("./hola.txt", "utf-8", (err, text) => {
  // agregar un callback no es necesario agregar a una constante
  console.log(text);
});

console.log("---- Hacer cosas mientras lee el archivo ----");

console.log("Leyendo el segundo archivo");
fs.readFile("./hola1.txt", "utf-8", (err, textSegundo) => {
  // agregar un callback no es necesario agregar a una constante
  console.log(textSegundo);
});

// forma sincrona, no viable
/*
console.log("Leyendo el primer archivo");
const text = fs.readFileSync("./hola.txt", "utf-8");

console.log(text);

console.log("Hacer cosas mientras lee el archivo")

console.log("Leyendo el segundo archivo");
const textSegundo = fs.readFileSync("./hola1.txt", "utf-8");

console.log(textSegundo);
*/
