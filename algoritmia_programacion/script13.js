/**
 * Se sabe que  un Megabyte equivale a 1024 Kbytes y un Gigabyte equivale a 1024 Megabytes.
 * Si mi Computadora tiene un disco duro de X Gigabytes.
 * Indicar a cuantos Kbytes equivale
 */

const {
  IsNotANumberError,
  NoNegativeNumberError,
  EmptyInputError,
} = require("./HandlerExcepcions");
const { VARIABLES_TYPES } = require("./variables_types");

const MEGABYTE_TO_KBYTES = 1024;
const GIGABYTE_TO_MEGABYTES = 1024;

const capacityComputer = (gigabytes) => {
  try {
    validateByte(gigabytes);

    const megabytes = gigabytes * GIGABYTE_TO_MEGABYTES;
    const kbytes = megabytes * MEGABYTE_TO_KBYTES;

    console.log(`${gigabytes} Gigabytes equivale a ${kbytes} Kbytes.`);
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
};

const validateByte = (gigabytes) => {
  if (typeof gigabytes !== VARIABLES_TYPES.NUMBER)
    throw new IsNotANumberError(
      "El valor de los gigabyte(s) debe ser un numero"
    );
  if (typeof gigabytes < 0)
    throw new NoNegativeNumberError("El valor no puede ser negativo");
  if (isNaN(gigabytes)) {
    throw new EmptyInputError("No se permiten valores vacios");
  }
};

capacityComputer(45);
