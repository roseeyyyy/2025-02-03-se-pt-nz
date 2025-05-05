const Calculator = require('./calculatorLibrary');
const calc = new Calculator();


const sum = calc.add(5, 10);
console.log(`Sum: ${sum}`);

const difference = calc.subtract(20, 7);
console.log(`Difference: ${difference}`);

const product = calc.multiply(4, 6);
console.log(`Product: ${product}`);

const quotient = calc.divide(30, 5);
console.log(`Quotient: ${quotient}`);

const failTest = calc.divide(10, 0);
console.log(`Division by zero test result: ${failTest}`);
