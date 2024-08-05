/**
 * Supón que queremos saber si el número 67 es primo. Si 67 está en el arreglo, entonces es primo.
 */

const primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

const busquedaBinaria = (number) => {
  let min = 0,
    max = primes.length - 1; // primes.length -1 porque el array inicia contando desde cero por eso -1
  let attempts = 0;

  while (min <= max) {
    // el valor minimo no puede sobrepasar el valor del maximo sino romperia la logica
    // hallamos la media entre los valores del minimo y maximo para ubicarnos a la mitad del arreglo
    const media = Math.floor((min + max) / 2); // usando Math.floor() ya que redonde al numero mas bajo
    attempts++;
    console.log(`Intento N°${attempts}`);

    if (primes[media] === number) {
      // prime[media], ubicamos el valor de la posicion media dentro del arreglo y si coincide lo retornamos
      console.log(
        `El numero ${primes[media]} si existe en el arreglo o sea es primo`
      );
      return media;
    } else if (primes[media] < number) {
      console.log("Primer recorte de izquierda, ya que es muy bajo");
      min = media + 1;
    } else {
      console.log("Primer recorte de derecha, ya que es muy alto");
      max = media - 1;
    }
  }

  console.log(`El número ${number} no se encuentra en el arreglo.`);
  return -1;
};

busquedaBinaria(83);

//Math.floor() -> redonde al menor entero - 4.5 -> 4
//Math.ceil() -> redondea al mayor entero - 4.5 -> 5
