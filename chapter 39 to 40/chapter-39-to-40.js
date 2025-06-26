// chapter 39 how to start switch statements

// Define the day (you can change this value)
var dayOfWk = "Sun";

// Declare a variable for the message
var message = "";

// Use switch to set the message based on the day
switch (dayOfWk) {
  case "Sat":
  case "Sun":
    message = "Whoopee!";
    break;
  case "Fri":
    message = "TGIF!";
    break;
  default:
    message = "Shoot me now!";
}

// Show the result in the console
console.log("Selected Day:", dayOfWk);
console.log("Message:", message);

// chapter 40 how to complete switch statements

var dayOfWk1 = "fri";

switch (dayOfWk1) {
  case "Sat":
    alert("Whoopee");
    break;
  case "Sun":
    alert("Whoopee");
    break;
  case "Fri":
    alert("TGIF!");
    break;
  default:
    alert("Shoot me now!");
}

// document.write(dayOfWk);

console.log("This chapter is Switch statements");
