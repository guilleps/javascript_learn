/**
 * Dada la ecuacion Y = X^3 + 3X^2 + X - 2. Calcular cuánto vale Y para un valor dado de X
 */

const {
  IsNotANumberError,
  ZeroNotAllowedError,
  EmptyInputError,
} = require("./HandlerExcepcions");
const { VARIABLES_TYPES } = require("./variables_types");

const equationCalculate = (x) => {
  try {
    validateX(x);

    const equation = x ** 3 + 3 * x ** 2 + x - 2;
    console.log(`Para X = ${x}, el valor de Y es: ${equation}`);
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
};

const validateX = (value) => {
  if (typeof value !== VARIABLES_TYPES.NUMBER) {
    throw new IsNotANumberError("El valor de X debe ser un numero");
  }

  if (value <= 0) {
    throw new ZeroNotAllowedError("El valor de X no puede ser 0 o menos");
  }

  if (isNaN(value)) {
    throw new EmptyInputError("No puede haber un valor vacio");
  }
};

equationCalculate(8);
