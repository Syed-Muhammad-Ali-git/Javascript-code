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
}

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
} else {
  alert("Congratulations! You have won a prize.");
}

// program 2  is ma != ya use hoa hai

var yourTicketNumber = prompt("Enter your ticket number");

if (yourTicketNumber != 20) {
  alert("Better luck next time.");
} else {
  alert("Congratulations! You have won a prize.");
}

// program 3  is ma == ya use hoa hai

var yourTicketNumber = prompt("Enter your ticket number:");
if (yourTicketNumber == 20) {
  alert("Congratulations! You have won a prize.");
} else {
  alert("Better luck next time.");
}

// program 4  is ma === ya use hoa hai

var yourTicketNumber = +prompt("Enter your ticket number:");
if (yourTicketNumber === 20) {
  alert("Congratulations! You have won a prize.");
} else {
  alert("Better luck next time.");
}

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
} else {
  console.log("Odd");
}

// program 2   prompt calculator

var num11 = +prompt("Enter First number: for calculate");
var num12 = +prompt("Enter Second number: for calculate");
var num13 = prompt("Enter operator (+, -, *, /, %):");

if (num13 == "+") {
  console.log(num11 + num12);
} else if (num13 == "-") {
  console.log(num11 - num12);
} else if (num13 == "*") {
  console.log(num11 * num12);
} else if (num13 == "/") {
  console.log(num11 / num12);
} else if (num13 == "%") {
  console.log(num11 % num12);
} else {
  console.log("Your operator does not correct");
}

// _______________________________________13-05-2025 ends_____________________________________________

// _______________________________________15-05-2025 starts___________________________________________

// chapter 13 = Testing sets of conditions ___________________

// && and and operator ____________ is ma sari conditions true honi chahiye tabhi ya chalaga

// program 1

var weight = +prompt("Enter your weight above 50:");
var time = +prompt("Enter your time in seconds less than 60:");

if (weight > 50 && time < 60) {
  alert("Come to our tryout!");
  console.log(weight);
  console.log(time);
} else {
  alert("Come to our cookout!");
}

var age = +prompt("Enter your age:");
var gender = prompt("Enter your gender");

if (age > 17 && gender == "male") {
  alert("Come to our tryout!");
  console.log(age);
  console.log(gender);
} else {
  alert("Come to our cookout!");
}

//    ||    or or operator __________ is  ma 1 condition bhi true hogi to ye chal jaiga

// program 2

var username = prompt("Enter your username:");
var email = prompt("Enter your email:");
var password = prompt("Enter your password:");

if (email == "abc@gmail.com" || password == "12345") {
  console.log(username, email, password);
  console.log("Proceed to login");
} else {
  console.log("Please enter your email and password");
}

//  cahpter 14 = Nested if statements ___________________

// program 1

var age = +prompt("Enter your age: if you are 18 or above");
// var ID = prompt("Do you have an ID? (yes/no)");

if (age >= 18) {
  console.log("Your age" + " " + age);

  var ID = prompt("Do you have an ID-Card? (yes/no)");

  console.log("Your Id" + " " + ID);

  if (ID == "yes") {
    console.log("You are allowed to enter");
    alert("You are allowed to enter");

    var email = prompt("Enter your email:");
    var password = prompt("Enter your password:");

    console.log(
      "You Email" + " " + email + "\n" + "Your password" + " " + password
    );

    if (email !== "") {
      if (password !== "") {
        console.log("Login successful!");
        alert("Login successful!");

        var marks = prompt("Enter your percenage:");

        console.log("Your percentage" + " " + marks);

        if (marks >= 85 && marks <= 100) {
          console.log("You Grade is A+1");
          alert("You Grade is A+1");
        } else if (marks >= 70 && marks <= 84) {
          console.log("You Grade is A");
          alert("You Grade is A");
        } else if (marks >= 60 && marks <= 69) {
          console.log("You Grade is B");
          alert("You Grade is B");
        } else if (marks >= 50 && marks <= 59) {
          console.log("You Grade is c");
          alert("You Grade is c");
        } else if (marks >= 40 && marks <= 49) {
          console.log("You Grade is D");
          alert("You Grade is D");
        } else if (marks >= 34 && marks <= 39) {
          console.log("You Grade is E");
          alert("You Grade is E");
        } else {
          console.log("You are failed");
        }
      } else {
        console.log("Incorrect password");
      }
    } else {
      console.log("Incorrect email");
    }
  } else {
    console.log("You need to show your ID");
  }
} else {
  console.log("You are too young to enter");
}

// _______________________________________15-05-2025 ends_____________________________________________

// _______________________________________17-05-2025 starts___________________________________________

// Test code

// question 1

var results = +prompt("Enter number to check divisible by 3");
console.log(results);

if (results % 3 === 0) {
  console.log("Number is Divisible by 3");
} else {
  console.log("Number is not divisible by 3");
}
// question 2

var result2 = prompt("Enter the Number to check even or odd");
console.log(result2);

if (result2 % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// question 3

var result3 = +prompt("Enter the age");
console.log(result3);

if (result3 > 18) {
  console.log("Old enough");
} else {
  console.log("Too young");
}

// question 4

var name1 = prompt("Enter Your Name");
if (name1 == "Ali") {
  console.log("Congrats! we have same Name");
} else {
  console.log("Sorry! we have different Name");
}

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
} else if (result4 == "-") {
  console.log(num1 - num2);
} else if (result4 == "*") {
  console.log(num1 * num2);
} else if (result4 == "/") {
  console.log(num1 / num2);
} else if (result4 == "%") {
  console.log(num1 % num2);
} else {
  console.log("There is a problem");
}

// question 8

var time = prompt("Enter the time in 24 hour format like 0100, 1200, 1300");
console.log(time);

if (time >= "0000" && time < "1200") {
  console.log("Good morning!");
} else if (time >= "1200" && time < "1700") {
  console.log("Good Afternoon!");
} else if (time >= "1700" && time < "2100") {
  console.log("Good evening!");
} else if (time >= "2100" && time < "2359") {
  console.log("Good night!");
} else {
  console.log("There was Error");
}

// question 9

var year = +prompt("Enter a year in YYYY format:");

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}

// question 10

var pass1 = "12345";
var pass2 = prompt("Enter the password");

if (pass2 == "") {
  console.log("please enter the password");
} else if (pass1 == pass2) {
  console.log(
    "Correct! The password you entered matches the original password"
  );
} else {
  console.log("Incorrect password");
}

// question 11

var firstName = "Ali";

if (firstName == "Fahad") {
  console.log("Hello Fahad");
} else {
  console.log("You are not Fahad");
}

// question 12

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// question 13

var number1 = prompt("Enter number 1");
var number2 = prompt("Enter number 2");
console.log("Number 1 = " + number1 + "\n" + "Number 2 = " + number2);

if (number1 > number2) {
  console.log(number1 + " is greater than " + number2);
} else if (number1 < number2) {
  console.log(number1 + " is less than " + number2);
} else if (number1 == number2) {
  console.log("Both " + number1 + " and " + number2 + " is equal ");
} else {
  console.log("There is a problem");
}

// question 14

var input = prompt("Enter number to check positive or negative");
console.log(input);

if (input > 0) {
  console.log("The Number you enter is Positive");
} else if (input < 0) {
  console.log("The Number you enter is negative");
} else if (input == 0) {
  console.log("The Number you enter is zero");
} else {
  console.log("There is a problem");
}

// question 15

var hour = +prompt(
  "Enter the hour in 24 hour format like  14 for 2pm , 15 for 3pm"
);
console.log(hour);

if (hour >= "6" && hour <= "9") {
  console.log("Break fast is served!");
} else if (hour >= "11" && hour <= "13") {
  console.log("Time for lunch!");
} else if (hour >= "17" && hour <= "20") {
  console.log("Time Dinner time!");
} else {
  console.log("This is not break fast, lunch or dinner timing");
}

// question 16

var numberType = prompt("Enter the number to check type");
console.log("The number you enterd is " + numberType);

console.log(typeof numberType);

// question 17

var program = prompt("Enter a single alphabet");
console.log(program);

if (
  program == "a" ||
  program == "e" ||
  program == "i" ||
  program == "o" ||
  program == "u"
) {
  console.log("It is a vowel");
} else {
  console.log("It is not a vowel");
}

// question 18

console.log(10 !== 8);

// question 19

var month = 8;

if (month == 1) {
  console.log("January");
} else if (month == 2) {
  console.log("February");
} else if (month == 3) {
  console.log("March");
} else if (month == 4) {
  console.log("April");
} else if (month == 5) {
  console.log("May");
} else if (month == 6) {
  console.log("June");
} else if (month == 7) {
  console.log("July");
} else if (month == 8) {
  console.log("August");
} else if (month == 9) {
  console.log("September");
} else if (month == 10) {
  console.log("October");
} else if (month == 11) {
  console.log("November");
} else if (month == 12) {
  console.log("December");
} else {
  alert("Invalid month");
}

// question 20

var age18 = +prompt("Enter your age");
console.log(age18);

if (age18 <= 18) {
  console.log("Too young");
} else if (age18 > 18) {
  console.log("Old enough");
} else {
  console.log("There is a problem");
}

// _______________________________________17-05-2025 ends_____________________________________________

// _______________________________________17-05-2025 starts___________________________________________

// Test - 1 __________________________________

// question 1

var results = +prompt("Enter number to check divisible by 3");
console.log(results);

if (results % 3 === 0) {
  console.log("Number is Divisible by 3");
} else {
  console.log("Number is not divisible by 3");
}
// question 2

var result2 = prompt("Enter the Number to check even or odd");
console.log(result2);

if (result2 % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// question 3

var result3 = +prompt("Enter the age");
console.log(result3);

if (result3 > 18) {
  console.log("Old enough");
} else {
  console.log("Too young");
}

// question 4

var name1 = prompt("Enter Your Name");
if (name1 == "Ali") {
  console.log("Congrats! we have same Name");
} else {
  console.log("Sorry! we have different Name");
}

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
} else if (result4 == "-") {
  console.log(num1 - num2);
} else if (result4 == "*") {
  console.log(num1 * num2);
} else if (result4 == "/") {
  console.log(num1 / num2);
} else if (result4 == "%") {
  console.log(num1 % num2);
} else {
  console.log("There is a problem");
}

// question 8

var time = prompt("Enter the time in 24 hour format like 0100, 1200, 1300");
console.log(time);

if (time >= "0000" && time < "1200") {
  console.log("Good morning!");
} else if (time >= "1200" && time < "1700") {
  console.log("Good Afternoon!");
} else if (time >= "1700" && time < "2100") {
  console.log("Good evening!");
} else if (time >= "2100" && time < "2359") {
  console.log("Good night!");
} else {
  console.log("There was Error");
}

// question 9

var year = +prompt("Enter a year in YYYY format:");

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}

// question 10

var pass1 = "12345";
var pass2 = prompt("Enter the password");

if (pass2 == "") {
  console.log("please enter the password");
} else if (pass1 == pass2) {
  console.log(
    "Correct! The password you entered matches the original password"
  );
} else {
  console.log("Incorrect password");
}

// question 11

var firstName = "Ali";

if (firstName == "Fahad") {
  console.log("Hello Fahad");
} else {
  console.log("You are not Fahad");
}

// question 12

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// question 13

var number1 = prompt("Enter number 1");
var number2 = prompt("Enter number 2");
console.log("Number 1 = " + number1 + "\n" + "Number 2 = " + number2);

if (number1 > number2) {
  console.log(number1 + " is greater than " + number2);
} else if (number1 < number2) {
  console.log(number1 + " is less than " + number2);
} else if (number1 == number2) {
  console.log("Both " + number1 + " and " + number2 + " is equal ");
} else {
  console.log("There is a problem");
}

// question 14

var input = prompt("Enter number to check positive or negative");
console.log(input);

if (input > 0) {
  console.log("The Number you enter is Positive");
} else if (input < 0) {
  console.log("The Number you enter is negative");
} else if (input == 0) {
  console.log("The Number you enter is zero");
} else {
  console.log("There is a problem");
}

// question 15

var hour = +prompt(
  "Enter the hour in 24 hour format like  14 for 2pm , 15 for 3pm"
);
console.log(hour);

if (hour >= "6" && hour <= "9") {
  console.log("Break fast is served!");
} else if (hour >= "11" && hour <= "13") {
  console.log("Time for lunch!");
} else if (hour >= "17" && hour <= "20") {
  console.log("Time Dinner time!");
} else {
  console.log("This is not break fast, lunch or dinner timing");
}

// question 16

var numberType = prompt("Enter the number to check type");
console.log("The number you enterd is " + numberType);

console.log(typeof numberType);

// question 17

var program = prompt("Enter a single alphabet");
console.log(program);

if (
  program == "a" ||
  program == "e" ||
  program == "i" ||
  program == "o" ||
  program == "u"
) {
  console.log("It is a vowel");
} else {
  console.log("It is not a vowel");
}

// question 18

console.log(10 !== 8);

// question 19

var month = 8;

if (month == 1) {
  console.log("January");
} else if (month == 2) {
  console.log("February");
} else if (month == 3) {
  console.log("March");
} else if (month == 4) {
  console.log("April");
} else if (month == 5) {
  console.log("May");
} else if (month == 6) {
  console.log("June");
} else if (month == 7) {
  console.log("July");
} else if (month == 8) {
  console.log("August");
} else if (month == 9) {
  console.log("September");
} else if (month == 10) {
  console.log("October");
} else if (month == 11) {
  console.log("November");
} else if (month == 12) {
  console.log("December");
} else {
  alert("Invalid month");
}

// question 20

var age18 = +prompt("Enter your age");
console.log(age18);

if (age18 <= 18) {
  console.log("Too young");
} else if (age18 > 18) {
  console.log("Old enough");
} else {
  console.log("There is a problem");
}

// _______________________________________17-05-2025 ends_____________________________________________

// _______________________________________22-05-2025 starts___________________________________________

/* chapter 15 arrays chapter  , 16 , 17


jahan par bhi [  ]  ya wala bracket hoga wo array hoga ya bracket use hota hai array ma 
array ka index number 0 sa start hota hai or length number 1 sa start hota hai 
*/

// program 1

var cities = [
  "Atlanta",
  "Baltimore",
  "Chicago",
  "Denver",
  "Atlanta",
  "Los Angeles",
  "Seattle",
  "Atlanta",
];
console.log(cities);

console.log(cities[0]);
console.log(cities[5]);

// Now we use built in functions for arrays

// .push use hota hai jo hum na array banaya hai us ka last ma data add karna hoto hum .push use karta
// hain ya direct data ko last ma add karta hai

cities.push("karachi");
cities.push("hyderabad");

// .unshift data ko start ma add karna ka lia use hota hai

cities.unshift("islamabad");
cities.unshift("peshawar");

// .pop last wala data ko delete karna ka lia use hota hai

cities.pop();

// .shift start wala data ko delete karna ka lia use hota hai

cities.shift();

// program 2

// .index of sa us data ka number maloom kia jasakta hai jo hum na likha hai , or agar hum na same name multiple dafa likha hai to ya sab sa pahla jo name likha hai us ka index number bataiga

var checkIndexof1 = cities.indexOf("Atlanta");
console.log("check Index of Atlanta", checkIndexof1);

// agar hum na array ma same data jaisa koi name multiple baar likha hai to ya sabsa last wala name ka index number batayega

var checkIndexof2 = cities.lastIndexOf("Atlanta");
console.log("check last Index of Atlanta", checkIndexof2);

// program 3 ( splice )

var arr = ["a", "b", "c", "d", "e", "f", "g", "h"];

// splice ma jo value di jati hai wo array ka index number wali value hoti hai yani 0 sa start hoti hai agar splice ma 1 value di jarahi hai iska matalb hai is value sa start karna hai picha ki values nhi aingi or agar 2 value di jarahi hain to pahli ka matlab hai is value sa start hoga or dosri value par khatam hoga value matlab index number or agar 3 values hai to ya bataiga 1 value sa start karo dosri value ko delete karo or uski jagah teesri (3rd) value ko put kardo or is ma original array change hojaiga jo splice hoga

var array1 = arr.splice(2, 1, "abc");

console.log(array1);
console.log(arr);

// program 4  ( slice )

//slice ma original array change nhi hota or is ma 2 points dia 1st starting point or 2nd ending point

var arr1 = [1, 2, 3, 4, 5, 6, 7];

var array2 = arr1.slice(1, 4);

console.log(array2);
console.log(arr1);

// program 5 ( concat )

var variable1 = ["abc", "xyz"];
var variable2 = ["def", "uvw"];

console.log(variable1);
console.log(variable2);

console.log(variable1.concat(variable2));

// _______________________________________22-05-2025 ends_____________________________________________

// _______________________________________26-05-2025 starts___________________________________________

// Test - 2________________________

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

// _______________________________________26-05-2025 ends_____________________________________________

// _______________________________________26-05-2025 starts___________________________________________

// chapter 20

var arr = ["cake", "chips", "watermelon", "apple", "banana"];
var userInput = prompt("What you want to eat?");

// program 1     if else condition

if (arr.indexOf(userInput) != -1) {
  console.log(
    userInput + " available in our bakery at index " + arr.indexOf(userInput)
  );
} else {
  console.log(userInput + " is not available in our bakery");
}

var checkIndex = arr.indexOf(userInput);
console.log(checkIndex);

// program 2     for loop

for (var i = 0; i < arr.length; i++) {
  if (userInput == arr[i]) {
    console.log(userInput + " is available in our bakery");
    break;
  } else {
    console.log(userInput + " is not available in our bakery");
  }
  // console.log(arr[i]);
}

// program 3     reverse loop

for (var i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

// program 4

for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= 4; j++) {
    console.log("i * j ->", i * j);

    for (var k = 1; k <= 3; k++) {
      console.log("i * j * k ->", i * j * k);
    }
  }
}

// program 5

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
  for (var j = 0; j < lastNames.length; j++) {
    fullNames.push(firstNames[i] + lastNames[j]);
  }
}
console.log(fullNames);

// _______________________________________26-05-2025 ends_____________________________________________

// _______________________________________30-05-2025 starts___________________________________________

// Test -3 code

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

// _______________________________________30-05-2025 ends_____________________________________________
