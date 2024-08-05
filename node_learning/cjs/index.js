//patron de diseño modulo - separa codigo en distintos archivos e importar en los necesarios
// sistema clasico de modulo => CommonJs (import - require module)
const { sum } = require("./sum");

console.log(sum(1, 4));
