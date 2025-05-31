// program 1

var itemsarr1 = [
  "cake",
  "chips",
  "snacks",
  "chocolate",
  "biscuits",
  "biscuits",
  "biscuits",
];
console.log(itemsarr1);

for (var i = 0; i < itemsarr1.length; i++) {
  console.log(i);
  console.log(itemsarr1[i]);
}

// program 2

var itemsarr2 = [
  "cake",
  "chips",
  "snacks",
  "chocolate",
  "biscuits",
  "biscuits",
  "biscuits",
];

for (var i = 0; i < itemsarr2.length; i++) {
  console.log(itemsarr2[i]);
}

// program 3

for (var i = 0; i <= 12; i++) {
  console.log(i);

  if (i == 6) {
    break;
  }
}

// program 4

var itemsarr3 = [
  "cake",
  "chips",
  "snacks",
  "chocolate",
  "biscuits",
  "biscuits",
  "biscuits",
];

var userinput1 = prompt("what do you want to eat?");

for (var i = 0; i < itemsarr3.length; i++) {
  if (userinput1 == itemsarr3[i]) {
    console.log("yes we have " + userinput1);
    break;
  } else if (i == itemsarr3.length - 1) {
    console.log("sorry we dont have " + userinput1);
  }
}
