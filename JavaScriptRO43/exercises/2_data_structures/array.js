/**
    Array Exercise: Find Maximum
        Write a function findMax(arr) that takes an array of numbers and returns the maximum number in the array.
    Tips:
        Initialize a variable to hold the maximum value (start with the first element).
        Loop through the array, updating the maximum whenever you find a larger number.
        Return the maximum value after the loop.
 */
function findMax(arr) {
  if (arr.length === 0) return null; // Handle empty array

  let max = arr[0];

  // Step 1: Iterate through the array
  for (let i = 1; i < arr.length; i++) {
    // TODO: Update `max` if `arr[i]` is greater
    // arr[i] = current element
    // arr[0], arr[1], arr[2], arr[3],arr[4],arr[n]
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// Example:
console.log(findMax([1, 3, 7, 2, 5])); // 7
console.log(findMax([10, 20, 30, 40])); // 40
console.log(findMax([])); // null
