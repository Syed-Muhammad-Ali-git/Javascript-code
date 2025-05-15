// chapter 07 = Eliminating ambiguity _______________

var totalCost = 1 + 3 * 4;
console.log(totalCost); // 13

var result = 10 - 4 + 2;
console.log(result); // 8

var result = 18 / 3 + 2;
console.log(result); // 8


// chapter 08 = Concatenation of strings _______________

// Using the plus operator, the code combines—concatenates—three elements into the
// message: the string "Thanks, " plus the string represented by the variable userName plus the string "!"

var userName1 = "Ali";
alert("Thanks, " + userName1 + "!");

// ...JavaScript automatically converts the numbers to strings, and displays the message "2
// plus 2 equals 22".

alert("2 plus 2 equals " + 2 + 2); // 22

// how to make a string to number example here like this we add a parenthesis brackets to define the javascript
// 2 + 2 = 4 this is a calculation or this is a "number" data type

alert("2 plus 2 equals " + (2 + 2)); // 4
