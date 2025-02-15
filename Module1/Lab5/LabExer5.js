let Pizza = ["American", "Pineapple", "Margherita", "Periperi", "Italian"]
console.log (Pizza);

//Replacing the value of the element at position 1 and 4
Pizza[1] = "Chicken";
Pizza[4] = "Mushroom";
console.log(Pizza);

//adding a new element to the beginning of the array
Pizza.unshift("Original");
console.log(Pizza);

//Removing the element at the end of the array
let lastPizza = Pizza.pop();
console.log(lastPizza); 
console.log(Pizza);