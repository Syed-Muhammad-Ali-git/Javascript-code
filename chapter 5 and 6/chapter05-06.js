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
