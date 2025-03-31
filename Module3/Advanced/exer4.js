function printFibonacciTimeouts(limit) {
  let a = 0, b = 1
  let count = 0 

  function printNextFibonacci() {
    console.log(a)
    count++

    if (count >= limit) {
      return
    }

    [a, b] = [b, a + b]

    setTimeout(printNextFibonacci, 1000);
  }

 
  printNextFibonacci();
}

printFibonacciTimeouts(10);
