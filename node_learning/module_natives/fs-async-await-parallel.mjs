import { readFile } from "node:fs";

Promise.all([readFile("./hola.txt", "utf-8"), readFile("./hola2.txt", "utf-8")])
  .then(([text, secondText]) => {
    console.log("Primer texto: ", text);
    console.log("Segundo texto: ", secondText);
  })
  .catch(console.log);
