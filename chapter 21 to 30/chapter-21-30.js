// Chapter 21  changing case  ________________________________________________

var str = "hello world";
var upperStr = str.toUpperCase();
var lowerStr = str.toLowerCase();
console.log("Original String: " + str);
console.log("Uppercase String: " + upperStr);
console.log("Lowercase String: " + lowerStr);

// Chapter 22  Measuring length and extracting parts  ________________________________________________

// Measuring length and extracting parts of a string

// 1. Measuring the length of a string
var text = "Hello, World!";
var lengthOfText = text.length;
console.log("Length of the text:", lengthOfText); // Output: Length of the text: 13

// 2. Extracting parts of the string using slice()
var firstFiveChars = text.slice(0, 5);
console.log("First 5 characters:", firstFiveChars); // Output: First 5 characters: Hello

// 3. Extracting parts of the string using substring()
var lastSixChars = text.substring(text.length - 6);
console.log("Last 6 characters:", lastSixChars); // Output: Last 6 characters: World!

// 4. Extracting a middle portion
var middlePart = text.slice(7, 12);
console.log("Middle part (7 to 12):", middlePart); // Output: Middle part (7 to 12): World

// Chapter 23 Finding segments  ________________________________________________

// Example 1: Using indexOf() to find the first occurrence of a segment
var text = "Hello, hello, world!";
var firstHello = text.indexOf("hello");
console.log("First 'hello' starts at index:", firstHello); // Output: First 'hello' starts at index: 0 (case-sensitive)

// Example 2: Using indexOf() with a starting position
var secondHello = text.indexOf("hello", 5); // Start looking after index 4
console.log("Second 'hello' starts at index:", secondHello); // Output: Second 'hello' starts at index: 7

// Example 3: Using lastIndexOf() to find the last occurrence
var lastHello = text.lastIndexOf("hello");
console.log("Last 'hello' starts at index:", lastHello); // Output: Last 'hello' starts at index: 7

// Example 4: Checking if a segment exists
var hasWorld = text.indexOf("world") !== -1;
console.log("Does 'world' exist?", hasWorld); // Output: Does 'world' exist? true

// Chapter 24 Finding a character at a location ________________________________________________

// Example 1: Using charAt() to find a character at a specific index
var text = "Hello, World!";
var charAtIndex3 = text.charAt(3);
console.log("Character at index 3:", charAtIndex3); // Output: Character at index 3: l

// Example 2: Using square bracket notation to find a character
var charAtIndex5 = text[5];
console.log("Character at index 5:", charAtIndex5); // Output: Character at index 5: ,

// Example 3: Finding the first character
var firstChar = text.charAt(0);
console.log("First character:", firstChar); // Output: First character: H

// Example 4: Finding the last character
var lastChar = text.charAt(text.length - 1);
console.log("Last character:", lastChar); // Output: Last character: !

// Example 5: Handling out-of-bounds index
var invalidChar = text.charAt(15); // Index beyond length (13)
console.log("Character at index 15:", invalidChar); // Output: Character at index 15: "" (empty string)

// Chapter 25 Replacing characters  ________________________________________________

// Example 1: Using replace() to replace the first occurrence
var text = "Hello, World!";
var newText1 = text.replace("o", "0");
console.log("Replace first 'o' with '0':", newText1); // Output: Replace first 'o' with '0': Hell0, World!

// Example 2: Using replaceAll() for all occurrences
var text4 = "Hello, hello, world!";
var newText4 = text4.replaceAll("hello", "hi");
console.log("Replace all 'hello' with 'hi':", newText4); // Output: Replace all 'hello' with 'hi': hi, hi, world!

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
