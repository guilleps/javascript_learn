const { UndefinedError, IsNotANumberError } = require("./HandlerExcepcions");
const { VARIABLES_TYPES } = require("./variables_types");

const celsiusToFarenheit = (grado) => {
  try {
    const grados = transform(grado);
    console.log(`Transformación exitosa: ${grados}`);
  } catch (error) {
    manejarError(error);
  }
};

const transform = (grado) => {
  validarGrado(grado);

  const kelvin = grado + 273.15;
  console.log(
    `Gradon centígrados (°C) = ${grado}, a grados Kelvin (°K) = ${kelvin}`
  );
  return kelvin;
};

const validarGrado = (valor) => {
  if (typeof valor === VARIABLES_TYPES.UNDEFINED) {
    throw new UndefinedError();
  }

  if (typeof valor !== VARIABLES_TYPES.NUMBER) {
    throw new IsNotANumberError();
  }
};

const manejarError = (error) => {
  if (error instanceof IsNotANumberError || error instanceof UndefinedError) {
    console.error(`${error.name}: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.error(`ReferenceError: ${error.message}`);
  } else {
    console.error(`Error no capturado: ${error.message}`);
  }
};

console.log("Insertamos numero: ");
celsiusToFarenheit(23);
console.log("\nInsertamos una cadena vacia: ");
celsiusToFarenheit("");
console.log("\nInsertamos una variable o valor: ");
try {
  celsiusToFarenheit(hola);
} catch (error) {
  manejarError(error);
}
