// Big O Notation
// O(1) - constant time - e.g. arr[20]
// O(n) - linear time - e.g. looping thrhough an array
// O(n^2) - quadratic time - e.g. nested loops
// O(log n) - logharitmic time - e.g. binary search

// Sorting

// Bubble Sort
// Time complexity: O(n^2)
// Space complexity: O(1)
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 2, 8, 1, 3]));
// Output: [1, 2, 3, 5, 8]

// Selection Sort
// Time complexity: O(n^2)
// Space complexity: O(1)
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

console.log(selectionSort([4, 1, 7, 3, 9]));
// Output: [1, 3, 4, 7, 9]

// Merge sort
// Time complexity: O(n log n)
// Space complexity: O(n)
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [],
    i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage
const unsorted = [8, 3, 5, 2, 9, 1, 4];
const sorted = mergeSort(unsorted);
console.log(sorted); // [1, 2, 3, 4, 5, 8, 9]

// Fltering / Searching

// Linear Search
// Time complexity: O(n)
// Space Complexity: O(1)
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
console.log(linearSearch([10, 20, 30, 40, 50], 30)); // 2
console.log(linearSearch([5, 2, 9, 1], 6)); // -1

// Binary Search
// Time complexity: O(log n)
// Space complexity: O(1)
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    arr[mid] < target ? (left = mid + 1) : (right = mid - 1);
  }
  return -1;
}
console.log(binarySearch([1, 3, 5, 7, 9, 11], 7)); // ➜ 3
console.log(binarySearch([2, 4, 6, 8, 10], 5)); // ➜ -1
