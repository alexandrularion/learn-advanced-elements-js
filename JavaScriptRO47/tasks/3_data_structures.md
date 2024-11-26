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