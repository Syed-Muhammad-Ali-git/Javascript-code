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
