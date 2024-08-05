// debemos exportar la funcion para hacer uso de esta funciona fuera del archivo
// sistema clasico de modulo => CommonJs (export - module)

function sum(a, b) {
  return a + b;
}

//forma clasica
module.exports = {
  sum,
};
