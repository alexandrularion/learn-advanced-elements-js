# 1. Bubble Sort  

Sorts an array using the **Bubble Sort** algorithm.

```js
function bubbleSort(arr) {
    let start = performance.now();
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    let end = performance.now();
    console.log(`Execution time: ${end - start} ms`);
    return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2]));
```

**Input:** `[5, 3, 8, 4, 2]`  
**Output:** `[2, 3, 4, 5, 8]`  

---

# 2. Merge Sort (Recursive)  

Implements **Merge Sort** recursively.

```js
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
```

**Input:** `[10, 7, 3, 1, 9, 4]`  
**Output:** `[1, 3, 4, 7, 9, 10]`  

---

# 3. Filtering Even Numbers  

Filters **even numbers** from an array.

```js
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
```

**Input:** `[1, 2, 3, 4, 5, 6]`  
**Output:** `[2, 4, 6]`  

---

# 4. Fibonacci (Recursive)  

Finds the nth **Fibonacci** number using recursion.

```js
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));
```

**Input:** `6`  
**Output:** `8`  

---

# 5. Fibonacci (Memoized for Performance)  

Optimized Fibonacci sequence calculation using **memoization**.

```js
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

console.log(fibonacciMemo(6));
```

**Input:** `6`  
**Output:** `8`  

---

# 6. Measuring Execution Time  

Measures the **time taken** to sum an array.

```js
function measureExecutionTime(arr) {
    let start = performance.now();
    let sum = arr.reduce((acc, num) => acc + num, 0);
    let end = performance.now();
    console.log(`Execution time: ${end - start} ms`);
    return sum;
}

console.log(measureExecutionTime([1, 2, 3, 4, 5]));
```

**Input:** `[1, 2, 3, 4, 5]`  
**Output:** `15` (plus execution time in ms)  

---

# 7. Find Maximum Element  

Finds the **maximum value** in an array.

```js
function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax([4, 1, 9, 2, 5]));
```

**Input:** `[4, 1, 9, 2, 5]`  
**Output:** `9`  

---

# 8. Factorial (Recursive)  

Computes **factorial** using recursion.

```js
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

console.log(factorial(5));
```

**Input:** `5`  
**Output:** `120`  

---

# 9. Quick Sort  

Sorts an array using **Quick Sort**.

```js
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    let pivot = arr[arr.length - 1];
    let left = arr.filter(num => num < pivot);
    let right = arr.filter(num => num > pivot);
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([7, 2, 1, 8, 6, 3, 5, 4]));
```

**Input:** `[7, 2, 1, 8, 6, 3, 5, 4]`  
**Output:** `[1, 2, 3, 4, 5, 6, 7, 8]`  

---

# 10. Binary Search (Recursive)  

Finds an element in a sorted array using **Binary Search**.

```js
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;
    
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid;
    return arr[mid] > target
        ? binarySearch(arr, target, left, mid - 1)
        : binarySearch(arr, target, mid + 1, right);
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));
```

**Input:** `[1, 2, 3, 4, 5, 6], 4`  
**Output:** `3` (index of `4` in the array)  