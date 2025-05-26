// question 1

var results = +prompt("Enter number to check divisible by 3");
console.log(results);

if (results % 3 === 0) {
    console.log("Number is Divisible by 3");
}
else {
    console.log("Number is not divisible by 3")
}
// question 2

var result2 = prompt("Enter the Number to check even or odd");
console.log(result2);

if (result2 % 2 === 0) {
    console.log("Even");
}
else {
    console.log("Odd");
};

// question 3

var result3 = +prompt("Enter the age");
console.log(result3);

if (result3 > 18) {
    console.log("Old enough");
}
else {
    console.log("Too young");
}

// question 4

var name1 = prompt("Enter Your Name");
if (name1 == "Ali") {
    console.log("Congrats! we have same Name");
}
else {
    console.log("Sorry! we have different Name");
};

// question 5

var result1 = +prompt("Enter Number to check divisible by 3");
console.log(result1);
if (result1 % 3 == 0) {
    console.log("Number is Divisible by 3");
} else {

}
console.log("Number is not divisible by 3");

// question 7

var num1 = +prompt("Entr er number 1 to calculate");
var result4 = prompt("Enter operator +, -, *, /, %");
var num2 = +prompt("Entenumber 2 to calculate");
console.log(num1, result4, num2, "=");


if (result4 == "+") {
    console.log(num1 + num2);
}
else if (result4 == "-") {
    console.log(num1 - num2);
}
else if (result4 == "*") {
    console.log(num1 * num2);
}
else if (result4 == "/") {
    console.log(num1 / num2);
}
else if (result4 == "%") {
    console.log(num1 % num2);
}
else {
    console.log("There is a problem");
}

// question 8

var time = prompt("Enter the time in 24 hour format like 0100, 1200, 1300");
console.log(time);

if (time >= "0000" && time < "1200") {
    console.log("Good morning!");
}
else if (time >= "1200" && time < "1700") {
    console.log("Good Afternoon!");
}
else if (time >= "1700" && time < "2100") {
    console.log("Good evening!");

}
else if (time >= "2100" && time < "2359") {
    console.log("Good night!");
}
else {
    console.log("There was Error");
};

// question 9

var year = +prompt("Enter a year in YYYY format:");

if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
};

// question 10

var pass1 = "12345";
var pass2 = prompt("Enter the password");

if (pass2 == "") {
    console.log("please enter the password");
}
else if (pass1 == pass2) {
    console.log("Correct! The password you entered matches the original password");
}
else {
    console.log("Incorrect password");
};

// question 11

var firstName = "Ali";

if (firstName == "Fahad") {
    console.log("Hello Fahad");
}
else {
    console.log("You are not Fahad");
};

// question 12

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
};

// question 13

var number1 = prompt("Enter number 1");
var number2 = prompt("Enter number 2");
console.log("Number 1 = " + number1 + "\n" + "Number 2 = " + number2);

if (number1 > number2) {
    console.log(number1 + " is greater than " + number2);
}
else if (number1 < number2) {
    console.log(number1 + " is less than " + number2);
}
else if (number1 == number2) {
    console.log("Both " + number1 + " and " + number2 + " is equal ");
}
else {
    console.log("There is a problem");
};

// question 14

var input = prompt("Enter number to check positive or negative");
console.log(input);

if (input > 0) {
    console.log("The Number you enter is Positive");
}
else if (input < 0) {
    console.log("The Number you enter is negative");
}
else if (input == 0) {
    console.log("The Number you enter is zero");
}
else {
    console.log("There is a problem");
};

// question 15

var hour = +prompt("Enter the hour in 24 hour format like  14 for 2pm , 15 for 3pm");
console.log(hour);

if (hour >= "6" && hour <= "9") {
    console.log("Break fast is served!");
}
else if (hour >= "11" && hour <= "13") {
    console.log("Time for lunch!");
}
else if (hour >= "17" && hour <= "20") {
    console.log("Time Dinner time!");
}
else {
    console.log("This is not break fast, lunch or dinner timing");
};

// question 16

var numberType = prompt("Enter the number to check type");
console.log("The number you enterd is " + numberType);

console.log(typeof numberType);

// question 17

var program = prompt("Enter a single alphabet");
console.log(program);

if (program == "a" || program == "e" || program == "i" || program == "o" || program == "u") {
    console.log("It is a vowel");
}
else {
    console.log("It is not a vowel");
};

// question 18

console.log(10 !== 8);

// question 19

var month = 8;

if (month == 1) {
    console.log("January");
}
else if (month == 2) {
    console.log("February");
}
else if (month == 3) {
    console.log("March");
}
else if (month == 4) {
    console.log("April");
}
else if (month == 5) {
    console.log("May");
}
else if (month == 6) {
    console.log("June");
}
else if (month == 7) {
    console.log("July");
}
else if (month == 8) {
    console.log("August");
}
else if (month == 9) {
    console.log("September");
}
else if (month == 10) {
    console.log("October");
}
else if (month == 11) {
    console.log("November");
}
else if (month == 12) {
    console.log("December");
}
else {
    alert("Invalid month");
};

// question 20

var age18 = +prompt("Enter your age");
console.log(age18);

if (age18 <= 18) {
    console.log("Too young");
}
else if (age18 > 18) {
    console.log("Old enough");
}
else {
    console.log("There is a problem");
}