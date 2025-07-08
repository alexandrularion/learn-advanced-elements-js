### ✅ **Task 1: Find the Maximum Number**

#### 📝 Description

Return the highest number from a given array.

#### 🔧 Base Code

```javascript
function findMax(arr) {
  // TODO: return the max number
}

console.log(findMax([1, 5, 9, 3, 7]));
```

#### 📌 Requirement

Use a loop or built-in method to get the largest number.

#### 💡 Tips

Try `Math.max()` or use `.reduce()`.

#### 🧪 Sample Output

```
9
```

---

### ✅ **Task 2: Count Words in a Sentence**

#### 📝 Description

Return the number of words in a sentence (split by spaces).

#### 🔧 Base Code

```javascript
function countWords(str) {
  // TODO: count number of words
}

console.log(countWords("JavaScript is really fun to learn"));
```

#### 📌 Requirement

Count all words separated by space.

#### 💡 Tips

Use `.split(" ")`.

#### 🧪 Sample Output

```
6
```

---

### ✅ **Task 3: Reverse an Array**

#### 📝 Description

Return a new array with the elements in reverse order.

#### 🔧 Base Code

```javascript
function reverseArray(arr) {
  // TODO: reverse array
}

console.log(reverseArray([1, 2, 3, 4]));
```

#### 📌 Requirement

Reverse the order of items.

#### 💡 Tips

Use `.reverse()` or a manual loop.

#### 🧪 Sample Output

```
[4, 3, 2, 1]
```

---

### ✅ **Task 4: Find the First Repeated Element**

#### 📝 Description

Return the first element that appears more than once.

#### 🔧 Base Code

```javascript
function firstDuplicate(arr) {
  // TODO: find first repeated element
}

console.log(firstDuplicate([2, 5, 3, 5, 7, 3]));
```

#### 📌 Requirement

Return the first duplicate from left to right.

#### 💡 Tips

Use a `Set` to track seen values.

#### 🧪 Sample Output

```
5
```

---

### ✅ **Task 5: Capitalize Each Word**

#### 📝 Description

Capitalize the first letter of every word in a sentence.

#### 🔧 Base Code

```javascript
function capitalizeWords(str) {
  // TODO: capitalize each word
}

console.log(capitalizeWords("hello from javascript"));
```

#### 📌 Requirement

Uppercase the first character of each word.

#### 💡 Tips

Use `.split(" ")` + `.map()` + `.join()`.

#### 🧪 Sample Output

```
"Hello From Javascript"
```

---

### 🟡 **Task 6: Return Only Unique Values**

#### 📝 Description

Return a new array with only the unique values (no duplicates).

#### 🔧 Base Code

```javascript
function getUnique(arr) {
  // TODO: remove duplicates
}

console.log(getUnique([1, 2, 2, 3, 4, 1]));
```

#### 📌 Requirement

Return values only once.

#### 💡 Tips

Use `Set` or `.filter()` with `indexOf`.

#### 🧪 Sample Output

```
[1, 2, 3, 4]
```

---

### 🟡 **Task 7: Check for Palindrome**

#### 📝 Description

Check if a string is a palindrome (reads the same backward).

#### 🔧 Base Code

```javascript
function isPalindrome(str) {
  // TODO: return true if palindrome
}

console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));
```

#### 📌 Requirement

Ignore case and whitespace if needed.

#### 💡 Tips

Reverse the string and compare.

#### 🧪 Sample Output

```
true
false
```

---

### 🟡 **Task 8: Count Frequency of Elements**

#### 📝 Description

Return an object showing how many times each value appears.

#### 🔧 Base Code

```javascript
function countFrequency(arr) {
  // TODO: return frequency map
}

console.log(countFrequency(["a", "b", "a", "c", "b", "a"]));
```

#### 📌 Requirement

Use an object to track frequency.

#### 💡 Tips

Use a loop or `.reduce()`.

#### 🧪 Sample Output

```js
{ a: 3, b: 2, c: 1 }
```

---

### 🔴 **Task 9: Flatten a Nested Array (One Level)**

#### 📝 Description

Return a single array with all elements from nested arrays.

#### 🔧 Base Code

```javascript
function flattenOneLevel(arr) {
  // TODO: flatten 1-level nested array
}

console.log(flattenOneLevel([1, [2, 3], 4, [5, 6]]));
```

#### 📌 Requirement

Flatten one level of nesting.

#### 💡 Tips

Use `.flat()` or manual `.concat()`.

#### 🧪 Sample Output

```
[1, 2, 3, 4, 5, 6]
```

---

### 🔴 **Task 10: Group Numbers by Even and Odd**

#### 📝 Description

Return an object with two keys: `even` and `odd`, each holding arrays of numbers.

#### 🔧 Base Code

```javascript
function groupByParity(arr) {
  // TODO: group numbers into even and odd
}

console.log(groupByParity([1, 2, 3, 4, 5, 6]));
```

#### 📌 Requirement

Sort numbers into `even` and `odd`.

#### 💡 Tips

Use `.forEach()` and modulo `%`.

#### 🧪 Sample Output

```js
{
  even: [2, 4, 6],
  odd: [1, 3, 5]
}
```