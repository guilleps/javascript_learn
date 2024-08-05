class UndefinedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UndefinedError";
  }
}

class IsNotANumberError extends Error {
  constructor(message) {
    super(message);
    this.name = "IsNotANumberError";
  }
}

class EmptyInputError extends Error {
  constructor(message) {
    super(message);
    this.name = "EmptyInputError";
  }
}

class InvalidValueError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidRadioError";
  }
}

class IsNullNumberError extends Error {
  constructor(message) {
    super(message);
    this.name = "IsNullNumberError";
  }
}

class DividedZeroError extends Error {
  constructor(message) {
    super(message);
    this.name = "IsNullNumberError";
  }
}

class ZeroNotAllowedError extends Error {
  constructor(message) {
    super(message);
    this.name = "ZeroNotAllowedError";
  }
}

class ValueOutOfRangeError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValueOutOfRangeError";
  }
}

class NoNegativeNumberError extends Error {
  constructor(message) {
    super(message);
    this.name = "NoNegativeNumberError";
  }
}

module.exports = {
  UndefinedError,
  IsNotANumberError,
  EmptyInputError,
  InvalidValueError,
  IsNullNumberError,
  DividedZeroError,
  ZeroNotAllowedError,
  ValueOutOfRangeError,
  NoNegativeNumberError,
};
