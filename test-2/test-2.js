// question 1
// 1. Declare and initialize a mixed array (Use all data types).

var arr1 = ["ali", 19, "true", "raheel", 37, "zain"];
console.log(arr1);

// question 2
// 2. Declare and Initialize an array and store available mobile networks in Pakistan.

var arr2 = ["zong", "jazz", "warid", "ufone"];
console.log(arr2);

// question 3
/*
3. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in browser console.
*/
var arr3 = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.PHIL", "Phd"];
console.log(arr3);

// question 4
/*
4. Declare and initialize an empty array to store top cartoons. Add
cartoon one by one in an array. Display the elements & length
of array in browser console.
*/

var arr4 = [""];
arr4.push("Avengers: Age of Ultron");
arr4.push("Spectre");
arr4.push("Jurassic World");
arr4.push("Inside Out");

console.log(arr4);
console.log("length of arr4 is: ", arr4.length);

// question 5
/*
5. Declare and Initialize an array with your favorite cars. Show
a. First index of the array
b. Car at first index of the array
c. Last index of the array
*/

var arr5cars = ["Audi", "Volvo", "Ford", "Lamborghini"];
console.log(arr5cars);
console.log("First index of the array: ", arr5cars.indexOf("Audi"));
console.log("Car at first index of array: ", arr5cars[0]);
console.log("Last index of the array: ", arr5cars.indexOf("Lamborghini"));
console.log("Car at last index of the array: ", arr5cars[3]);

// question 6
/*
6. Write a program to store 3 student names in an array. Take
another array to store score of these three students. Assume
that total marks are 500 for each student, display the scores &
percentages of students like:
d. Car at last index of the array
*/

var arr61 = ["Michael", "John", "Tony"];
var arr62 = [320, 230, 480];
var totalmarks = 500;

console.log(
  "Score of",
  arr61[0],
  "is",
  arr62[0],
  ". Percentage:",
  (arr62[0] * 100) / totalmarks,
  "%"
);

console.log(
  "Score of",
  arr61[1],
  "is",
  arr62[1],
  ". Percentage:",
  (arr62[1] * 100) / totalmarks,
  "%"
);

console.log(
  "Score of",
  arr61[2],
  "is",
  arr62[2],
  ". Percentage:",
  (arr62[2] * 100) / totalmarks,
  "%"
);

// question 7
/*
Initialize an array with color names. Display the array
elements in your browser.
Example: [‘blue’, ‘white’, ‘black’];
*/

var arr7 = [" blue ", " White ", " black "];
console.log(arr7);

// a
/*
a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.
*/

var arr7a = [" blue ", " White ", " black "];

var arr71 = prompt("What colour you wants to add to the begining?");
arr7a.unshift(arr71);
console.log(arr7a);

// b
/*
Ask the user what color he/she wants to add to the end &
add that color to the end of the array. Display the updated
array in your browser.
ARRAYS | JAVASCRIPT
*/

var arr7b = ["blue", "white", "black"];
var arr72 = prompt("What colour you wants to add to the end?");
arr7b.push(arr72);
console.log(arr7b);

// c
/*
Add two more color to the beginning of the array. Display
the updated array in your browser
*/

var arr7c = ["blue", "white", "black"];
arr7c.unshift("orange", "magenta");
console.log(arr7c);

// d
/*
 Delete the first color in the array. Display the updated
array in your browser.
*/

arr7c.shift();
console.log(arr7c);

// e
/*
 Delete the last color in the array. Display the updated
array in your browser.
*/

arr7c.pop();
console.log(arr7c);

// f
/*
Ask the user at which index he/she wants to add a color &
color name. Then add the color to desired position/index.
. Display the updated array in your browser.
*/

var f77 = ["blue", "white", "black"];
var f7a = +prompt("Enter the index number where you want to add a new colour:");
var f7b = prompt("Enter the colour you want to add:");
f77.splice(f7a, 0, f7b);
console.log(f77);

// g
/*
Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser.
*/

var f78 = ["blue", "white", "black"];
var index = +prompt("Enter the index number you want to delete:");
var count = prompt("How many colours you want to delete:");
f78.splice(index, count);
console.log(f78);

// question 10
// Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array

var cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];

var selectedCities = cities.slice(0, 3);

console.log("Cities:", cities);
console.log("Selected Cities:", selectedCities);

// question 12
/*  Create a new array. Store values one by one in such a way
that you can access the values in the order in which they were
stored. (FIFO-First In First Out)  */

var FIFO = [];
FIFO.push("keyboard");
FIFO.push("mouse");
FIFO.push("printer");
FIFO.push("monitor");
console.log(FIFO);

console.log(FIFO.shift());
console.log(FIFO.shift());
console.log(FIFO.shift());
console.log(FIFO.shift());

// question 13
/*
Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last In-First
Out)
*/

var LIFO = [];
LIFO.push("Keyboard");
LIFO.push("Mouse");
LIFO.push("CPU");
LIFO.push("Laptop");
console.log(LIFO);

console.log(LIFO.pop());
console.log(LIFO.pop());
console.log(LIFO.pop());
console.log(LIFO.pop());

// question 15
/*
15. How to access the first and last elements of the array:
Array could be of any size.
 Example:
var arr = [‘john’, ‘smith’, ‘andrew’, ‘ahmed’];
First element: john.
Last element: ahmed.
*/

var Names1 = [
  "Ali",
  "Ahmed",
  "Bilal",
  "Hassan",
  "Usman",
  "Omar",
  "Hamza",
  "Zaid",
  "Imran",
  "Kashif",
];
console.log("First Name: ", Names1[0]);

var lastName = Names1[Names1.length - 1];
console.log("Last Name: ", lastName);

// question 16
/*
16. You have an array, Set array length to 0.
Example:
var arr = [‘john’, ‘smith’, ‘andrew’, ‘ahmed’];
 console.log(arr.length) // Result: 0
*/

var arr = ["john", "smith", "andrew", "ahmed"];
arr.length = 0;
console.log(arr.length);

// question 17
/*
17. Make an array and ask for the user input and check if user
input is exist in the given array.
*/

var Names = ["Ali", "Ahmed", "Hamza", "Usman", "Bilal"];
var userInput = prompt("Enter Name");
if (Names.includes(userInput)) {
  console.log(userInput + " How Are You!");
} else {
  console.log("Not Found");
}

// question 18
/*
18. You have an array of animals add these two animals after 2
elements (Zebra, Dinosaur)
*/

var animals = ["Cat", "Dog", "Elephant", "Lion"];
animals.splice(3, 0, "Zebra", "Dinosaur");
console.log(animals);

// question 20
/*
20. You have an array of 10 elements, What is the index of the
last element.
*/
var arr20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Index of last element: ", arr20.length - 1);

// question 22
/*
22. Access 24 from multidimensional array:
var x = [
['Jack', 24],
['Sara', 23],
['Peter', 24]
];
Expected output: 24
*/
var x = [
  ["Jack", 24],
  ["Sara", 23],
  ["Peter", 24],
];
console.log(x[0][1]);
console.log(x[2][1]);
