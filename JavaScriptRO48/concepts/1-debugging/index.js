function findLargest(numbers) {
  let largest = numbers[0]; //

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}

const list = [-10, -20, -3, -5];
console.log("Largest number is:", findLargest(list));
