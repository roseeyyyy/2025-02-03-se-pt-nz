//Function expression
const getGreeting1 = function(name) {
    return 'Hello ' + name + '!';
};
  
//Arrow Function
const getGreeting2 = (name) => {
    return 'Hello ' + name + '!';
};
  

console.log(getGreeting1('Rose'))
console.log(getGreeting2('Rose'))