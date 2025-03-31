function multiply(a, b, c, d) {
  console.log(a * b * c * d); //multiplying 4 parameters
}

//delay method
Function.prototype.delay = function(millisec) {
    const originalFunction = this
    return function(...args) {
        setTimeout(() => {
            originalFunction(this, args)
        }, millisec)
    }
}

multiply.delay(500)(5, 6, 7, 8);


