let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = [...teamSports];
let dog1 = 'Bingo';
let dog2 = dog1;
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = {...cat1};

dog2 = "Brix"
cat2.name = "Luna"
moreSports.push("Rugby")
moreSports.unshift("Basketball")

//console.log(moreSports);
console.log(teamSports); //changed because moreSports has the same array as teamSports
console.log(dog1); //didn't changed because strings are copied by value
//console.log(dog2);
console.log(cat1); //changed because objects are referenced by reference
//console.log(cat2);
