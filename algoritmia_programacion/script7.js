const { IsNotANumberError, EmptyInputError } = require("./HandlerExcepcions");
const { VARIABLES_TYPES } = require("./variables_types");

const equation = (x) => {
  try {
    if (typeof x === VARIABLES_TYPES.UNDEFINED) {
      throw new EmptyInputError("No se ha proporcionado ningun valor");
    }

    if (isNaN(x)) {
      throw new IsNotANumberError("El valor ingresado no es un numero");
    }

    console.log(`X^2: ${Math.pow(x, 2)} - X^3: ${Math.pow(x, 3)}`);
  } catch (error) {
    handleErrors(error);
  }
};

const handleErrors = (error) => {
  if (error instanceof EmptyInputError || error instanceof IsNotANumberError) {
    console.error(`${error.name}: ${error.message}`);
  } else {
    console.error(error);
  }
};

equation(4);
equation();
