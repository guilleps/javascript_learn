const sortedArray = [1, 3, 4, 6, 8, 9, 11, 14, 18, 20, 25, 30];

const busquedaBinaria = (numeroBuscado) => {
  let min = 0; // se toma en cuenta el indice del primer elemento
  let max = sortedArray.length - 1; // se toma en cuenta el indice del ultimo elemento
  let attempts = 0; // se hace un contador para tomar en cuenta cuantas veces a intentado adivinar el numero

  while (min <= max) {
    const media = Math.floor((min + max) / 2); // se saca la media de los limites sup/inf redondeando al menor
    attempts++; // suma +1 al contador
    console.log(`Intento ${attempts}: ¿Es ${sortedArray[media]}?`);

    if (sortedArray[media] === numeroBuscado) {
      // primera validacion si el valor del arreglo en posicion de la media sea el mismo valor del numero buscado
      console.log(`¡Lo encontré! El número secreto es ${sortedArray[media]}.`);
      return media; // se retorna directamente
    } else if (sortedArray[media] < numeroBuscado) {
      // segunda validacion si el valor del arreglo en posicion de la media es menor que el numero buscado
      console.log(`${sortedArray[media]} es demasiado bajo.`);
      min = media + 1; // por ello se hace suma de una a la media y se igual al valor minimo, asi descartamos los valores menores a este (izquierda) y contamos solo con los mayores (derecha)
    } else {
      // segunda validacion si el valor del arreglo en posicion de la media es mayor que el numero buscado
      console.log(`${sortedArray[media]} es demasiado alto.`);
      max = media - 1; // por ello se hace resta de una a la media y se igual al valor maximo, asi descartamos los valores mayores  a este (derecha) y contamos solo con los menores (izquierda)
    }

    // una vez hecha la primera vuelta vuelva hacerse hasta que el valor minimo sea igual que el maximo, pero por cada iteracion con nuevos valores de estos
  }
};

busquedaBinaria(25);
