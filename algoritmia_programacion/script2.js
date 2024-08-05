const {
  UndefinedError,
  IsNotANumberError,
  IsNullNumberError,
} = require("./HandlerExcepcions");
const { VARIABLES_TYPES } = require("./variables_types");

const cuadradoAreaYPerimetro = (lado) => {
  try {
    if (typeof lado === VARIABLES_TYPES.UNDEFINED) {
      throw new UndefinedError("No existe el valor de lado");
    } 
    
    if (typeof lado !== VARIABLES_TYPES.NUMBER) {
      throw new IsNotANumberError("El lado debe ser un numero");
    }
    
    if (lado <= 0) {
      throw new IsNullNumberError("El lado no puede tener valor 0");
    }

    const ar = area(lado);
    const per = perimetro(lado);

    console.log(`El área del cuadrado es = ${ar}`);
    console.log(`El perímetro del cuadrado es = ${per}`);
  } catch (error) {
    console.error(error.message);
  }
};

const validar = (lado) => {
  if (typeof lado === VARIABLES_TYPES.UNDEFINED) {
    throw new UndefinedError("No existe el valor de lado");
  } else if (typeof lado !== VARIABLES_TYPES.NUMBER) {
    throw new IsNotANumberError("El lado debe ser un numero");
  } else if (lado === 0) {
    throw new IsNullNumberError("El lado no puede tener valor 0");
  }
};

const area = (lado) => {
  validar(lado);
  return Math.pow(lado, 2);
};

const perimetro = (lado) => {
  validar(lado);
  return lado * 4;
};

console.log("1er intento");
cuadradoAreaYPerimetro();
console.log("\n2do intento");
cuadradoAreaYPerimetro("a");
console.log("\n3er intento");
cuadradoAreaYPerimetro(-3);
console.log("\n4to intento");
cuadradoAreaYPerimetro(6);
