// variables
let myFirstVariable = 2;
myFirstVariable = "hello";
myFirstVariable = true;

const TYPE_WORD = "word";

// functions declarations
function add(num1, num2) {
    return num1 + num2;
}

add(3, 5);

// exposing to other files
export const MY_VALUE = 5;
export function multiply(num1, num2) {
    return num1 * num2;
}