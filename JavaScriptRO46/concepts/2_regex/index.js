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

// Tip: Find and replace the phone number using a regex
const sentence3 =
  "Call me at 0723-456-789 or (021) 345 6789. My old number was 0040 723 456 789.";

const replaceSentence3 = "[hidden number]";

// \b(0\d{2}[-.\s]?\d{3}[-.\s]?\d{3})\b - 0723-456-789 | 0723.456.789 | 0723 456 789
// \b(\(021\)\s?\d{3}[-.\s]?\d{4})\b - (021) 345 6789 | (021)345 6789
// \b(0040\s?\d{3}[-.\s]?\d{3}[-.\s]?\d{3})\b - 0040 723 456 789 | 0040-723-456-789
const replaceRegex =
  /\b(0\d{3}[-.]?\d{3}[-.]?\d{3})\b|(\(021\)\s?\d{3}[-.\s]?\d{4})\b|\b(0040\s?\d{3}[-.\s]?\d{3}[-.\s]?\d{3})\b/g;

const sentence3Replaced = sentence3.replace(replaceRegex, replaceSentence3);
console.log(sentence3Replaced); // "Call me at [hidden number] or [hidden number]. My old number was [hidden number]."
