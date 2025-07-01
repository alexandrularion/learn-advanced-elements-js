// Regular Expression
// string = text

// Regex - no rules
const wordRegex = /milk/;

const sentence = "We drink milk.";

// 1. Check if the word "milk" is contained by our sentence
const wordResult = wordRegex.test(sentence);

console.log(wordResult); // true
console.log(sentence.includes("milk")); // true

// Regex - with rules
const passwordRegex =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

// (?=.*[0-9]) - positive lookahead - at least one digit (number)
// (?=.*[!@#$%^&*]) - positive lookahead - at least one special char
// (?=.*[A-Z]) - positive lookahead - at least one uppercase letter
// [a-zA-Z0-9!@#$%^&*] - any uppercase or lowercase letters, any digits, any special char
// {6,16} - 6 - is the minimum length / 16 - is the maximum length

const passwordSentence = "parolasecreta12*";

const passwordResult = passwordRegex.test(passwordSentence);
console.log("Password check: ", passwordResult); // false

// 2. Find an replace based on a specific pattern
