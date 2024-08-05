/**
 * En una biblioteca queremos saber qué libro es el que menos páginas tiene y el que más páginas.
 * Por suerte, no hay dos libros con el mismo número de páginas.
 * Necesitamos que la función reciba un array de números, sin ordenar,
 * y que devuelva un array de dos posiciones con el índice del libro con menos páginas
 * y el índice del libro con más páginas.
 */
function minAndMaxWord(words) {
//   let min = 0;
//   let max = 0;

//   for (let i = 0; i < words.length - 1; i++) {
//     if (words[i] < words[min]) {
//       min = i;
//     }
//     if (words[i] > words[max]) {
//       max = i;
//     }
//   }
//   return [min, max];

  return [words.indexOf(Math.min(...words)), words.indexOf(Math.max(...words))];
}

const books = [300, 150, 600, 450, 200];
console.log(minAndMaxWord(books));
