/**
 * Si compro X libros a Y euros cada uno y tambien compro W lapiceros a Z dolares cada uno.
 * ¿Cuanto debo pagar en soles? (Tipo de cambio 1 dolar = 3.71 soles, y considerar 1 euro = 1.09 dolar)
 */

const TIPO_CAMBIO = {
  EURO_TO_DOLAR: 1.09,
  DOLAR_TO_SOLES: 3.71,
};

const calcularTotalEnSoles = (
  cantidadLibros,
  precioLibroEuro,
  cantidadLapiceros,
  precioLapiceroDolar
) => {
  const precioLibroDolar = convertirEurosADolares(
    precioLibroEuro,
    TIPO_CAMBIO.EURO_TO_DOLAR
  );
  const precioLibroSoles = convertirDolaresASoles(
    precioLibroDolar,
    TIPO_CAMBIO.DOLAR_TO_SOLES
  );
  const precioLapiceroSoles = convertirDolaresASoles(
    precioLapiceroDolar,
    TIPO_CAMBIO.DOLAR_TO_SOLES
  );

  const totalLibros = calcularPrecioTotal(cantidadLibros, precioLibroSoles);
  const totalLapiceros = calcularPrecioTotal(
    cantidadLapiceros,
    precioLapiceroSoles
  );

  const totalPagarSoles = totalLibros + totalLapiceros;

  console.log(
    `Cantidad de libros: ${cantidadLibros}, Precio por libro (en euros): ${precioLibroEuro}`
  );
  console.log(
    `Cantidad de lapiceros: ${cantidadLapiceros}, Precio por lapicero (en dólares): ${precioLapiceroDolar}`
  );
  console.log(`Total a pagar en soles: ${totalPagarSoles.toFixed(2)} soles`);
};

const convertirEurosADolares = (cantidad, tipoCambio) => cantidad * tipoCambio;

const convertirDolaresASoles = (cantidad, tipoCambio) => cantidad * tipoCambio;

const calcularPrecioTotal = (cantidad, precioUnitario) =>
  cantidad * precioUnitario;

payToPen(3, 18, 8, 3);
