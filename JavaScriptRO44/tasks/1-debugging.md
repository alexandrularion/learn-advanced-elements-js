## **Task 1: Easy**  

### **Description**  
The function below is supposed to return `true` if all numbers in an array are even and `false` otherwise. However, it does not work correctly. Find and fix the bug.  

```javascript
function allEven(numbers) {
  numbers.forEach(num => {
    if (num % 2 !== 0) {
      return false;
    }
  });
  return true;
}

const result = allEven([2, 4, 6, 8]);
console.log("All even:", result); // Expected output: "All even: true"
```

### **Tips:**  
- Check if the function stops execution when it finds an odd number.  
- Does `return` inside `.forEach()` behave as expected?  

---

## **Task 2: Medium**  

### **Description**  
The function below is supposed to remove all vowels (`a, e, i, o, u`) from a given string. However, it does not work correctly in all cases. Find and fix the bug.  

```javascript
function removeVowels(str) {
  return str.replace(/[aeiou]/, "");
}

const result = removeVowels("hello world");
console.log("Without vowels:", result); // Expected: "hll wrld"
```

### **Tips:**  
- Does `.replace()` remove all occurrences or just the first one?  
- Consider using a different approach to match all vowels.  

---

## **Task 3: Hard**  

### **Description**  
This function is supposed to return an array of unique numbers from a given list. However, it sometimes includes duplicates. Find and fix the bug.  

```javascript
function getUniqueNumbers(arr) {
  let uniqueNumbers = [];
  
  arr.forEach(num => {
    if (!uniqueNumbers.includes(num)) {
      uniqueNumbers.push = num;
    }
  });

  return uniqueNumbers;
}

const result = getUniqueNumbers([1, 2, 2, 3, 4, 4, 5]);
console.log("Unique numbers:", result); // Expected: [1, 2, 3, 4, 5]
```

### **Tips:**  
- Is `.push = num;` a correct way to add elements to an array?  
- Test the function with different arrays to ensure it always returns unique values.  