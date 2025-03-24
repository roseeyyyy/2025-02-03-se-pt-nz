function unique(duplicatesArray) {
    return [...new Set(duplicatesArray)]; 
}
  
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
console.log(unique(colours)); 
console.log(unique(testScores)); 
  
const milkshakes = ['chocolate', 'strawberry', 'caramel', 'chocolate', 'banana', 'strawberry'];
console.log(unique(milkshakes)); 