const arr = [3, 4, 17, 5, 6, 8];

const adivina = (number) => {
  const divideArr = Math.floor(arr.length / 2);

  if (number < arr[divideArr]) {
    for (let index = 0; index < divideArr; index++) {
      if (arr[index] === number) {
        console.log(`Lo he conseguido tu numero es: ${arr[index]}, en la posicion del arrelgo: ${index}`);
      }
    }
  } else if (number > arr[divideArr]) {
    for (let index = divideArr + 1; index < arr.length; index++) {
      if (arr[index] === number) {
        console.log(`Lo he conseguido tu numero es: ${arr[index]}, en la posicion del arrelgo: ${index}`);
      }
    }
  } else if (number === arr[divideArr]) {
    console.log(`Lo he conseguido tu numero es ${arr[divideArr]}, en la posicion del arrelgo: ${index}`);
  } else {
    console.log(`${number} no está en el arreglo`);
  }

  //   for (let i = 0; i < arr.length; i++) {
  //     if (i === number) {
  //         console.log(`Lo he conseguido tu numero es: ${i}`);
  //     }
  //   }
};

adivina(6); // 17 ni 8 ???
