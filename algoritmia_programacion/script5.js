const {
  UndefinedError,
  IsNullNumberError,
  ZeroNotAllowedError,
  IsNotANumberError,
} = require("./HandlerExcepcions");

const USD = 3.75;
const EUR = 4.09;

const typeOfChange = (soles) => {
  try {
    if (soles <= 0) {
      throw new ZeroNotAllowedError("No puedes ingresar 0 soles");
    }

    if (isNaN(soles)) {
      throw new IsNotANumberError("El valor ingresado no es un numero");
    }

    const toUSD = soles / USD;
    const toEUR = soles / EUR;

    console.log(
      `${soles} soles peruanos en dolares es igual a: ${toUSD.toFixed(2)}`
    );
    console.log(
      `${soles} soles peruanos en euros es igual a: ${toEUR.toFixed(2)}`
    );
  } catch (error) {
    handleErrors(error); // undefined, null
  }
};

const handleErrors = (error) => {
  if (
    error instanceof UndefinedError ||
    error instanceof IsNullNumberError ||
    error instanceof ZeroNotAllowedError ||
    error instanceof IsNotANumberError
  ) {
    console.error(`${error.name}: ${error.message}`);
  }
};

console.log("1er intento");
typeOfChange(5);
console.log("\n2do intento");
typeOfChange(-3);
console.log("\n3er intento");
typeOfChange("bolivares");
