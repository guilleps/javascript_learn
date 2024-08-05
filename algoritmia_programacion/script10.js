/**
 * Luego de evaluar a 60 alumnos del curso de Introducción a la programación se tiene que
 * 40 alumnos tienen una nota igual o mayor a once.
 * Indicar el porcentaje de aprobados y de desaprobados.
 */

const {
  InvalidValueError,
  IsNotANumberError,
  ZeroNotAllowedError,
  EmptyInputError,
} = require("./HandlerExcepcions");
const { VARIABLES_TYPES } = require("./variables_types");

const TOTAL_ALUMNOS = 60;

/**
 * Calcular y mostrar el porcentaje de los alumnos aprobados y no aprobados
 * @param {number} aprobados - Número de alumnos aprobados
 * @param {number} desaprobados - Número de alumnos desaprobados
 */
const courseToIntro = (aprobados, desaprobados) => {
  try {
    // Validar los datos antes de hacer cualquier cálculo
    validarDatos(aprobados, desaprobados);

    const alumnosAprobados = calcularPorcentaje(aprobados, TOTAL_ALUMNOS);
    const alumnosDesaprobados = calcularPorcentaje(aprobados, TOTAL_ALUMNOS);

    console.log(
      `De los ${TOTAL_ALUMNOS} del curso, el ${alumnosAprobados}% están aprobados y el ${alumnosDesaprobados}% están desaprobados.`
    );
  } catch (error) {
    handlerErrors(error);
  }
};

/**
 * Calcular el porcentaje de una parte del todo
 * @param {number} tipoEstudiante - Numero de estudiantes
 * @param {number} total - Numero total
 * @param {string} - Porcentaje en decimales
 */
const calcularPorcentaje = (tipoEstudiante, total) => {
  return ((tipoEstudiante / total) * 100).toFixed(2);
};

/**
 * Validar los datos de entrada
 * @param {number} aprobados - Numero de alumnos aprobados
 * @param {number} desaprobados - Numero de alumnos desaprobados
 * @throws {IsNotANumberError|ZeroNotAllowedError|EmptyInputError|InvalidValueError}
 */
const validarDatos = (aprobados, desaprobados) => {
  if (
    typeof aprobados !== VARIABLES_TYPES.NUMBER ||
    typeof desaprobados !== VARIABLES_TYPES.NUMBER
  )
    throw new IsNotANumberError("Los valores ingresados deben ser números");

  if (aprobados < 0 || desaprobados < 0)
    throw new ZeroNotAllowedError(
      "Los valores ingresados no pueden ser negativos"
    );

  if (isNaN(aprobados) || isNaN(desaprobados)) {
    throw new EmptyInputError("No se permiten valores vacíos");
  }

  if (aprobados + desaprobados > 60) {
    throw new InvalidValueError(
      "Ingrese correctamente el valor de los aprobados y/o los desaprobados"
    );
  }
};

/**
 * Maneja los errores generados durante la ejecucion
 * @param {Error} error - Objeto de error
 */
const handlerErrors = (error) => {
  if (
    error instanceof IsNotANumberError ||
    error instanceof ZeroNotAllowedError ||
    error instanceof EmptyInputError ||
    error instanceof InvalidValueError
  ) {
    console.error(error.message);
  } else {
    console.error("Error desconocido:", error);
  }
};

courseToIntro(15, 30);
courseToIntro("aprobados", -1);
courseToIntro(15, null);
