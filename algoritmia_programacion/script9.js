/**
 * Un alumno ingresa a prácticas a las x:00 am y sale a las y:00 am.
 * Indicar el tiempo que estuvo en el laboratorio, expresado en horas, en minutos
 * y en segundo.
 */

const {
  IsNotANumberError,
  ValueOutOfRangeError,
} = require("./HandlerExcepcions");

const validateTime = (x, y) => {
  return new Promise((resolve, reject) => {
    if (isNaN(x) || isNaN(y)) {
      reject(new IsNotANumberError("Los vlaores ingresados deben ser números"));
    } else if (x < 0 || y < 0 || x > 12 || y > 12) {
      reject(
        new ValueOutOfRangeError("Los valores deben estar entre 0 y 11am")
      );
    } else if (x > y) {
      reject(
        new ValueOutOfRangeError(
          "El primero valor no puede ser mayor que el segundo"
        )
      );
    } else {
      resolve([x, y]);
    }
  });
};

const time = async (x, y) => {
  try {
    await validateTime(x, y);

    const h = y - x;
    const min = h * 60;
    const seg = min * 60;

    console.log(
      `\nDesde las ${x}:00 A.M. hasta las ${y}:00 A.M. han transcurrido...\n ${h} horas = ${min} minutos = ${seg} segundos`
    );
  } catch (error) {
    handleErrors(error);
  }
};

const handleErrors = (error) => {
  if (
    error instanceof IsNotANumberError ||
    error instanceof ValueOutOfRangeError
  ) {
    console.error(`${error.name}: ${error.message}`);
  } else {
    console.error(error);
  }
};

time(4, 9);
// time(10, 9);
