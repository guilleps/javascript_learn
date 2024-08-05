/**
 * Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos
 * los números pares en la lista. La función deberá iterar sobre cada número en la lista,
 * comprobar si el número es par y, si es así, añadirlo a la suma total. Usa el bucle que quieras
 * para solucionarlo.
 * @param {number} numeros - arreglo de numeros que recorrer
 * @returns {number} - la suma de los numeros pares dentro del arreglo
 */
function sumarPares(numeros) {
  let suma = 0;

  // ---- for...of ----
  // for (const numero of numeros) {
  //   if (numero % 2 == 0) suma += numero;
  // }

  // ---- for ----
  // for(let i = 0; i <= numeros.length - 1; i++) {
  //   if (numeros[i] % 2 == 0) suma += numeros[i];
  // }

  // ---- .forEach() ----
  numeros.forEach((numero) => {
    if (numero % 2 == 0) suma += numero;
  });
  return suma;
}

const arreglito = [3, 2, 5, 6, 71, 2, 4, , 78, 8, 432, 5];

console.log(sumarPares(arreglito));
