const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

//a) Print the total number of minutes that have passed so far today
console.log(today.getMinutes() + ' minutes that have passed so far today')

//b) Print the total number of seconds that have passed so far today
console.log(today.getSeconds() + ' seconds that have passed so far today')

//c) Calculate and print your age as: 'I am x years, y months and z days old'
function Age(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
  
    if (months < 0) {
      years--;
      months += 12;
    }
    
    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
      days += lastMonth.getDate();
    }
    
    console.log(`I am ${years} years, ${months} months, and ${days} days old.`);
}

Age('1998-12-01')

//d) Write a function daysInBetween(date1, date2)
function daysInBetween(date1, date2) {
  const oneDayInMilliseconds = 1000 * 60 * 60 * 24
  const timeDifference = Math.abs(date2 - date1)
  return Math.floor(timeDifference / oneDayInMilliseconds)
} 

const date1 = new Date('1998-12-01')
const date2 = new Date('1998-02-07')
console.log(`There are ${daysInBetween(date1, date2)} days in between.`)