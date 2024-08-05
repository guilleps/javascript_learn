export class UndefinedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UndefinedError";
  }
}

export class IsNotANumberError extends Error {
  constructor(message) {
    super(message);
    this.name = "IsNotANumberError";
  }
}

export class EmptyInputError extends Error {
  constructor(message) {
    super(message);
    this.name = "EmptyInputError";
  }
}

export class InvalidValueError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidRadioError";
  }
}

export class IsNullNumberError extends Error {
  constructor(message) {
    super(message);
    this.name = "IsNullNumberError";
  }
}

export class DividedZeroError extends Error {
  constructor(message) {
    super(message);
    this.name = "IsNullNumberError";
  }
}

export class ZeroNotAllowedError extends Error {
  constructor(message) {
    super(message);
    this.name = "ZeroNotAllowedError";
  }
}

export class ValueOutOfRangeError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValueOutOfRangeError";
  }
}

export class NoNegativeNumberError extends Error {
  constructor(message) {
    super(message);
    this.name = "NoNegativeNumberError";
  }
}
