/**
 * Se desea colocar alfombra a un aula que tiene X metros de largo, Y metros de ancho y Z metros de altura.
 * Si el metro cuadrado de alfombra instalada cuesta W dolares. ¿Cuantos dolares se gastaran en total?
 * (1 dolar = 3.25 soles)
 */

const { ZeroNotAllowedError } = require("./HandlerExcepcions");

const USDTOPEN = 3.25;

const pagoTotal = (largo, ancho, precioPorMetro) => {
  try {
    if (largo <= 0 || ancho <= 0 || precioPorMetro <= 0) {
      throw new ZeroNotAllowedError(
        "Las dimensiones o el precio no puede ser 0 o negativo"
      );
    }

    const area = calcularArea(largo, ancho);
    const pagoTotal = calcularCostoTotalEnDolares(area, precioPorMetro);

    console.log(`Dimensiones del aula: ${largo}m x ${ancho}m`);
    console.log(`Área total: ${area.toFixed(2)} metros cuadrados`);
    console.log(
      `Costo por metro cuadrado: $${precioPorMetro.toFixed(2)} soles`
    );
    console.log(`Costo total: $${pagoTotal.toFixed(2)} dólares`);
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
};

const calcularArea = (largo, ancho) => largo * ancho;

const calcularCostoTotalEnDolares = (area, precioPorMetro) =>
  (area * precioPorMetro) / USDTOPEN;

pagoTotal(45, 21, 4);
