// Regular Expression
// Tip: We use Regex to validate a string using specific rules
// Tip: We use Regex to find a specific group of words, digits, chars in a string using specific rules
// Tip: We use Regex to find and replace a specific group of words...etc using specific rules
const searchRegex = /debugged\b/;

// Tip: \b - assertion - matches the whole word not allowing other chars before or after word

const sentence = "I debugged my code and I caught some errors.";

// Tip: In our case the pattern is the "debug" word within the slahes.
const hasPattern = searchRegex.test(sentence);

console.log(hasPattern); // true

// Tip: Regex used to validate a password
// Tip: Rules: 8 chars, one lowercase letter, one uppercase letter, one digit, one special char
const passwordRegex = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
const password = "Par12#"; // Tip: This can be a real value from a html form

console.log(passwordRegex.test(password)); // false

// Tip: Character_classes
// Tip: [0-9] ~ [\d]
// Tip: [a-zA-z0-9] ~ [\w]

const password2 = "Parola123#";
console.log(passwordRegex.test(password2)); // true

// Tip: The flag 'g' - will search globally which means all occurrences will be returned
const keyRegex = /amet/g;
const sentence2 =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat natus sequi animi autem hic, error aspernatur saepe asperiores quia molestias eligendi delectus voluptas voluptatum, amet nam porro vel. Corrupti, ad.";

console.log(sentence2.match(keyRegex)); // ["amet", "amet"]
