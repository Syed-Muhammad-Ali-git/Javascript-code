// chapter 13 = Testing sets of conditions ___________________

// && and and operator ____________ is ma sari conditions true honi chahiye tabhi ya chalaga


// program 1


var weight = +prompt("Enter your weight above 50:");
var time = +prompt("Enter your time in seconds less than 60:");


if (weight > 50 && time < 60) {

    alert("Come to our tryout!");
    console.log(weight);
    console.log(time);
}
else {
    alert("Come to our cookout!");
}

var age = +prompt("Enter your age:");
var gender = prompt("Enter your gender");

if (age > 17 && gender == "male") {

    alert("Come to our tryout!");
    console.log(age);
    console.log(gender);
}
else {
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
}
else {
    console.log("Please enter your email and password");
}
