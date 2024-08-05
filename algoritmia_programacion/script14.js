/**
 * A un digitadores le pagan 0.50 soles por cada hoja que digita, 1.00 soles por cada hoja que imprime
 * en blanco y negro y 2.00 soles por cada hoja que imprime a color. Si un dia digita H hojas de las
 * cuales C deben imprimirse a color y el resto en blanco negro ¿Cuanto le deben pagar?
 */

const { InvalidValueError } = require("./HandlerExcepcions");

const X_HOJA = 0.5;
const X_HOJA_BLANCO_NEGRO = 1;
const X_HOJA_COLOR = 2;

const pay = (total, hojasAColor) => {
  if (hojasAColor > total || hojasAColor < 0) {
    throw new InvalidValueError(
      "La cantidad de hojas de color no puede ser mayor que el total de hojas"
    );
  }

  const hojasBN = hojasRestantes(total, hojasAColor);

  const precioHojas = precioPorHoja(total, X_HOJA);
  const precioHojasColor = precioPorHoja(hojasAColor, X_HOJA_COLOR);
  const precioHojasBN = precioPorHoja(hojasBN, X_HOJA_BLANCO_NEGRO);

  console.log(`Cantidad total de hojas: ${total}, precio: ${precioHojas}`);
  console.log(
    `Cantidad de hojas de color: ${hojasAColor}, precio: ${precioHojasColor}`
  );
  console.log(`Cantidad total de hojas: ${hojasBN}, precio: ${precioHojasBN}`);
};

const hojasRestantes = (total, cantHojas) => {
  return total - cantHojas;
};

const precioPorHoja = (cantidadHojas, precio) => {
  return cantidadHojas * precio;
};

pay(100, 100);
