import {
  DividedZeroError,
  IsNotANumberError,
  IsNullNumberError,
} from "./HandlerExcepcionsWithESModule.mjs";

const { VARIABLES_TYPES } = require("./variables_types");

const validaciones = (x, y) => {
  if (x === VARIABLES_TYPES.NULL && y === VARIABLES_TYPES.NULL) {
    throw new IsNullNumberError("No se aceptan valores nulos");
  } else if (
    typeof x !== VARIABLES_TYPES.NUMBER ||
    typeof y !== VARIABLES_TYPES.NUMBER
  ) {
    throw new IsNotANumberError("No es un numero");
  }
};

const resultados = (x, y, sum, rest, multiplicacion, division) => {
  console.log(`La suma de ${x} y ${y} es = ${sum}`);
  console.log(`La suma de ${x} y ${y} es = ${rest}`);
  console.log(`La suma de ${x} y ${y} es = ${multiplicacion}`);
  console.log(
    `La suma de ${x} y ${y} es = ${division}, redondeado ${Math.round(
      division
    )}`
  );
};

const operacionesBasicas = (x, y) => {
  try {
    validaciones(x, y);

    const sum = suma(x, y);
    const rest = resta(x, y);
    const multiplicacion = multi(x, y);
    const division = div(x, y);

    resultados(x, y, sum, rest, multiplicacion, division);
  } catch (error) {
    handleErrors(error);
  }
};

const handleErrors = (error) => {
  if (
    error instanceof IsNullNumberError ||
    error instanceof IsNotANumberError ||
    error instanceof DividedZeroError
  ) {
    console.error(`${error.name}: ${error.message}`);
  } else {
    console.error(error);
  }
};

const suma = (x, y) => x + y;
const resta = (x, y) => x - y;
const multi = (x, y) => x * y;
const div = (x, y) => {
  if (y === 0) {
    throw new DividedZeroError("División por cero no permitida");
  }
  return x / y;
};

console.log("1er intento");
operacionesBasicas("e", null);
console.log("\n2do intento");
operacionesBasicas(5, 12);
console.log("\n3ro intento");
operacionesBasicas(10, 2);
console.log("\n4to intento");
operacionesBasicas(10, 0);
