// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

console.log(Number(numberOne) + Number(numberTwo))

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const sum = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);
const testSum = Number(anotherNumberOne) + Number(anotherNumberTwo);


console.log(sum.toPrecision(3));
console.log("Test sum " + testSum.toPrecision(3));


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const sumArray = [10, 45, 98];
const sum1 = one + two + three;
const avg = sum1/sumArray.length;
const formatAvg = avg.toFixed(5);

console.log(formatAvg);




// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"
const characterC = letters[2];

console.log(characterC)

// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const capitalizedFact = fact.replace("javascript", "Javascript");

console.log(capitalizedFact);



// --------------------------------------



