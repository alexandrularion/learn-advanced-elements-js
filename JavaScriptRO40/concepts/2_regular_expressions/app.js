console.log("Hello from terminal");

/**
 * Using the 'test' method (function) available in RegExp object
 */
const mood = "I don't want to do anything today.";
const wordRegex = /today/;

const hasWord = wordRegex.test(mood);

if (hasWord) {
  console.log("The mood var contains the 'today' word.");
} else {
  console.log("The mood var doesn't contains the 'today' word.");
}

/**
 * Using the 'match' method available in string object
 */

// Should have at least 6 chars, one number, one special symbol
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const password = "parolasecreta1$";

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

const cardNumber = "4012888888881881";
const cardNumberRegex = /\d(?=\d{4})/g; // it matches the latest 4 digits
const hashedCardNumber = cardNumber.replace(cardNumberRegex, "*"); // replace all but not the last 4 digits
const formatedCardNumber = hashedCardNumber.match(/.{1,4}/g).join(" "); // go 4 by 4 and add a space between digits
console.log(`Your card number: ${formatedCardNumber}`); // display the card number formated in terminal
