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

