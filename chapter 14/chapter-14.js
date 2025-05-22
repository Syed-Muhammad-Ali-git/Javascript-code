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

// program 2

var UserInput = prompt("Enter the skill");

var skills = ["html", "css", "bootstrap", "javascript", "react"];

var PersonDeatailed = ["basit", "20", "male", "smit", skills];

if (
  UserInput == PersonDeatailed[4][0] ||
  UserInput == PersonDeatailed[4][1] ||
  UserInput == PersonDeatailed[4][2] ||
  UserInput == PersonDeatailed[4][3] ||
  UserInput == PersonDeatailed[4][4]
) {
  console.log("skill available");
} else {
  console.log("skill not available");
}