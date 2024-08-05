/**
 * La facultad de Ingeniería de la UPAO tiene: X alumnos en Ingeniería Electronica, Y alumnos en Ingeniería
 * Civil y Z alumnos en Ingeniería de Computacion y Sistemas. Indicar el porcentaje de alumnos de cada
 * escuela en la Facultad de Ingeniería
 */

const {
  IsNotANumberError,
  NoNegativeNumberError,
  EmptyInputError,
} = require("./HandlerExcepcions");
const { VARIABLES_TYPES } = require("./variables_types");

const ENGINEERING_TYPES = {
  GENERAL: "Ingeniería",
  ELECTRONICS: "Ingeniería Electrónica",
  CIVIL: "Ingeniería Civil",
  COMPUTER_SCIENCE: "Ingeniería de Computación y Sistemas",
};

const porcentajeAlumnos = (electronics, civil, computerScience) => {
  try {
    validateStudentNumbers(electronics, civil, computerScience);

    const totalStudents = calculateTotalStudents(
      electronics,
      civil,
      computerScience
    );

    const percentageElectronics = calculatePercentage(
      electronics,
      totalStudents
    );
    const percentageCivil = calculatePercentage(civil, totalStudents);
    const percentageComputerScience = calculatePercentage(
      computerScience,
      totalStudents
    );

    console.log(
      `Total de estudiantes de ${ENGINEERING_TYPES.GENERAL}: ${totalStudents}`
    );
    console.log(
      `Alumnos de ${ENGINEERING_TYPES.ELECTRONICS}: ${percentageElectronics}%`
    );
    console.log(`Alumnos de ${ENGINEERING_TYPES.CIVIL}: ${percentageCivil}%`);
    console.log(
      `Alumnos de ${ENGINEERING_TYPES.COMPUTER_SCIENCE}: ${percentageComputerScience}%`
    );
  } catch (error) {
    handleErrors(error);
  }
};

const validateStudentNumbers = (electronics, civil, computerScience) => {
  if (
    typeof electronics !== VARIABLES_TYPES.NUMBER ||
    typeof civil !== VARIABLES_TYPES.NUMBER ||
    typeof computerScience !== VARIABLES_TYPES.NUMBER
  ) {
    throw new IsNotANumberError("Todos los valores deben ser números.");
  }

  if (electronics < 0 || civil < 0 || computerScience < 0) {
    throw new NoNegativeNumberError(
      "Los números de alumnos no pueden ser negativos."
    );
  }

  if (isNaN(electronics) || isNaN(civil) || isNaN(computerScience)) {
    throw new EmptyInputError("No se permiten valores vacíos o NaN.");
  }
};

const calculateTotalStudents = (electronics, civil, computerScience) => {
  return electronics + civil + computerScience;
};

const calculatePercentage = (part, total) => {
  return ((part / total) * 100).toFixed(2);
};

const handleErrors = (error) => {
  console.error(`${error.name}: ${error.message}`);
};

console.log("1er intento");
porcentajeAlumnos(-17, 29, 30);
console.log("\n2do intento");
porcentajeAlumnos(0, "alumnos", 30);
console.log("\n3er intento");
porcentajeAlumnos("", "", "");
