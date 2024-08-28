console.log("Hello from terminal");

/**
 * Using the 'test' method (function) available in RegExp object
 */
const mood = "I don't want to do anything today.";
const wordRegex = /to dox/;

const hasWord = wordRegex.test(mood);

if (hasWord) {
  console.log("The mood var contains the 'to do' word.");
} else {
  console.log("The mood var doesn't contains the 'to do' word.");
}

/**
 * Using the 'match' method available in string object
 */

// Should have at least 6 chars, one special symbolone number,
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const password = "parolasecreta1@";

const isCorrectPassword = password.match(passwordRegex); // true or false

if (isCorrectPassword) {
  console.log("The password is strong.");
} else {
  console.log(
    "The password should have at least 6 chars, one number, one sepcial symbol."
  );
}

/**
 * Using the 'replace' method available in string object
 */

const cardNumber = "ROBT0000000066663914";
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape
const cardNumberRegex = /\w(?=\w{4})/g; // it matches the latest 4 digits
// x(?=y)
const hashedCardNumber = cardNumber.replace(cardNumberRegex, "*"); // replace all but not the last 4 digits
const splitNumberRegex = /.{1,4}/g;
const formatedCardNumber = hashedCardNumber.match(splitNumberRegex).join(" "); // go 4 by 4 and add a space between digits
console.log(`Your card number: ${formatedCardNumber}`); // display the card number formated in terminal
