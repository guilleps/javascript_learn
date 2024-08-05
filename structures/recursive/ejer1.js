/**
 * Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva. 
 * Por ejemplo: suma(3) -> 1 + 2 + 3 = 6
 */

const suma = (n) => {
  if (n <= 0) {
    // recursividad siempre debe de contener una condicion a cumplir para detener el bucle
    return 0; // puede retornar 0 o false
  } else {
    return n + suma(n - 1); // el valor actual ingresado se le hace suma de la misma funcion pero con el valor menos 1
  }
  // y asi hasta que cumpla con la condicion y se rompa el bucle
};

console.log(suma(3));

const arr = [1,2]
arr.length