import { readFile } from "node:fs/promises";

console.log("Leyendo el primer archivo");
const text = await readFile("./hola.txt", "utf-8");
console.log(`Primer texto: ${text}`);

console.log("---- Hacer cosas mientras lee el archivo ----");

console.log("Leyendo el segundo archivo");
const textSegundo = await readFile("./hola1.txt", "utf-8");
console.log(`Segundo texto: ${textSegundo}`);
