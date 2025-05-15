// chapter 11 = comparison operators (==), (===) ___________________

/*

There are 8 major comparison operators in JavaScript:
1. == (equal to)      it only check the value like  ('abc' == 'abc') = true \ ( 2 == "2") = true \  it can not check the data type
2. === (strict equal to)  it can check the value and data type like ('abc' === 'abc') = true \ (2 === "2") = false
3. != (not equal to)  it only check the value like ('abc' != 'abc') = false \ (2 != "2") = false
4. !== (strict not equal to)  it can check the value and data type like ('abc' !== 'abc') = false \ (2 !== "2") = true
5. > (greater than)                        it can check the value like (2 > 1) = true \ (2 > 3) = false
6. < (less than)                           it can check the value like (2 < 1) = false \ (2 < 3) = true
7. >= (greater than or equal to)          it can check the value like (5 >= 5) = true \ (2 >= 3) = false
8. <= (less than or equal to)             it can check the value like (5 <= 5) = true \ (2 <= 3) = true

*/

// program 1  is ma !== ya use hoa hai

var yourTicketNumber = +prompt("Enter your ticket number");

if (yourTicketNumber !== 20) {
    alert("Better luck next time.");
}
else {
    alert("Congratulations! You have won a prize.");
};


// program 2  is ma != ya use hoa hai

var yourTicketNumber = prompt("Enter your ticket number");

if (yourTicketNumber != 20) {
    alert("Better luck next time.");
}
else {
    alert("Congratulations! You have won a prize.");
};

// program 3  is ma == ya use hoa hai

var yourTicketNumber = prompt("Enter your ticket number:");
if (yourTicketNumber == 20) {
    alert("Congratulations! You have won a prize.");
} else {
    alert("Better luck next time.");
};

// program 4  is ma === ya use hoa hai

var yourTicketNumber = +prompt("Enter your ticket number:");
if (yourTicketNumber === 20) {
    alert("Congratulations! You have won a prize.");
} else {
    alert("Better luck next time.");
};


/*
if (1 > 0)
  if (0 < 1)
    if (1 >= 0)

      if (1 >= 1)
        if (0 <= 1)
          if (1 <= 1)
*/

