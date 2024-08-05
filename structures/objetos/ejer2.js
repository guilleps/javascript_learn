/**
 * Tienes una función que recibe un objeto como parámetro.
 * La función debe retornar un array con el nombre de las propiedades que su tipo sea boolean.
 * Por ejemplo, para el objeto { a: true, b: 42, c: false }
 * la función debe retornar ['a', 'c'] ya que son las dos propiedades que tienen valores booleanos.
 */

function getKeysOfBooleanValues(obj) {
  const arreglo = [];

  for (const key in obj) {
    if (typeof obj[key] === "boolean") {
      arreglo.push(key);
    }
  }

  return arreglo;
  //   return Object.keys(obj).forEach((o) => {
  //     if (o === "boolean") return o;
  //   });
}

const cosita = {
  a: true,
  b: 42,
  c: false,
};

console.log(getKeysOfBooleanValues(cosita));
