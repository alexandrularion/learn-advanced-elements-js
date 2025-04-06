# JavaScript Array Tasks

### 1. **Easy: Find the Length of an Array**  
**Task:** Write a function that returns the length of a given array.  

**Tips:**  
1. Use the `.length` property to determine the size of the array.  
2. Avoid manually iterating through the array for this task.

---

### 2. **Easy: Check if an Array Contains a Specific Element**  
**Task:** Write a function to check if a specific element exists in an array.  

**Tips:**  
1. Use the `.includes()` method to quickly check for the presence of an element.  
2. Think about edge cases, like empty arrays or data type mismatches.

---

### 3. **Easy: Add an Element to the End of an Array**  
**Task:** Write a function that adds an element to the end of an array.  

**Tips:**  
1. Use the `.push()` method to append the element.  
2. Remember that `.push()` modifies the original array.

---

### 4. **Medium: Remove Duplicates from an Array**  
**Task:** Write a function to remove duplicate elements from an array.  

**Tips:**  
1. Use a `Set` to filter out duplicates easily.  
2. Convert the `Set` back to an array using the spread operator or `Array.from()`.  
3. Consider how this approach works with large datasets.

---

### 5. **Medium: Reverse an Array**  
**Task:** Write a function that reverses the order of elements in an array.  

**Tips:**  
1. Use the `.reverse()` method for simplicity.  
2. If you're writing a custom function, use a loop to swap elements from start to end.  
3. Be mindful of whether the original array should be modified or not.

---

### 6. **Medium: Find the Maximum Value in an Array**  
**Task:** Write a function to find the largest number in an array.  

**Tips:**  
1. Use the `Math.max()` function combined with the spread operator.  
2. For manual implementation, iterate through the array and compare each value.  

---

### 7. **Advanced: Flatten a Nested Array**  
**Task:** Write a function that flattens a nested array into a single-level array.  

**Tips:**  
1. Use the `.flat()` method if working with shallow nesting.  
2. For deeply nested arrays, use `.flat(Infinity)` or write a recursive function.  
3. Test your solution on arrays with multiple levels of nesting.

---

### 8. **Advanced: Group Elements by Frequency**  
**Task:** Write a function that groups elements of an array based on their frequency.  

**Tips:**  
1. Use an object or a `Map` to count occurrences of each element.  
2. Transform the result into the desired grouped format.  
3. Think about how to handle edge cases, like empty arrays.

---

### 9. **Advanced: Rotate an Array**  
**Task:** Write a function to rotate an array to the left or right by a specified number of positions.  

**Tips:**  
1. Use slicing (`.slice()`) and concatenation to rearrange elements.  
2. Consider edge cases, such as rotations greater than the array length or negative rotations.  
3. Test the solution for both directions (left and right).

---

### 10. **Advanced: Find All Pairs That Sum to a Target**  
**Task:** Write a function that finds all pairs of numbers in an array that add up to a target sum.  

**Tips:**  
1. Use a nested loop for a brute-force approach.  
2. Optimize with a `Set` or `Map` to store visited elements.  
3. Handle duplicate pairs carefully to avoid repetition in the output.

### 11. **Easy (Map): Create a Map from an Array of Key-Value Pairs**  
**Task:** Write a function that creates a `Map` from an array of `[key, value]` pairs.

**Tips:**  
1. Use the `new Map()` constructor.  
2. Ensure keys are unique; later entries will overwrite earlier ones with the same key.  

---

### 12. **Easy (Map): Retrieve a Value by Key**  
**Task:** Write a function that takes a `Map` and a key, and returns the associated value.

**Tips:**  
1. Use the `.get()` method.  
2. Handle cases where the key doesn't exist (e.g., return `undefined` or a custom message).

---

### 13. **Medium (Map): Count Character Frequency in a String**  
**Task:** Write a function that counts how many times each character appears in a string using a `Map`.

**Tips:**  
1. Loop through the string, updating the count in the `Map`.  
2. Use `.has()` to check if the character already exists as a key.

---

### 14. **Medium (Map): Invert a Map (Swap Keys and Values)**  
**Task:** Write a function that swaps the keys and values of a `Map`.

**Tips:**  
1. Be cautious if values are not unique—they’ll become the new keys.  
2. Loop through the original map and set new pairs in a new `Map`.

---

### 15. **Advanced (Map): Merge Two Maps with Summed Values**  
**Task:** Merge two maps. If the same key appears in both, sum their values.

**Tips:**  
1. Use a loop to iterate over both maps.  
2. Use `.has()` and `.get()` to check and update values in the result map.

---

### 16. **Easy (Set): Remove Duplicates from an Array**  
**Task:** Write a function that returns a new array with duplicates removed using a `Set`.

**Tips:**  
1. Use `new Set(array)` to remove duplicates.  
2. Convert the set back to an array using `[...set]`.

---

### 17. **Easy (Set): Check if an Element Exists in a Set**  
**Task:** Write a function that checks if a specific element exists in a `Set`.

**Tips:**  
1. Use the `.has()` method.  
2. Sets are case-sensitive and use strict equality.

---

### 18. **Medium (Set): Find Intersection of Two Arrays**  
**Task:** Write a function that returns a new array containing elements that exist in both input arrays using `Set`.

**Tips:**  
1. Convert one array to a `Set`.  
2. Filter the other array to include only elements found in the `Set`.

---

### 19. **Medium (Set): Find the Difference Between Two Arrays**  
**Task:** Return elements that exist in the first array but not in the second.

**Tips:**  
1. Use `Set` to store elements of the second array.  
2. Filter the first array based on membership in the second set.

---

### 20. **Advanced (Set): Count Unique Values in a Nested Array**  
**Task:** Write a function that counts how many unique values are in a nested array (e.g., `[[1, 2], [2, 3]]`).

**Tips:**  
1. Flatten the array using `.flat()` or manual iteration.  
2. Use a `Set` to store unique values and get its size.