// Problematic code 1
function addNumbers(a, b) {
  return a + b;
}
let num1 = 5; // Bug: Should be a number
let num2 = 3;
let result = addNumbers(num1, num2);
console.log("The result is: " + result);

// Problematic code 2
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}
let cart = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 30 },
];
console.log("Total price:", calculateTotal(cart));

// Problematic code 3
function delayedCounter() {
  for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
      console.log("Count:", i);
    }, i * 1000);
  }
}

delayedCounter();
// 1
// 2
// 3
