function randomDelay() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 20) + 1
        const delayMs = delay * 1000
    
        setTimeout(() => {
          if (delay % 2 === 0) {
            resolve("Success! The delay was ${delay} seconds.")
          } else {
            reject("Failure! The delay was ${delay} seconds.")
          }
        }, delayMs)
      })
}

randomDelay()
  .then((message) => {
        console.log(message)
    })
  .catch((errorMessage) => {
        console.log(errorMessage)
    })
