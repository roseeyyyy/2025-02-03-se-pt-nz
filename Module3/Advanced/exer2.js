const delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
}

setTimeout(delayMsg, 100, "#1: Delayed by 100ms"); //this will display last after 100milliseconds
setTimeout(delayMsg, 20, "#2: Delayed by 20ms"); //this will print third after a delay of 20milliseconds
setTimeout(delayMsg, 0, "#3: Delayed by 0ms"); //this will print second right after #4
setTimeout(delayMsg, 15000, "#5: Delayed by 15000ms") //making a large delay time for 15seconds
delayMsg("#4: Not delayed at all"); //this will print first because theres no delay

//fifth test with 15 seconds delay
let timeOut = setTimeout(delayMsg, 15000, "#5 Delayed by 15000ms")

//preventing the fifth test to display after 5 seconds
setTimeout (() => {
    clearTimeout(timeOut)
}, 5000) //setting up the timeout after 5 seconds