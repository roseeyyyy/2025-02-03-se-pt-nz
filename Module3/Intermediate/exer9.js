let salaries = {
  "Timothy" : 35000,
  "David" : 25000,
  "Mary" : 55000,
  "Christina" : 75000,
  "James" : 43000
};

function sumSalaries(salaries) {
  return Object.values(salaries).reduce((total, salary) => total + salary, 0);
}

function topEarner(salaries) {
    let highestSalary = 0;
    let topEarnerName = '';
  
    for (let [name, salary] of Object.entries(salaries)) {
      if (salary > highestSalary) {
        highestSalary = salary;
        topEarnerName = name;
      }
    }
  
  return topEarnerName;
}


console.log(`Total salaries: $${sumSalaries(salaries)}`)
console.log(`Top earner: ${topEarner(salaries)}`)
