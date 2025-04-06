// Sorting: i.e. Bubble Sort, Quick Sort, Merge Sort
// Searching: i.e. Linear Search, Binary Search
// Recursion

// Time Complexity
// Big O(n) tells us how many operations (steps) are needed in the worst case;
// O(1) - Constant Time - No matter how big n is, the time stays the same.
// O(n) - Linear Time - Time grows directly with input size;
// O(n*n) - Quadratic Time - Time = n*n;
// O(log n) - Logarithmic Time - Each operation (step) cuts the problem in half.
// O(n log n) - Linearithmic Time - Grows faster than O(n), but much slower than O(n*n)
// O(2^n) - Exponential Time - Doubles the work for every new input;

// Space Complexity - same idea, but instead of time, it measures how much extra memory the algorithm uses.

// 1. Bubble Sort - Repeatedly swaps adjacent elements if they are in the wrong order
// Time Complexity: O(n^2)
function bubbleSort(arr) {
  const start = performance.now();
  let n = arr.length; // Tip: the current length of array parameter
  // let tmp;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Tip: Do the swap only if the next element is biggner than the current
      if (arr[j] > arr[j + 1]) {
        // Tip: We do the swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // Tip: We can use the variant with a tmp variable
        // tmp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = tmp;
      }
    }
  }
  const end = performance.now();
  console.log(`Bubble Sort - Execution time: ${end - start} ms`);
}

const input1 = [4, 10, 99, 2, 55, 22, 9999, 33, 345, 2399, 1, 2, 222, 321];
bubbleSort(input1);
console.log("Bubble Sort - ", input1);

// 2. Quick Sort - Picks a pivot and places smaller items on the left, larger on the
// right, then recursively sorts.
// Time Complexity: O(n^2)
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[arr.length - 1]; // Tip: Takes the last element as pivot
  const left = [],
    right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Tip: The quickSort function is called recursively until it returns the output
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const input2 = [4, 10, 99, 2, 55, 22, 9999, 33, 345, 2399, 1, 2, 222, 321];

const start = performance.now();
console.log(`Quick Sort - `, quickSort(input2));
const end = performance.now();
console.log(`Quick Sort - Execution time: ${end - start} ms`);

// 3. Linear Serach - checks each element one by one
// Time Complexity: O(n)
function linearSearch(arr, target) {
  const start = performance.now();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  const end = performance.end();
  console.log(`Linear Search - Execution time: ${end - start} ms`);

  return -1;
}

const input3 = [4, 10, 99, 2, 55, 22, 9999, 33, 345, 2399, 1, 2, 222, 321];
const result3 = linearSearch(input3, 9999);
console.log("Linear Serach - ", result3); // 6
console.log("Linear Search - ", input3[result3]); // 9999
