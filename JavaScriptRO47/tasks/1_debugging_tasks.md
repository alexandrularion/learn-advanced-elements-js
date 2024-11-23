## **Task 1: Easy**

### **Description**  
The function below is supposed to return the sum of all numbers in an array. However, it does not work as expected. Find and fix the bug.

```javascript
function sumArray(arr) {
  let sum = 0;
  arr.forEach(num => {
    sum += num;
  });
  return sum.toFixed(2); // Return result rounded to 2 decimal places
}

const result = sumArray([1, 2, 3, 4]);
console.log("Sum:", result); // Expected output: "Sum: 10"
```

### **Tips:**  
- Look carefully at the type of the `sum` variable after the operations.
- Is `toFixed()` the right method to use here? What does it return?

---

## **Task 2: Medium**

### **Description**  
This function is intended to capitalize the first letter of each word in a given string. However, the output is incorrect. Find and fix the bug.

```javascript
function capitalizeWords(sentence) {
  return sentence.split(" ").map(word => {
    word[0].toUpperCase() + word.slice(1); // Capitalize the first letter
  }).join(" ");
}

const result = capitalizeWords("hello world from javascript");
console.log("Capitalized:", result); // Expected: "Hello World From Javascript"
```

### **Tips:**  
- Is the `.map()` function returning what you expect?  
- Check what happens to the result of `word[0].toUpperCase() + word.slice(1)`.

---

## **Task 3: Hard**

### **Description**  
This function is meant to return the longest word in a given string. It sometimes works, but it also fails with certain inputs. Identify the issue and fix it.

```javascript
function findLongestWord(sentence) {
  let words = sentence.split(" ");
  let longestWord = "";

  words.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

const result = findLongestWord("The quick brown fox jumps over the lazy dog!");
console.log("Longest word:", result); // Expected: "jumps"
```

### **Tips:**  
- Test the function with punctuation marks in the sentence (e.g., "fox!").
- Does splitting the string handle punctuation correctly?
- Think about how you could sanitize the input before processing it.
