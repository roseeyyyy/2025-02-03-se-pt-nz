function makeCounter(startFrom = 0, incrementBy = 1) {
  let currentCount = startFrom;
  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}

let counter1 = makeCounter(0,2); 
counter1(); 
counter1(); 

let counter2 = makeCounter(5,3); 
counter2(); 
counter2(); 

