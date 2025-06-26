## **🟢 Task 1: Easy – Multiply All Elements**

### **Description**

The function is supposed to return the product of all numbers in the array. However, the result is not what you’d expect. Find and fix the bug.

```javascript
function multiplyArray(arr) {
  let product = 1;
  arr.forEach(num => {
    product = num * num;
  });
  return product;
}

const result = multiplyArray([2, 3, 4]);
console.log("Product:", result); // Expected output: 24
```

### **Tips:**

* Make sure you're accumulating the value.
* Check if you're multiplying with the previous result or overwriting it.

---

## **🟡 Task 2: Medium – Filter Valid Emails**

### **Description**

The function below is intended to return only the valid emails from an array. An email is considered valid if it includes the `@` symbol. But something is off. Find and fix it.

```javascript
function filterValidEmails(emails) {
  return emails.filter(email => {
    email.includes("@");
  });
}

const emailList = ["test@gmail.com", "hello", "user@yahoo.com", "admin@", "@example.com"];
const validEmails = filterValidEmails(emailList);
console.log("Valid Emails:", validEmails);
// Expected: ["test@gmail.com", "user@yahoo.com", "admin@", "@example.com"]
```

### **Tips:**

* `.filter()` must return a value from its callback.
* Watch out for implicit return vs. missing return.

---

## **🔴 Task 3: Hard – Find Most Frequent Character**

### **Description**

This function should return the most frequent character in a string (excluding spaces). It seems to break or return wrong values for certain inputs. Identify and fix the issue.

```javascript
function mostFrequentChar(str) {
  const map = {};
  let maxChar = '';
  let maxCount = 0;

  str.split("").forEach(char => {
    if (char === " ") return;
    map[char] = map[char]++ || 1;

    if (map[char] > maxCount) {
      maxChar = char;
      maxCount = map[char];
    }
  });

  return maxChar;
}

const result = mostFrequentChar("javascript is awesome");
console.log("Most frequent character:", result);
// Expected: "s"
```

### **Tips:**

* Revisit how `++` works in `map[char]++`.
* Check how values are incremented and whether they’re being assigned properly.