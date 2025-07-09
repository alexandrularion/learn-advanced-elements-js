// Task 1
function findMax(arr) {
  // TODO: return the max number
  // Variant 1
  //   let maxNumber = arr[0];
  //   for (let i = 1; i < arr.length; i++) {
  //     if (arr[i] > maxNumber) {
  //       maxNumber = arr[i];
  //     }
  //   }
  //   return maxNumber;

  //   Variant 2
  return Math.max(...arr);
}

console.log("Task 1", findMax([33, 95, 3330, 106, 388, 1009]));

// Task 2
function countWords(str) {
  // TODO: count number of words
  // split helps us to create an array of strings depending on a separator (in our case emtpy space)
  return str.split(" ").length;
}

console.log("Task 2", countWords("JavaScript is really fun to learn")); // 6

// Task 3
function reverseArray(arr) {
  // TODO: reverse array
  // Variant 1
  //   const reversedArray = [];
  //   for (let i = arr.length - 1; i >= 0; i--) {
  //     reversedArray.push(arr[i]);
  //   }
  //   return reversedArray;
  // Variant 2
  return arr.reverse();
}

console.log("Task 3", reverseArray([1, 2, 3, 4]));

// Task 4
function firstDuplicate(arr) {
  // TODO: find first repeated element
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter = counter + 1;
      }
    }
    if (counter > 1) {
      return arr[i];
    }
    counter = 0;
  }
}

console.log("Task 4", firstDuplicate([2, 3, 5, 3, 5, 7, 3]));

// Task 5
function capitalizeWords(str) {
  // TODO: capitalize each word
  const wordsArray = str.split(" "); // convert the string into array
  const capitalizedWords = wordsArray.map(
    (word) => `${word.charAt(0).toUpperCase()}${word.slice(1, word.length)}`
  ); // capitalize words
  return capitalizedWords.join(" "); // convert the array back to string
}

// `` - backtick - string interpolation - IMBINARE - CONCATENARE

console.log("Task 5", capitalizeWords("hello from javascript"));

// Task 6
function getUnique(arr) {
  // TODO: remove duplicates
  const data = new Set(arr); // Creating a new set will automatically remove the duplicates
  return [...data]; // Create a new array using the Set values + spread operator to merge
}

console.log("Task 6", getUnique([1, 2, 2, 3, 4, 1]));

// Task 7
function isPalindrome(str) {
  // TODO: return true if palindrome
  const reversedStr = str.split("").reverse().join(""); // input: dorel, output: lerod
  return str === reversedStr; // true ? palindrom
}

console.log("Task 7", isPalindrome("level"));
console.log("Task 7", isPalindrome("hello"));
console.log("Task 7", isPalindrome("bobita"));

// Task 8
function countFrequency(arr) {
  // TODO: return frequency map
  let frequencies = {};

  for (let i = 0; i < arr.length; i++) {
    frequencies[arr[i]] = (frequencies[arr[i]] || 0) + 1;
  }

  return frequencies;
}

console.log("Task 8", countFrequency(["a", "b", "a", "c", "b", "a"]));

// Task 9
function flattenOneLevel(arr) {
  // TODO: flatten 1-level nested array
  return arr.flat(); // .flat() method removes any nested array and merge the values with the parent one
}

console.log("Task 9", flattenOneLevel([1, [2, 3], 4, [5, 6]]));

// Task 10
function groupByParity(arr) {
  // TODO: group numbers into even and odd
  const group = {
    even: [],
    odd: [],
  };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      group.even.push(arr[i]);
    } else {
      group.odd.push(arr[i]);
    }
  }

  return group;
}

console.log("Task 10", groupByParity([1, 2, 3, 4, 5, 6]));
