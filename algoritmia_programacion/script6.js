const {
  IsNotANumberError,
  EmptyInputError,
} = require("./HandlerExcepcions");
const { VARIABLES_TYPES } = require("./variables_types");

/**
 * Si se sabe que 1 mol de Calcio equivale a 40 gramos.
 * Ingresar una cantidad X de calcio expresada en gramos y calcular la
 * cantidad de moles correspondiente.
 */
const molValueGram = 40;

const convertMolToGram = (gram) => {
  try {
    if (typeof gram === VARIABLES_TYPES.UNDEFINED) {
      throw new EmptyInputError("No se ha proporcionado ningun valor");
    }

    if (isNaN(gram)) {
      throw new IsNotANumberError("El valor ingresado no es un numero");
    }

    if (gram === 0) {
      return `El valor de los gramos es ${gram} por lo tanto la cantidad de moles es 0`;
    }

    const molToGram = molValueGram / gram;

    console.log(
      `La cantidad de ${gram} gramos es equivalente a ${molToGram} mol(es)`
    );
  } catch (error) {
    handleErrors(error);
  }
};

const handleErrors = (error) => {
  if (
    error instanceof IsNotANumberError ||
    error instanceof EmptyInputError
  ) {
    console.error(`${error.name}: ${error.message}`);
  } else {
    console.error(error);
  }
};

convertMolToGram(3);
convertMolToGram(-4);
convertMolToGram("calcio");
convertMolToGram();
