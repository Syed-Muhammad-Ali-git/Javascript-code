// chapter 35 Functions ______________________

function tellTime() {
  var now = new Date();
  var theDate = now.getDate();
  var theHr = now.getHours();
  var theMin = now.getMinutes();
  console.log(
    "Current time: " +
      "\n" +
      " Date " +
      theDate +
      " " +
      " Time " +
      theHr +
      ":" +
      theMin
  );
}

tellTime();

// chapter 36 Functions: Passing them data _________________________

// program 1

var greeting = "hello";
function greetUser(greeting) {
  console.log(greeting);
}

greetUser(greeting);

// program 2

function showMessage(m, string, num) {
  console.log(m + string + num);
}

var month = "March";
showMessage(month, "s winner is ", 23);

// chapter 37 Functions: Passing data back from them

function add(a, b) {
  return a + b;
}

var result = add(5, 3);
console.log(result); // Output: 8

// chapter 38 Functions: Local vs. global variables

var abc = 123;
console.log(abc);

function name1(name) {
  var hello = "there";
  console.log(hello);
  console.log(name);
  console.log(abc);
}
// console.log(hello);

name1("ali");

// bahar jo variable hai abc wo global hai wo har jagah sa access hosakta hai likin andar jo variable bana hai wo sirf usi function ka andar chala ga jahan wo bana hai islia wo local variable hai yahi fark hai dono ma local apni jagah sa target hota hai or global har jagah sa hosakta hai
