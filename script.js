// 1. Solving problems using array functions on the rest countries' data.

//a. Get all the countries from the Asia continent / region using the Filter function
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function () {
var result = JSON.parse(request.response);//result is json object
var asia = result.filter((ele) => ele.region === "Asia").map((ele) => ele.name);
console.log(asia);
// b. Get all the countries with a population of less than 2 lakhs using Filter function
var pop = result.filter((ele1) => ele1.population < 200000);
console.log(pop);
//c. Print the following details name, capital, flag using forEach function
var det = result.forEach((ele2) => console.log(`Country name:${ele2.name}
Capital: ${ele2.capital}
Flag: ${ele2.flag}`));
//  e.Print the total population of countries using reduce function
var red = result.reduce((acc, cv) => acc + cv.population, 0);
console.log(red);
// f. Print the country which uses US Dollars as currency.
var usd = result.filter((ele) => ele.currencies === "USD" ).map((ele)=> ele.name);
console.log(usd);
};

