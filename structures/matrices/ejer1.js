/**
 * Recibimos una matriz de cadenas de texto.
 * Tenemos que localizar la posición de la palabra "JavaScript" en la matriz y
 * devolver su posición como un array de dos elementos: el índice de la fila y el índice de la columna.
 */

const matrix = [
  ["HTML", "CSS", "JavaScript"],
  ["Java", "C++", "Python"],
  ["Ruby", "Go", "Swift"],
];

function findJavaScript(arreglo) {
  for (let i = 0; i < arreglo.length; i++) {
    for (let j = 0; j < arreglo[i].length; j++) {
      if (arreglo[i][j] === "JavaScript") {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

const position = findJavaScript(matrix);
console.log(position); // -> [0, 2]
