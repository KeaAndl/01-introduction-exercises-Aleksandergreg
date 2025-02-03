// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif
console.log(`My first name is ${firstName} and my last name is ${lastName}`);


// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2024";
const increment = 1;

// Add the year plus the increment
// The result should be 2025
// You cannot touch the first or the second line
//could also use c


//If year = "2342dbc" will return  NaN
console.log(Number(year) + increment);

//Parses the string and stops at first non-numeric char eg. year = "2324dbc" it will extract 2324
console.log(parseInt(year) + increment);

//Same as Number(year), just a different way to write it
console.log(+year + increment);



// --------------------------------------
