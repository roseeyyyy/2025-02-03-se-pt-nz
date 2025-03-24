function printCityDesc(city) {
    for (let key in city) {
        console.log(`${key}: ${city[key]}`);
    }
}

const sydney = {
  name: 'Sydney',
  population: 5_121_000,
  state: 'NSW',
  founded: '26 January 1788',
  timezone: 'Australia/Sydney'
};

const newzealand = {
  name: "New Zealand",
  population: 5_241_297,
  state: "CHC",
  founded: "13 December 1642",
  timezone:  "NZDT Wellington (GMT+13)"
}
  
printCityDesc(sydney);
printCityDesc(newzealand);
  