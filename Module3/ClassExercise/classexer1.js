// Function Declaration
function preparingPizza() {
        setTimeout(() =>{
            console.log("Started preparing pizza ...")
        }, 1000)
    }

  // Function Expression
  const makeBase = function() {
        setTimeout(() =>{
            console.log("Made the base")
        }, 2000)
    }
  
  // Arrow Function
  const addSauceAndCheese = () => {
        setTimeout(() =>{
            console.log("Added the sauce and cheese")
        }, 3000)
    }
  

  const addToppings = () => {
        setTimeout(() =>{
            console.log("Added the pizza toppings")
        }, 4000)
    }
  
  function cookPizza() {
        setTimeout(() =>{
            console.log("Cooked the pizza")
        }, 5000)
    }

  const pizzaReady = function() {
        setTimeout(() =>{
            console.log("Pizza is ready")
        }, 6000)
    }

preparingPizza()
makeBase()
addSauceAndCheese()
addToppings()
cookPizza()
pizzaReady()
  