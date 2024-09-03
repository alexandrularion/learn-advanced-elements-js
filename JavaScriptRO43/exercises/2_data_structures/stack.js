/**
    Stack Exercise: Reverse a String
        Write a function reverseString(str) that takes a string and returns the string reversed. Use a stack to solve this problem
    Tips:
        Push each character of the string onto the stack.
        Pop characters off the stack to build the reversed string.
 */

function reverseString(str) {
  let stack = [];

  // Step 1: Push all characters of the string into the stack
  for (let char of str) {
    // TODO: Push `char` onto the stack
    // ["h","e","l","l"","o"]
    stack.push(char);
  }

  let reversedStr = "";

  // Step 2: Pop all characters from the stack and append them to reversedStr
  while (stack.length > 0) {
    // TODO: Pop from the stack and add to `reversedStr`
    // stack.pop() -> o > l > l > e > h
    reversedStr += stack.pop();
    // reversedStr = olleh
  }

  return reversedStr;
}

// Example:
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"
