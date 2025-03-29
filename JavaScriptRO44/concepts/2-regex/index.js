// Tip: Validate an email address
const emailAddressRegex = /[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}/;
// john.doe@gmail.com
const email = "john.doe@gmail.com";
const isEmailValid = emailAddressRegex.test(email);
console.log(isEmailValid); // true
console.log(emailAddressRegex.test("john.doe")); // false

// Tip: Find and extract substrings from a string
const message = "Order 2344 was placed on 2024-05-03"; // Tip: 2344 (substring)
const extractNumbersRegex = /[0-9]+/g;
const extractedNumbers = message.match(extractNumbersRegex);
console.log(extractedNumbers); // ["2344", "2024", "05", "03"]

// Tip: Find and replace substring from a string
const greeting = "I love JavaScript. JavaScript is awesome!";
const replaceRegex = /JavaScript/;
const replacedGreeting = greeting.replace(replaceRegex, "Python");
console.log(replacedGreeting); // "I love Python. JavaScript is awesome!"
