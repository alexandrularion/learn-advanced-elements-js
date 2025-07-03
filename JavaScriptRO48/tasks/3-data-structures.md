## ✅ **Task 1: Get First and Last Elements**

### 📝 Description

Return an array containing the first and last element of the input array.

### 🔧 Base Code

```javascript
function firstAndLast(arr) {
  // TODO: return [first, last]
}

console.log(firstAndLast([10, 20, 30, 40])); 
```

### 📌 Requirement

Return a new array with first and last values.

### 💡 Tips

Use array indexing (`arr[0]`, `arr[arr.length - 1]`).

### 🧪 Sample Output

```
[10, 40]
```

---

## ✅ **Task 2: Sum All Numbers**

### 📝 Description

Calculate and return the sum of all elements in an array.

### 🔧 Base Code

```javascript
function sumArray(numbers) {
  // TODO: return sum
}

console.log(sumArray([1, 2, 3, 4, 5]));
```

### 📌 Requirement

Sum up all numbers in the array.

### 💡 Tips

Use a loop or `.reduce()`.

### 🧪 Sample Output

```
15
```

---

## ✅ **Task 3: Remove Falsy Values**

### 📝 Description

Return a new array without falsy values (`false`, `0`, `null`, `undefined`, `''`, `NaN`).

### 🔧 Base Code

```javascript
function cleanArray(arr) {
  // TODO: remove falsy values
}

console.log(cleanArray([0, "hello", false, 42, "", null, "JS"]));
```

### 📌 Requirement

Filter out all falsy values.

### 💡 Tips

Use `.filter(Boolean)`.

### 🧪 Sample Output

```
["hello", 42, "JS"]
```

---

## ✅ **Task 4: Double Even Numbers**

### 📝 Description

Return a new array where all even numbers are doubled.

### 🔧 Base Code

```javascript
function doubleEvens(arr) {
  // TODO: return array with even numbers doubled
}

console.log(doubleEvens([1, 2, 3, 4, 5, 6]));
```

### 📌 Requirement

Only double the even numbers, others remain unchanged.

### 💡 Tips

Use `.map()` with a conditional.

### 🧪 Sample Output

```
[1, 4, 3, 8, 5, 12]
```

---

## 🟡 **Task 5: Count Occurrences**

### 📝 Description

Count how many times a value appears in the array.

### 🔧 Base Code

```javascript
function countOccurrences(arr, value) {
  // TODO: return count of value
}

console.log(countOccurrences(["apple", "banana", "apple", "orange"], "apple"));
```

### 📌 Requirement

Return how many times the value exists in the array.

### 💡 Tips

Use `.filter()` or a loop.

### 🧪 Sample Output

```
2
```

---

## 🟡 **Task 6: Flatten a Nested Array (1 Level)**

### 📝 Description

Flatten one level of a nested array.

### 🔧 Base Code

```javascript
function flattenOnce(arr) {
  // TODO: return flat array
}

console.log(flattenOnce([1, [2, 3], 4, [5]]));
```

### 📌 Requirement

Flatten only one level of nesting.

### 💡 Tips

Use `.flat(1)` or manual concatenation.

### 🧪 Sample Output

```
[1, 2, 3, 4, 5]
```

---

## 🟡 **Task 7: Get Unique Values**

### 📝 Description

Return a new array containing only unique elements from the input.

### 🔧 Base Code

```javascript
function uniqueValues(arr) {
  // TODO: return array with duplicates removed
}

console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5]));
```

### 📌 Requirement

Remove duplicate values.

### 💡 Tips

Use `Set` or `.filter()` with `indexOf`.

### 🧪 Sample Output

```
[1, 2, 3, 4, 5]
```

---

## 🔴 **Task 8: Group By Type**

### 📝 Description

Group array items by their type into an object.

### 🔧 Base Code

```javascript
function groupByType(arr) {
  // TODO: return object grouped by typeof
}

console.log(groupByType(["hi", 42, true, null, "bye", false, 10]));
```

### 📌 Requirement

Return an object like `{ string: [...], number: [...], boolean: [...] }`

### 💡 Tips

Use `.forEach()` and `typeof`.

### 🧪 Sample Output

```js
{
  string: ["hi", "bye"],
  number: [42, 10],
  boolean: [true, false],
  object: [null]
}
```

---

## 🔴 **Task 9: Find Duplicates**

### 📝 Description

Return all values that appear more than once in the array.

### 🔧 Base Code

```javascript
function findDuplicates(arr) {
  // TODO: return array of duplicated values
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1, 6]));
```

### 📌 Requirement

Return each duplicated value only once.

### 💡 Tips

Use an object to count frequencies.

### 🧪 Sample Output

```
[1, 2]
```

---

## 🔴 **Task 10: Sort by Property (Array of Objects)**

### 📝 Description

Sort an array of objects by a specific property.

### 🔧 Base Code

```javascript
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

function sortByAge(arr) {
  // TODO: return sorted array by age ascending
}

console.log(sortByAge(people));
```

### 📌 Requirement

Sort objects by their `age` property.

### 💡 Tips

Use `.sort((a, b) => a.age - b.age)`.

### 🧪 Sample Output

```js
[
  { name: "Bob", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Charlie", age: 35 }
]
```