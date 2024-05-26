//regexp task

const wordRegex = /\b\w{1,4}\b/g;

function findWords(text) {
  return text.match(wordRegex).toString();
}

function removeWords(text) {
  return text.replace(wordRegex, "");
}

//testing
let string = "This is the sample sentence for RegExp testing.";

console.log(findWords(string));

console.log(removeWords(string));
