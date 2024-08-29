/**
    Queue Exercise: First Non-Repeating Character
        Write a function firstNonRepeatingChar(str) that takes a string and returns the first character that does not repeat. Use a queue to help you keep track of characters.
    Tips:
        Use a queue to store characters as you traverse the string.
        Use a simple object to count the occurrences of each character.
        The first character in the queue with a count of 1 is the answer.
 */

function firstNonRepeatingChar(str) {
  let queue = [];
  let charCount = {};

  // Step 1: Count the occurrences of each character and enqueue them
  for (let char of str) {
    if (!charCount[char]) {
      // TODO: Initialize the count for this character
    }
    // TODO: Increment the count for this character
    // TODO: Enqueue the character
  }

  // Step 2: Find the first character with a count of 1
  while (queue.length > 0) {
    let char = queue.shift(); // Dequeue the character
    // TODO: Check if this character's count is 1
  }

  return null; // No non-repeating character found
}

// Example:
console.log(firstNonRepeatingChar("swiss")); // "w"
console.log(firstNonRepeatingChar("racecar")); // "e"
