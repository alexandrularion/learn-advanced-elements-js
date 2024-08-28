// JavaScript Regex Practice Exercises

// 1. Validate Email Address
// Objective: Write a regex pattern to validate an email address.
// The pattern should match most standard email formats.
const emailPattern = /.../; // Your regex pattern here

console.log(emailPattern.test("user@example.com")); // true
console.log(emailPattern.test("user@.com")); // false
console.log(emailPattern.test("user123@domain.co")); // true

// 2. Match a US Phone Number
// Objective: Write a regex pattern to match US phone numbers in different formats.
// The regex should account for variations like (123) 456-7890, 123-456-7890, or 123.456.7890.
const phonePattern = /.../; // Your regex pattern here

console.log(phonePattern.test("(123) 456-7890")); // true
console.log(phonePattern.test("123-456-7890")); // true
console.log(phonePattern.test("123.456.7890")); // true
console.log(phonePattern.test("1234567890")); // true

// 3. Extract Domain Name from URL
// Objective: Write a regex pattern to extract the domain name from a given URL.
// The pattern should work for URLs with different protocols (http, https, www).
const urlPattern = /.../; // Your regex pattern here

const url = "https://www.example.com/path/page.html";
const domain = url.match(urlPattern)[1];
console.log(domain); // 'example.com'

// 4. Validate a Password
// Objective: Write a regex pattern to validate a password that must be between 8 and 15 characters long,
// contain at least one uppercase letter, one lowercase letter, one digit, and one special character.
const passwordPattern = /.../; // Your regex pattern here

console.log(passwordPattern.test("Passw0rd!")); // true
console.log(passwordPattern.test("password")); // false
console.log(passwordPattern.test("PASS1234!")); // false

// 5. Find Duplicate Words in a String
// Objective: Write a regex pattern that finds and matches any duplicate words in a string.
// The regex should be case-insensitive.
const duplicateWordPattern = /.../i; // Your regex pattern here

const text = "This is is a test Test string";
const duplicates = text.match(duplicateWordPattern);
console.log(duplicates); // ['is', 'Test']
