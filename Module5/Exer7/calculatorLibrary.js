const libraryLog = require('./libraryLog');

class Calculator {
  constructor() {
    this.id = Math.random().toString(36).substring(2, 10);
    this.libraryLog = new libraryLog();
  }

  add(num1, num2) {
    const value = num1 + num2;
    this.libraryLog.log(this.id, `Addition result: ${value}`);
    return value;
  }

  subtract(num1, num2) {
    const value = num1 - num2;
    this.libraryLog.log(this.id, `Subtraction result: ${value}`);
    return value;
  }

  multiply(num1, num2) {
    const value = num1 * num2;
    this.libraryLog.log(this.id, `Multiplication result: ${value}`);
    return value;
  }

  divide(num1, num2) {
    if (num2 === 0) {
      this.libraryLog.log(this.id, `Error: Division by zero`);
      return null;
    }
    const value = num1 / num2;
    this.libraryLog.log(this.id, `Division result: ${value}`);
    return value;
  }
}

module.exports = Calculator;
