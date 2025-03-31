let car = {
  make: "Porsche",
  model: "911",
  year: 1964,

  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};

let newcarYear = Object.assign({}, car)//creating new clone for the car object
newcarYear.year = 2025; //overriding the year
console.log(newcarYear) //output of the cloned car with new year
car.description(); //works
//setTimeout(car.description, 200); fails because the context of this method is missing
setTimeout(function(){
    car.description()
}, 200)

//d)
setTimeout(car.description.bind(car), 200);

//e)
let updateCar = Object.assign({}, car);
updateCar.make = "Mini Cooper"; 

setTimeout(car.description.bind(updateCar), 200); 



