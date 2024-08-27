/**
 * Arrays: Using JS built-in features
 */

const array = ["Apple", "Banana", "Cherry", "Peach", "Orange", "Watermelon"];
console.log(array);

// 1. push() - Adds one or more elements to the END of the array
array.push("Mango");
console.log(array, "- push()");

// 2. pop() - Removes the last element from the array
array.pop();
console.log(array, "- pop()");

// 3. unshift() - Adds one or more elements to the START of the array
array.unshift("Pineapple", "Kiwi");
console.log(array, "- unshift()");

// 4. shift() - Removes the first element from the array
array.shift();
console.log(array, "- shift()");

// 5. slice() - Returns a copy of a portion of the array
const newArray = array.slice(1, array.length - 1);
console.log(newArray, "- slice()");

// 6. includes() - Determines wether the array includes a particular value
const hasApple = array.includes("Apple");
console.log(hasApple, "- includes()");

// 7. forEach() - Calls a specific callback for each element in the array
array.forEach((value, index) => {
  console.log("value:", value, " | index:", index, " - forEach()");
});

// 8. map() - Creates a new array with results of calling a specific callback for each element
const modifiedArray = array.map((value, index) => {
  return `FRESH-${value}`;
});
console.log(modifiedArray, "- map()");

const modifiedArray2 = array.map((value) => {
  // Write any code you want here
  return {
    name: value,
    originCountry: "Guatemala",
  };
});
console.log(modifiedArray2, "- map()");
