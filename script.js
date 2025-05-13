
// ______________________________________8-08-2025 starts___________________________________

// chapter 01 = Alerts ____________

// program 1
// 1. Write a script to greet your website visitor using JS alert box.
alert("Welcome to script.js!");

// program 2
// 2. Write a script to display following message on your web page:
//  Hello... I can run JS through my web browser's console
alert("Error ! Please Enter a valid password");

// program 3
// 3. Write a script to display following message on your web page: (Hint : Use line break)
alert("Welcome to JS Land \n Happy Coding!");

// program 4
// 4. Write a script to display following messages in sequence:
alert("Welcome to JS Land...");
alert("Happy Coding!");

// program 5
// 5. Generate the following message through browser’s developer console:
alert("Hello... I can run JS through my web browser's console");
console.log("Hello... I can run JS through my web browser's console");

// program 7
// Variable, Strings & Numbers


// 1. Declare a variable called username
var username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
var muName = "Syed Muhammad Ali";

// 3. Write a script to
// a. declare a JS variable, titled message
// b. assign “Hello World” to the variable message
// c. display the message in alert box

// chapter 2 = variable for strings____________


var message = "Hello World";
alert(message);


//  chapter 3 = variable for numbers ____________

var age = 19;
console.log(age);


// 4. Write a script to save student’s bio data in JS variables and
// show the data in console (Name, Age, Institute, Course)

// two methods for student information
// 1st method
var name = "Syed Muhammad Ali";
var Age = 19;
var Institute = "S.M.I.T (Saylani Mass IT Training Institute)";
var Course = "Web Development";

console.log(
  "Name: " + name,
  "\n" + "Age: " + Age,
  "\n" + "Institute: " + Institute,
  "\n" + "Course: " + Course
);

// 2nd method

var name = "Syed Muhammad Ali";
var Age = 19;
var Institute = "S.M.I.T (Saylani Mass IT Training Institute)";
var Course = "Web Development";

var studentInformation = {
  name: name,
  Age: Age,
  Institute: Institute,
  Course: Course,
};
console.log(studentInformation);

// age

var age = 19;
console.log("I am " + age + " Years Old.");

// Declare a variable called birthYear & assign to it your birth year.
// Show the following message in your browser

var birthYear = 2006;
document.write(
  "My birth year is " +
  birthYear +
  "<br />" +
  "Data type of my declared variable is " +
  typeof birthYear
);

console.log(
  "My birth year is " +
  birthYear +
  "\n" +
  "Data type of my declared variable is " +
  typeof birthYear
);

// 5. Write a script to display the following console using one JS variable:

var pizza = " pizza" + "\n pizz" + "\n piz" + "\n pi" + "\n p";
console.log(pizza);

// 6. Fortune Teller: Store the following into variables: number of
// children, partner’s name, geographic location, and job title.

fortuneTeller = {
  numberOfChildren: 2,
  partnersName: "ABC",
  geographicLocation: "US",
  jobTitle: "Software Developer",
};
console.log(
  "You will be " +
  fortuneTeller.jobTitle +
  " in " +
  fortuneTeller.geographicLocation +
  " and married to " +
  fortuneTeller.partnersName +
  " with " +
  fortuneTeller.numberOfChildren +
  " kids."
);

// 7. Declare a variable called email & assign to it a string that represents your Email Address (e.g. abc@xyz.com).
// Show the below mentioned message in an alert box and console.
// (Hint: use string concatenation)

var email = "syeadmuhammedalimazhar@gmail.com";
console.log("My email address is " + email);
alert("My email address is " + email);

// 8. Declare a variable called book & give it the value “A smarter
// way to learn JavaScript”. Display the following message in an alert box:

var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

// ________________________________________8-05-2025 ends_______________________________________


// _______________________________10-05-2025 starts_______________________________________________

// chapter 05 = Familiar operators _______________

// alerts are automatically add and subtract
// program 1   

alert(2 + 2);
alert(4 - 2);

// program 2
var num = 10;
var anotherNum = 1;
var popularNumber = num + anotherNum;
console.log(popularNumber); //11


// chapter 06 = Unfamiliar operators _______________

// program 1
// num = 2
// pre increment ++num  (++num = 3) ya direct + karaga 
// post increment num++  (num++ = 2, num = 3)  ya next call ma + karaga


var num1 = 10;
var result1 = num1 + num1++ + ++num1;
//  result1 = 10 + 10 + 12 = 32
console.log(result1); // 32


var num2 = 10;
var result2 = num2 + ++num2 + num1++;
//  result2 = 10 + 11 + 11 = 32
console.log(result1); // 32


// program 2
// num = 2
// pre decrement --num  (--num = 1) ya direct - karaga 
// post decrement num-- (num-- = 2, num = 1)  ya next call ma - karaga

var num1 = 2;
var result1 = num1 + num1-- + --num1;
//  result1 = 2 + 2 + 0 = 4
console.log(result1); // 4


var num2 = 2;
var result2 = num2 + --num2 + num1--;
//  result2 = 10 + 11 + 11 = 32
console.log(result1); // 4


// program 3


var a = 5;
var b = a++ + ++a + a + --a + a--;
//  5 + 7 + 7 + 6 + 6
console.log(b); // 31

var x = 3;
var y = x++ + ++x + x-- + x + --x;
// 3 + 5 + 5 + 4 + 3
console.log(y); // 20


var c = 4;
var d = c++ + c++ + ++c + c;
// 4 + 5 + 7 + 7
console.log(d); // 23


var e = 5;
var f = e-- + ++e + e++ + --e + e;
// 5 + 5 + 5 + 5 + 5
console.log(f); // 25


var a = 3;
var b = ++a + a++ + a + --a + a-- + a;
// 4 + 4 + 5 + 4 + 4 + 3
console.log(b); // 24



// chapter 07 = Eliminating ambiguity _______________

var totalCost = 1 + 3 * 4;
console.log(totalCost); // 13

var result = 10 - 4 + 2;
console.log(result); // 8

var result = 18 / 3 + 2;
console.log(result); // 8


// ________________________________________10-05-2025 ends_______________________________________________


// ________________________________________11-05-2025 ends_______________________________________________



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


// chapter 09 = Prompt ___________________

// Prompt code is like alert code but in prompt code we can take input from the user because prompt give a  message and input box in web page but alert only show a message


// in this promt prompt("Your species?", "human"); you species is the message and human show in the input box 
// but if the user

// program 1

var spec = prompt("Your species?", "human");
console.log(spec);

// we also use this type of prompt in web page 

// program 2

var result1 = prompt("7 + 3");

if (result1 == 10) {
  alert("Correct!");
}

// program 3

var name6 = prompt("what is your name?");
console.log(name6);
// you can also use console to print the value given by user in prompt input

// _____________________________________11-05-2025 ends______________________________________________

// _____________________________________13-05-2025 starts____________________________________________


// chapter 10 = if statements ___________________

/* is ma hum if statements use karta hian jis ka structure kuch is tarah hota hai
 if (condition) {
 };
*/

// progrtam 1

var x = prompt("Where does the Fahad live?");

if (x === "karachi") {
  alert("Correct!");
};


// chapter 11 = comparison operators (==), (===) ___________________

/*

There are 8 major comparison operators in JavaScript:
1. == (equal to)      it only check the value like  ('abc' == 'abc') = true \ ( 2 == "2") = true \  it can not check the data type
2. === (strict equal to)  it can check the value and data type like ('abc' === 'abc') = true \ (2 === "2") = false
3. != (not equal to)  it only check the value like ('abc' != 'abc') = false \ (2 != "2") = false
4. !== (strict not equal to)  it can check the value and data type like ('abc' !== 'abc') = false \ (2 !== "2") = true
5. > (greater than)                        it can check the value like (2 > 1) = true \ (2 > 3) = false
6. < (less than)                           it can check the value like (2 < 1) = false \ (2 < 3) = true
7. >= (greater than or equal to)          it can check the value like (5 >= 5) = true \ (2 >= 3) = false
8. <= (less than or equal to)             it can check the value like (5 <= 5) = true \ (2 <= 3) = true

*/

// program 1  is ma !== ya use hoa hai

var yourTicketNumber = +prompt("Enter your ticket number");

if (yourTicketNumber !== 20) {
  alert("Better luck next time.");
}
else {
  alert("Congratulations! You have won a prize.");
};


// program 2  is ma != ya use hoa hai

var yourTicketNumber = prompt("Enter your ticket number");

if (yourTicketNumber != 20) {
  alert("Better luck next time.");
}
else {
  alert("Congratulations! You have won a prize.");
};

// program 3  is ma == ya use hoa hai

var yourTicketNumber = prompt("Enter your ticket number:");
if (yourTicketNumber == 20) {
  alert("Congratulations! You have won a prize.");
} else {
  alert("Better luck next time.");
};

// program 4  is ma === ya use hoa hai

var yourTicketNumber = +prompt("Enter your ticket number:");
if (yourTicketNumber === 20) {
  alert("Congratulations! You have won a prize.");
} else {
  alert("Better luck next time.");
};


/*
if (1 > 0)
  if (0 < 1)
    if (1 >= 0)

      if (1 >= 1)
        if (0 <= 1)
          if (1 <= 1)
*/


// chapter 12 = if else and else if statements ___________________


// program 1    even or odd 

var num = +prompt("Enter a number: To check Even or Odd");

if (num % 2 === 0) {
  console.log("Even");
}
else {
  console.log("Odd");
};

// program 2   prompt calculator

var num11 = +prompt("Enter First number: for calculate");
var num12 = +prompt("Enter Second number: for calculate");
var num13 = prompt("Enter operator (+, -, *, /, %):");

if (num13 == '+') {
  console.log(num11 + num12);
}
else if (num13 == '-') {
  console.log(num11 - num12);
}
else if (num13 == '*') {
  console.log(num11 * num12);
}
else if (num13 == '/') {
  console.log(num11 / num12);
}
else if (num13 == '%') {
  console.log(num11 % num12);
}
else {
  console.log("Your operator does not correct");
}



// _______________________________________13-05-2025 ends_____________________________________________