// Regular Expression: Validate a password with the following criterias:
// At least one upper case letter, one lower case letter, one digit, one special character and 6 characters

// ^ - mark the start of the string
// $ - mark the end of the string
// At least one digit - (?=.*[0-9])
// At least one special character - (?=.*[!@#$%^&*])
// At least one upper case ltter, lower case leter with special characters -  [a-zA-Z0-9!@#$%^&*]
// At least 6 characters - {6,}

const passwordRgex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
const password = "Parolamea123#";

const isPasswordValid = passwordRgex.test(password); // true or false

if (isPasswordValid) {
  console.log("The password is strong.");
} else {
  console.log(
    "The password should have at least 6 chars, one number, one lowercase and uppercase letter, and one special character."
  );
}

// Regular Expression: Match multiple words in a string.

const descriptionRegex = /amet/g;
const description =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat natus sequi animi autem hic, error aspernatur saepe asperiores quia molestias eligendi delectus voluptas voluptatum, amet nam porro vel. Corrupti, ad.";

const matches = description.match(descriptionRegex);

console.log(matches); // ['amet','amet']

// Regular Expression: Replace multiple digits with hashtags (#).

const hashtagRegex = /\d/g;
const sensitiveInfo = "My phone number is 123-456-394 and my PIN is 9867.";

const hashedSensitiveInfo = sensitiveInfo.replace(hashtagRegex, "#");
console.log(hashedSensitiveInfo); // "My phone number is ###-###-### and my PIN is ####."
