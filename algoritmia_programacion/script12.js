/**
 * Un alumnos compra X kilos de papas de 2.00 soles/kilo, Y litros de leche a 1.00 sol/litro
 *  y Z metros de tela a 15.00 soles/metro. ¿Cuanto debe pagar en total?
 */

const {
  IsNotANumberError,
  NoNegativeNumberError,
  EmptyInputError,
} = require("./HandlerExcepcions");
const { VARIABLES_TYPES } = require("./variables_types");

const SOL_X_KILO_PAPA = 2;
const SOL_X_LITRO_LECHE = 1;
const SOL_X_METRO_TELA = 15;

const pagarTotal = (kilos, litros, metros) => {
  try {
    validateInputs(kilos, litros, metros);

    const papas = pagoPorComida(kilos, SOL_X_KILO_PAPA);
    const leche = pagoPorComida(litros, SOL_X_LITRO_LECHE);
    const tela = pagoPorComida(metros, SOL_X_METRO_TELA);

    const total = totalPago(papas, leche, tela);

    console.log(
      `Se ha comprado\n${kilos} kilos de papa: ${papas} soles\n${litros} litros de leche: ${leche} soles\n${metros} metros de tela: ${tela} soles`
    );
    console.log(`Debes de pagar un total de ${total} soles`);
  } catch (error) {
    handleErrors(error);
  }
};

const validateInputs = (kilos, litros, metros) => {
  if (
    typeof kilos !== VARIABLES_TYPES.NUMBER ||
    typeof litros !== VARIABLES_TYPES.NUMBER ||
    typeof metros !== VARIABLES_TYPES.NUMBER
  ) {
    throw new IsNotANumberError("Todos los valores deben ser números.");
  }

  if (kilos < 0 || litros < 0 || metros < 0) {
    throw new NoNegativeNumberError("Los valores no pueden ser negativos.");
  }

  if (isNaN(kilos) || isNaN(litros) || isNaN(metros)) {
    throw new EmptyInputError("No se permiten valores vacíos o NaN.");
  }
};

const pagoPorComida = (cantidad, precio) => {
  return cantidad * precio;
};

const totalPago = (x, y, z) => {
  return x + y + z;
};

const handleErrors = (error) => {
  console.error(`${error.name}:`, error.message);
};

console.log("1er intento");
pagarTotal(4, 2, 6);
console.log("2do intento");
pagarTotal("hola", 2, 6);
console.log("3er intento");
pagarTotal(6, null, 6);
