function debounce(func, ms = 1000) {
    let timeout
  
    return function(...args) {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
            func(...args)
        }, ms)
    };
}

function printMe(msg) {
    console.log(msg)
}

printMe = debounce(printMe, 500); 

setTimeout(() => printMe('First call'), 100)
setTimeout(() => printMe('Second call'), 200)
setTimeout(() => printMe('Third call'), 300)