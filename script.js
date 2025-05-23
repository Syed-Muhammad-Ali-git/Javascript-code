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

// _______________________________________22-05-2025 ends_____________________________________________

/* chapter 15 arrays chapter  


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
