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

