## **Array Tasks**  

### **Task 1: Get the First and Last Element of an Array**  
**Task:** Write a function that takes an array and returns the first and last elements as a new array.  

🔗 **MDN Docs:** [Array.prototype.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)  

```js
const numbers = [10, 20, 30, 40, 50];  
const result = getFirstAndLast(numbers);  
console.log(result); // Expected output: [10, 50]  
```

---

### **Task 2: Sum All Elements in an Array**  
**Task:** Write a function that takes an array of numbers and returns the total sum.  

🔗 **MDN Docs:** [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)  

```js
const numbers = [5, 10, 15, 20];  
const total = sumArray(numbers);  
console.log(total); // Expected output: 50  
```

---

### **Task 3: Find if an Array Contains a Specific Value**  
**Task:** Write a function that checks if a given number exists in an array.  

🔗 **MDN Docs:** [Array.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)  

```js
const numbers = [3, 7, 9, 14];  
const exists = containsNumber(numbers, 7);  
console.log(exists); // Expected output: true  
```

---

### **Task 4: Filter Even Numbers from an Array**  
**Task:** Write a function that returns only the even numbers from an array.  

🔗 **MDN Docs:** [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)  

```js
const numbers = [1, 2, 3, 4, 5, 6];  
const evens = getEvenNumbers(numbers);  
console.log(evens); // Expected output: [2, 4, 6]  
```

---

### **Task 5: Convert an Array of Strings to Uppercase**  
**Task:** Write a function that converts all strings in an array to uppercase.  

🔗 **MDN Docs:** [String.prototype.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)  

```js
const words = ["hello", "world"];  
const upperWords = toUpperCaseArray(words);  
console.log(upperWords); // Expected output: ["HELLO", "WORLD"]  
```

---

## **Object Tasks**  

### **Task 6: Access Object Properties**  
**Task:** Given an object, write a function that returns the value of the `"name"` property.  

🔗 **MDN Docs:** [Object.property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)  

```js
const person = { name: "Alice", age: 25 };  
const name = getName(person);  
console.log(name); // Expected output: "Alice"  
```

---

### **Task 7: Add a New Property to an Object**  
**Task:** Write a function that adds an `"email"` property to an object and returns the updated object.  

🔗 **MDN Docs:** [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)  

```js
const user = { name: "John" };  
const updatedUser = addEmail(user, "john@example.com");  
console.log(updatedUser); // Expected output: { name: "John", email: "john@example.com" }  
```

---

### **Task 8: Loop Through an Object's Properties**  
**Task:** Write a function that prints all keys and values of an object.  

🔗 **MDN Docs:** [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)  

```js
const user = { name: "Emma", age: 30 };  
logObjectProperties(user);  
// Expected output:  
// name: Emma  
// age: 30  
```

---

### **Task 9: Check If an Object Has a Specific Property**  
**Task:** Write a function that checks if an object has a `"price"` property.  

🔗 **MDN Docs:** [Object.prototype.hasOwnProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)  

```js
const product = { name: "Laptop", price: 1000 };  
const hasPrice = hasProperty(product, "price");  
console.log(hasPrice); // Expected output: true  
```

---

### **Task 10: Merge Two Objects**  
**Task:** Write a function that merges two objects into one.  

🔗 **MDN Docs:** [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)  

```js
const obj1 = { a: 1, b: 2 };  
const obj2 = { c: 3, d: 4 };  
const merged = mergeObjects(obj1, obj2);  
console.log(merged); // Expected output: { a: 1, b: 2, c: 3, d: 4 }  
```

## **Advanced Array Tasks**  

### **Task 1: Remove Duplicates from an Array**  
**Task:** Write a function that removes duplicate values from an array and returns a new array with unique elements.  

🔗 **MDN Docs:** [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)  

```js
const numbers = [1, 2, 2, 3, 4, 4, 5];  
const uniqueNumbers = removeDuplicates(numbers);  
console.log(uniqueNumbers); // Expected output: [1, 2, 3, 4, 5]  
```

---

### **Task 2: Find the Second Largest Number in an Array**  
**Task:** Write a function that returns the second largest number in an array.  

🔗 **MDN Docs:** [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)  

```js
const numbers = [10, 5, 8, 12, 15, 3];  
const secondLargest = getSecondLargest(numbers);  
console.log(secondLargest); // Expected output: 12  
```

---

### **Task 3: Flatten a Nested Array**  
**Task:** Write a function that flattens a **nested** array into a single-level array.  

🔗 **MDN Docs:** [Array.prototype.flat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)  

```js
const nestedArray = [1, [2, 3], [4, [5, 6]]];  
const flatArray = flattenArray(nestedArray);  
console.log(flatArray); // Expected output: [1, 2, 3, 4, 5, 6]  
```

---

### **Task 4: Find Common Elements Between Two Arrays**  
**Task:** Write a function that returns an array of elements **common** in two given arrays.  

🔗 **MDN Docs:** [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)  

```js
const array1 = [1, 2, 3, 4, 5];  
const array2 = [3, 4, 5, 6, 7];  
const commonElements = findCommonElements(array1, array2);  
console.log(commonElements); // Expected output: [3, 4, 5]  
```

---

### **Task 5: Group Elements by Frequency**  
**Task:** Write a function that counts how often each element appears in an array and returns an object with **element counts**.  

🔗 **MDN Docs:** [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)  

```js
const data = ["apple", "banana", "apple", "orange", "banana", "apple"];  
const frequency = countFrequency(data);  
console.log(frequency);  
// Expected output: { apple: 3, banana: 2, orange: 1 }  
```

---

## **Advanced Object Tasks**  

### **Task 6: Deep Merge Two Objects**  
**Task:** Write a function that merges two objects **deeply**, meaning nested properties should also be merged.  

🔗 **MDN Docs:** [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)  

```js
const obj1 = { a: 1, b: { c: 2, d: 3 } };  
const obj2 = { b: { d: 4, e: 5 }, f: 6 };  
const mergedObject = deepMerge(obj1, obj2);  
console.log(mergedObject);  
// Expected output: { a: 1, b: { c: 2, d: 4, e: 5 }, f: 6 }  
```

---

### **Task 7: Convert an Object into a Query String**  
**Task:** Write a function that converts an object into a query string format for a URL.  

🔗 **MDN Docs:** [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)  

```js
const params = { name: "Alice", age: 25, city: "Paris" };  
const queryString = objectToQueryString(params);  
console.log(queryString);  
// Expected output: "name=Alice&age=25&city=Paris"  
```

---

### **Task 8: Invert the Keys and Values of an Object**  
**Task:** Write a function that **swaps** the keys and values of an object.  

🔗 **MDN Docs:** [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)  

```js
const person = { name: "Alice", age: 30 };  
const inverted = invertObject(person);  
console.log(inverted);  
// Expected output: { Alice: "name", 30: "age" }  
```

---

### **Task 9: Find the Most Frequent Key in an Object**  
**Task:** Write a function that finds the key with the highest value in an object.  

🔗 **MDN Docs:** [Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)  

```js
const votes = { apple: 5, banana: 3, orange: 8, pear: 2 };  
const mostFrequent = findMostFrequentKey(votes);  
console.log(mostFrequent); // Expected output: "orange"  
```

---

### **Task 10: Check If Two Objects Are Deeply Equal**  
**Task:** Write a function that checks if two objects are **deeply equal**, meaning they have the same structure and values.  

🔗 **MDN Docs:** [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)  

```js
const obj1 = { a: 1, b: { c: 2 } };  
const obj2 = { a: 1, b: { c: 2 } };  
const isEqual = deepEqual(obj1, obj2);  
console.log(isEqual); // Expected output: true  
```
