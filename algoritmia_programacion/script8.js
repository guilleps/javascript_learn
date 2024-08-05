/**
 * Leer la base y altura de un triangulo y calcular su área.
 */

const { IsNotANumberError, IsNullNumberError } = require("./HandlerExcepcions");
const { VARIABLES_TYPES } = require("./variables_types");

const areaOfTrinagle = (base, height) => {
  try {
    if (base === VARIABLES_TYPES.NULL || height === VARIABLES_TYPES.NULL) {
      throw new IsNullNumberError("No se aceptan valores nulos");
    }

    if (isNaN(base) || isNaN(height)) {
      throw new IsNotANumberError("El valor ingresado no es un numero");
    }

    const area = (base * height) / 2;

    console.log(
      `El area del triangulo con base: ${base} y altura: ${height} es: ${area}`
    );
  } catch (error) {
    handleErrors(error);
  }
};

const handleErrors = (error) => {
  if (
    error instanceof IsNotANumberError ||
    error instanceof IsNullNumberError
  ) {
    console.error(`${error.name}: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(`ReferenceError: ${error.message}`);
  } else {
    console.error(error);
  }
};

areaOfTrinagle(3, 5);
areaOfTrinagle(7, 8);
areaOfTrinagle("rectangulo", 3);
areaOfTrinagle(null, "e");
