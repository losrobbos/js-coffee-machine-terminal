const readline = require("readline-sync");

console.log("Coffee choice pleeease");

const coffees = ["Espresso", "Crema", "Latte"];
const prices = [0.99, 1.49, 1.99];
const coins = [0.05, 0.1, 0.2, 0.5, 1, 2];

// coffee choice
// const name = readline.question("Dein Name bidde:", {});
const coffeeIndex = readline.keyInSelect(coffees, "Which coffee, my lord?");
console.log();

// no coffee? we don't need your money anyway... outta here!
if (coffeeIndex === -1) {
  console.log("NO COFFEE? we don't need your money anyway... outta here!");
  process.exit();
}

// detect price...
const coffee = coffees[coffeeIndex].toUpperCase();
const coffeePrice = prices[coffeeIndex];
console.log(coffee, "is your choice. Alright then...");
console.log("Gimme ", coffeePrice, "EUR or fuck off");

// collect coins from user until fully paid...
let moneyCollected = 0;

do {
  console.log("Your input so far: ", moneyCollected.toFixed(2), "EUR");
  console.log("Remaining: ", (coffeePrice - moneyCollected).toFixed(2), "EUR");
  const coinIndex = readline.keyInSelect(
    coins,
    "Please gimme some coin, bro..."
  );

  if (coinIndex === -1) {
    process.exit();
  }
  // add coin to our collected input
  const coin = coins[coinIndex];
  moneyCollected += coin;
} while (moneyCollected < coffeePrice);

// produce exchange
console.log();
console.log("Your coffeeeeee, heeeere:", coffee);

// produce output... (some ASCI ART)
displayCoffee();

console.log("Price:", coffeePrice.toFixed(2), "EUR");
console.log("Given:", moneyCollected.toFixed(2), "EUR");
console.log(
  "Your cash back:",
  (moneyCollected - coffeePrice).toFixed(2),
  "EUR"
);
console.log(
  "Spend wisely, little grasshopper. Too much coffee => no good for ya..."
);

console.log();

function displayCoffee() {
  console.log();
  console.log(`
        )  (
     (   ) )
      ) ( (
    _______)_
 .-'---------|  
( C|/\/\/\/\/|
 '-./\/\/\/\/|
   '_________'
    '-------'
  `);
  console.log();
}
