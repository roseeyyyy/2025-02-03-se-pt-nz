function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  
    this.canDrive = function() {
      return this.age >= 18; 
    }
}

class PersonClass{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.human = true;
    }

    canDrive() {
        return this.age >= 18; 
    }
}

let person1 = new Person("Rose", 26)
let person2 = new Person("JM", 26)
let person3 = new PersonClass("Scarlette", 6);

console.log(person1.name);
console.log(person1.age);  
console.log(person1.human);
console.log(person1.canDrive()); 
console.log(person2.name); 
console.log(person2.age);  
console.log(person2.human);
console.log(person2.canDrive());
console.log(person3.name);
console.log(person3.age);  
console.log(person3.human);
console.log(person3.canDrive()); 

