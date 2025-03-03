function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    sortedArr.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  return [...sortedArr, ...left, ...right];
}

console.log(mergeSort([10, 7, 3, 1, 9, 4]));

// Check tasks file: 4_algorithms.md
