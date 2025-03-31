function orderItems(...itemName) {
  return `Order placed for: ${itemName.join(', ')}`;
}

function validateStringArg(fn) {
    return function(...args) {
      args.forEach(arg => {
        if (typeof arg !== 'string') {
          throw new Error('Argument must be a string')
        }
      })
      return fn(...args)
    }
}
// create a decorated version of the original function
const validatedOrderItem = validateStringArg(orderItems);

try {
    console.log(validatedOrderItem("Apple Watch", 123))
}   catch (error) {
        console.error(error.message)
    }