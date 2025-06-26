// Chapter 27 Generating Numbers  ________________________________________________

var randomNumber = Math.random();
console.log(randomNumber);

var improvedNum = randomNumber * 6;
console.log(improvedNum);

var numberOfStars = Math.ceil(improvedNum);
console.log(numberOfStars);

// Chapter 28 Converting strings to integers and decimals  _____________________________________

var currentAge = prompt("Enter your age.");
var qualifyingAge = parseInt(currentAge) + 1;

console.log("Current age you enter is :", currentAge);
console.log("Qualifying age is", qualifyingAge);

// Chapter 29 Converting strings to numbers, numbers to strings  _______________________________________

var numberAsNumber = 123;
console.log(numberAsNumber, typeof numberAsNumber);
var numberAsString = numberAsNumber.toString();
console.log(numberAsString, typeof numberAsString);

var integerString = "24";
console.log(integerString, typeof integerString);
var num = Number(integerString);
console.log(num, typeof num);

var numberAsNumber1 = 789;
console.log(numberAsNumber1, typeof numberAsNumber1);
var numberAsString1 = String(numberAsNumber1);
console.log(numberAsString1, typeof numberAsString1);

// Chapter 30 controlling the length of decimals  _____________________________________

var number1 = 3.14159;
console.log(number1, typeof number1);
var fixedNumber1 = number1.toFixed(2);
console.log("Number with 2 decimal places:", fixedNumber1);
console.log("Type of fixedNumber1:", typeof fixedNumber1);
