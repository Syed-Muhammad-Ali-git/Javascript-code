// test 4 Eidul azha

// program 1  qurbani meat distribution

var totalMeat = +prompt("Enter total amount of meat in kg:");
console.log("Total meat available for distribution: " + totalMeat + " kg");

var Members = +prompt("Enter number of members:");
console.log("Number of members: " + Members);

var meatPerMember = totalMeat / Members;
console.log("Each member will receive " + meatPerMember + " kg of meat.");

// program 2 Eid gift calculator

var noOfGifts = +prompt("Enter number of gifts:");
console.log("Total number of gifts: " + noOfGifts);

var giftPrice = +prompt("Enter price of each gift:");
console.log("Price of each gift: " + giftPrice + " Rs");

var totalGiftCost = noOfGifts * giftPrice;
console.log("Total cost of gifts: " + totalGiftCost + " Rs");

// program 3 qurbani animal selection

var animalType = prompt("Enter type of animal (cow, goat, sheep, camel):");
console.log("Selected animal type: " + animalType);

var animalWeight = +prompt("Enter weight of the animal in kg:");
console.log("Weight of the animal: " + animalWeight + " kg");

var animalPricePerKg = +prompt("Enter price per kg of the animal:");
console.log("Price per kg: " + animalPricePerKg + " Rs");

var totalAnimalCost = animalWeight * animalPricePerKg;
console.log("Total cost of the", animalType, "is " + totalAnimalCost + " Rs");

// program 4 eid greeting card

var recipientName = prompt("Enter the recipient's name:");
console.log("Recipient's Name: " + recipientName);
var greetingMessage = prompt("Enter your greeting message:");
console.log("Greeting Message: " + greetingMessage);

// program 5 zakaat calculator

var totalIncome = +prompt("Enter your total income for the year:");
console.log("Total income for the year: " + totalIncome + " Rs");

var zakatRate = 2.5 / 100;

var zakatAmount = totalIncome * zakatRate;
console.log("Zakat amount to be paid: " + zakatAmount + " Rs");
