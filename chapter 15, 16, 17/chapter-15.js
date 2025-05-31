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
