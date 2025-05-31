// question 1   Write a program to display the message “Hello World” 5 times
// in your browser using for loop.

var arr1 = ["Hello world"];
for (var i = 0; i < 5; i++) {
  console.log(arr1);
}

// question 2   Write a program to print numeric counting from 1 to 10.

for (var i = 1; i < 10; i++) {
  console.log(i);
}

// question 3   Write a program to print multiplication table of any number
// using for loop. Table number & length should be taken as an
// input from user

var tableNumber = +prompt("Enter the number for the multiplication table:");
var tableLength = +prompt("Enter the length of the table:");

for (var i = 1; i <= tableLength; i++) {
  console.log(tableNumber + " x " + i + " = " + tableNumber * i);
}

// question 4
/*
You have an array
A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
Write each element on new line with the help of for loop.
*/

var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
for (var m = 0; m < A.length - 1; m++) {
  console.log(A[m]);
}

// question 5
/*
Write a program to print items of the following array using for
loop:
fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
*/

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length - 1; i++) {
  console.log(fruits[i]);
}
for (var i = 0; i < fruits.length - 1; i++) {
  console.log(
    "Element at index " + fruits.indexOf(fruits[i]) + " is " + fruits[i]
  );
}

// question 7
/*
7. Generate the following series in your browser. See example
output.
*/

// a    a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

for (var i = 1; i <= 15; i++) {
  console.log(i);
}

// b   b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

for (var l = 10; l >= 1; l--) {
  console.log(l);
}

// c , d  even or odd
/*
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
*/
for (var m = 2; m <= 20; m++) {
  console.log(m);
  if (m % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

// e    e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

for (var m = 2; m <= 20; m++) {
  console.log(m + "k");
}

// question 8
/*
You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an array.
After searching, prompt the user whether the given item is
found in the list or not. Example:
*/

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput2 = prompt("Welcome to Bakery. What do you want to order?");

if (A.indexOf(userInput2) !== -1) {
  console.log(userInput2 + " is available at index " + A.indexOf(userInput2));
} else {
  console.log(
    "We are sorry. " + userInput2 + " is not available in our bakery."
  );
}

// 9. Write a program to identify the largest number in the given array.

var c = [24, 53, 78, 91, 12];
var largest = c[0];
for (var n = 0; n < c.length; n++) {
  if (c[n] > largest) {
    largest = c[n];
  }
}
console.log("Array items: " + c);
console.log("The largest number is " + largest);

// question 10   Write a program to identify the smallest number in the given array.

var d = [24, 53, 78, 91, 12];
var smallest = d[0];
for (var n = 0; n < d.length; n++) {
  if (d[n] < smallest) {
    smallest = d[n];
  }
}
console.log("Array items: " + d);
console.log("The smallest number is " + smallest);

//  question 11. Write a program to identify the largest & the smallest
// number in the given array.

var e = [24, 53, 78, 91, 12];
var largest = e[0];
for (var n = 0; n < e.length; n++) {
  if (c[n] > largest) {
    largest = e[n];
  }
}
console.log("Array items: " + e);
console.log("The largest number is " + largest);

var smallest = e[0];
for (var n = 0; n < e.length; n++) {
  if (d[n] < smallest) {
    smallest = e[n];
  }
}
console.log("Array items: " + e);
console.log("The smallest number is " + smallest);

// 12. Write a program to print multiples of 5 ranging 1 to 100

for (var p = 1; p <= 100; p++) {
  if (p % 5 === 0) {
    console.log(p);
  }
}

// question 13 Write a program to generate the following HTML table in your browser using JS.

var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];

document.write(
  "<table border = 1px>" +
    "<tr>" +
    "<th>" +
    "Students" +
    "</th>" +
    "<th>" +
    "Scores" +
    "</th>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    students[0] +
    "</th>" +
    "<th>" +
    scores[0] +
    "</th>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    students[1] +
    "</th>" +
    "<th>" +
    scores[1] +
    "</th>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    students[2] +
    "</th>" +
    "<th>" +
    scores[2] +
    "</th>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    students[3] +
    "</th>" +
    "<th>" +
    scores[3] +
    "</th>" +
    "</tr>" +
    "</table>"
);

// question 14
/*
Write a program that prints number from start of the array to desired stop value. Given array:
(Hint: take stop value from user)
E.g. if user gives 3 as input value print 12, 45, 3
if user gives 34 as input value print 12, 45, 3, 22, 34
*/

var scores1 = [12, 45, 3, 22, 34, 50];
var stopValue = +prompt("Enter a stop value:  12, 45, 3, 22, 34, 50");
console.log("score1 list ", scores1 + "\n" + "Stop value is: ", stopValue);

for (var u = 0; u < scores1.length; u++) {
  if (scores1[u] === stopValue) {
    console.log("Found stop value: " + scores1[u]);
    console.log("Index of stop value is " + scores1.indexOf(stopValue));
    break;
  }
}

// question 15
/*
You have an array
Write each element on new line with the help of nested for
loops.
*/

var A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (var w = 0; w < 1; w++) {
  console.log(A[0]);
  for (var v = 0; v < 1; v++) {
    console.log(A[1]);
    for (var y = 0; y < 1; y++) {
      console.log(A[2]);
    }
  }
}

// question 16

var num3 = +prompt("Enter a number to decrease it 0.5 :");

for (var i = num3; i >= 0; i -= 0.5) {
  console.log(i);
}

// question 17
/*
The even/odd reporter
Write a for loop that will iterate from 0 to 20. For each
iteration, it will check if the current number is even or odd, and
report that to the screen (e.g. "2 is even").
*/

var num4 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

for (var i = 0; i < num4.length; i++) {
  if (num4[i] % 2 === 0) {
    console.log(num4[i] + " is even");
  } else {
    console.log(num4[i] + " is odd");
  }
}

// question 18

// Write a program to calculate the product of the odd integers from 1 to 7.

var product = 1;

for (var i = 1; i <= 7; i += 2) {
  product *= i; // Same as: product = product * i;
}

console.log("Product of odd numbers from 1 to 7 is: " + product);

// question 19
/*
Write a program that will write out a wedge of stars. The user
will enter the initial number of stars, and the program will write
out lines of stars where each line has one few star than the
previous line. Initial number of stars: 7
*/

var stars = 5;

for (var i = stars; i >= 1; i--) {
  var line = "";
  for (var j = 1; j <= i; j++) {
    line += "*";
  }
  document.write(line + "<br>");
}

// question 20
// Write a program to print the following pattern in your browser using for loop.
document.write("<h1>Question 20</h1>");

var rows = 5;
var cols = 5;

for (var i = 1; i <= rows; i++) {
  var line = "";
  for (var j = 1; j <= cols; j++) {
    line += "*";
  }
  document.write(line + "<br>");
}

var pattern = "*";

for (var i = 1; i <= 5; i++) {}

for (var i = 1; i <= 5; i++) {
  document.write(pattern, "<br>");
  pattern = pattern + "*";
}

var lines = 5;

for (var i = lines; i >= 1; i--) {
  var line = "";
  for (var j = 1; j <= i; j++) {
    line += "*";
  }
  document.write(line + "<br>");
}
