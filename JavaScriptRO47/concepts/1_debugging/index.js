// A simple function to calculate the average of an array of numbers
function calculateAverage(numbers) {
  // Consider the average 0 if the length of the numbers array is 0
  if (numbers.length === 0) {
    return 0;
  }

  let total = 0;

  // Loop through the array to sum up the numbers
  for (let i = 0; i < numbers.length; i++) {
    // Bug: Should be i < numbers.length
    total += numbers[i]; // Bug: Index out of range error on last iteration
  }

  // Calculate the average (Bug: Division by zero if numbers.length is zero)
  let average = total / numbers.length;

  return average; //  i.e. 20.8
}

// Test the function
const testArray = []; // Bug: Includes a string that will cause NaN in calculations
const result = calculateAverage(testArray); // Bug: Potential type and logic errors
console.log("The average is: ", result);
