//patron de diseño modulo - separa codigo en distintos archivos e importar en los necesarios
// sistema modrno de modulos (recomendado) => EcmaScriptModules (import - module)
import { sum } from "./sum.mjs";

console.log(sum(1, 4));
