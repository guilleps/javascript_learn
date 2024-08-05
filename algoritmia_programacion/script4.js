const {
  EmptyInputError,
  IsNotANumberError,
  InvalidRadioError,
  UndefinedError,
} = require("./HandlerExcepcions");

const areaOfCircle = (radio) => {
  try {
    if (radio === "") {
      throw new EmptyInputError("El radio no puede estar vacio");
    }

    if (isNaN(radio)) {
      throw new IsNotANumberError("El valor proporcionado no es un número");
    }

    if (radio <= 0) {
      throw new InvalidRadioError("El radio no puede ser negativo ni cero");
    }

    const area = Math.PI * Math.pow(radio, 2);
    const longCircle = 2 * Math.PI * radio;

    const areaRounded = area.toFixed(2);
    const longRounded = longCircle.toFixed(2);

    console.log(
      `El area del circulo con radio ${radio}, es (redondeada a 2 decimales)): ${areaRounded}`
    );
    console.log(
      `La longitud del circulo con radio ${radio}, es (redondeada a 2 decimales): ${longRounded}`
    );
  } catch (error) {
    handleErrors(error);
  }
};

const handleErrors = (error) => {
  if (
    error instanceof UndefinedError ||
    error instanceof IsNotANumberError ||
    error instanceof EmptyInputError ||
    error instanceof InvalidRadioError
  ) {
    console.error(`${error.name}: ${error.message}`);
  } else {
    console.error(error);
  }
};

console.log("1er intento");
areaOfCircle(32.2);
console.log("\n2do intento");
areaOfCircle("f");
console.log("\n3er intento");
areaOfCircle(0);
