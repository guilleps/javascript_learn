/**
 * Escribe una función que calcule la sucesión de Fibonacci de forma recursiva.
 * La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es
 * la suma de los dos anteriores en la sucesión. Por ejemplo: fibonacci(6) -> 8 (0, 1, 1, 2, 3, 5, 8)
 * @param {number} num - La posición en la sucesión de Fibonacci.
 * @returns {number} - El n-ésimo número en la sucesión de Fibonacci. -> n-esimo = al n numero en la posicion
 */
const fibonacci = (num) => {
  // El número ingresado no significa que se calculará Fibonacci con base 6
  // sino se obtendrá el sexto número dentro de la secuencia de Fibonacci.

  // Casos base: Definidos por la secuencia de Fibonacci
  if (num === 0) {
    // En caso el número buscado sea en la posición 0, en la sucesión Fibonacci retornará automáticamente 0.
    return 0;
  } else if (num === 1) {
    // En caso el primer número de la sucesión Fibonacci sea buscado retornará automáticamente 1.
    return 1;
  }

  // para obtener fibonacci(6) = fibonacci(6 - 1) + fibonacci(6 - 2)
  // para obtener fibonacci(5) = fibonacci(5 - 1) + fibonacci(5 - 2)
  // ...
  return fibonacci(num - 1) + fibonacci(num - 2); // 8
};

// fibonacci(num - 1) y fibonacci(num - 2) representan los dos números anteriores en la secuencia de Fibonacci, no en relación al valor num ingresado.
// La idea es que para encontrar el enésimo número en la secuencia, debes sumar los dos números anteriores en la misma secuencia.

fibonacci(6);
