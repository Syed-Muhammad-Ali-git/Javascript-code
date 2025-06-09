// chapter 26 Rounding Numbers

// Rounding numbers to the nearest integer

// program 1

var num2 = 4.4;
var roundedNum2 = Math.round(num2);
console.log(num2); // 4.4
console.log(roundedNum2); // 4

// program 2

var num3 = 4.5;
var roundedNum3 = Math.round(num3);
console.log(num3); // 4.5
console.log(roundedNum3); // 5

//program 3

var num1 = 4.7;
var roundedNum1 = Math.round(num1);
console.log(num1); // 4.7
console.log(roundedNum1); // 5

// program 4

var roundedNum4 = Math.round(6.5);
console.log("Rounded number", roundedNum4);

// Square roots

var num5 = 16;
var squareRoot1 = Math.sqrt(num5);
console.log("Square root of", num5, "is", squareRoot1); // 4

// valu minus ma bhi hogi to plus ma show karaga ( Math.abs() )

console.log(Math.abs(-4)); // 4
console.log(Math.abs(4)); // 4

// ( Math.ceil() )  .ka baad jo bhi value ho wo direct +1 kar daga

console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.9)); // 5

// Math.floor()  .ka baad jo bhi value ho ya wohi value show karaga jo point sa pahle ho
// yaani ke point sa baad jo bhi value ho wo ignore kar dega

console.log(Math.floor(4.1)); // 4
console.log(Math.floor(4.9)); // 4

// (Random numbers)  ya random number render karaga likin is ki default value 0 sa 1 ka darmian hoti hai

var randomNum = Math.random();
console.log("Random number between 0 and 1:", randomNum);

// agar hama kisi array ma ya list ma max value yani sab sa bara number chahiye to hum Math.max() function ka istemal karte hain
console.log(10, 20, 80, 40, 50);
console.log("maximum value", Math.max(10, 20, 80, 40, 50));

// or agar hama array ya list ma sb sa chota number chahiye to hum Math.min() function ka istemal karte hain

console.log("minimum value", Math.min(10, 20, 80, 40, 50));

// apna array banakar usa random number ma rakh kar chala sakta hain har baar refresh karna sa name change hoga 

var names = ["Alice", "Bob", "Charlie", "David", "Eve"];
var randomIndex = Math.floor(Math.random() * names.length);
console.log("Random index:", names);
console.log("Random name:", names[randomIndex]);