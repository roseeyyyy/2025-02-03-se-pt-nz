const animals = ['Tiger', 'Giraffe']

animals.push('Monkey', 'Snake') //adding 2 values at the end
animals.unshift('Elephant', 'Peacock') //adding 2 values at beginning
animals.sort() //to sort alphabetically

//d)
function replaceMiddleAnimal(newValue) {
    let mid = Math.floor(animals.length / 2);
    animals[mid] = newValue;
    console.log(animals);
}

replaceMiddleAnimal("Lion");

//e)
function findMatchingAnimals(beginsWith) {
    return animals.filter(animal => animal.toLowerCase().startsWith(beginsWith.toLowerCase()));
}
 
let result = findMatchingAnimals("M");
console.log(result);