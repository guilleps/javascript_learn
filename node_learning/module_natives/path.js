const path = require("node:path");

// unir rutas con path.join -> mala practica indicando las rutas DISCO:/nombre/de/ruta ✖️ ~ mala practica
// debido a que los sistema operativos usan distintas / \
console.log(path.sep); // te muestra la posicion de la barra separadora de carpeta de tu sistema operativo

const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename("/temp/localdata/minecraft.ts");
console.log(base);

const filename = path.basename("/temp/localdata/minecraft.txt", ".txt");
console.log(filename);

const extension = path.extname("minecraft.ts");
console.log(extension);
