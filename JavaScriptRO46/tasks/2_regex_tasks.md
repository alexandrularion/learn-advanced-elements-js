## **Task 1: Match a Simple Email**  
### **Task:**  
Write a regex to validate an email address with a simple structure (`example@domain.com`). It should include a username, an `@` symbol, and a domain name.  

### **Tips:**  
✅ The username can contain **letters, numbers, dots (`.`), and underscores (`_`)**.  
✅ The **`@`** symbol separates the username from the domain.  
✅ The domain must have at least one **dot (`.`)** (e.g., `gmail.com`).  
✅ The domain extension should be at least **two letters long** (`.com`, `.org`, etc.).  

### **Code Context:**  
```js
function isValidEmail(email) {
  // Use a regex to check if the email is in a valid format.
  // The function should return true if it's valid, otherwise false.
}

// Example usage:
console.log(isValidEmail("user@example.com")); // Expected: true
console.log(isValidEmail("invalid-email"));    // Expected: false
console.log(isValidEmail("user@domain"));      // Expected: false
console.log(isValidEmail("user.name@domain.com")); // Expected: true
```

---

## **Task 2: Validate a Date Format (DD/MM/YYYY or MM-DD-YYYY)**  
### **Task:**  
Create a regex to match dates in either **`DD/MM/YYYY`** or **`MM-DD-YYYY`** format.  

### **Tips:**  
✅ Use **character sets** (`[ ]`) to allow `/` or `-` as separators.  
✅ Ensure days (`DD`) are **two digits** (`01-31`).  
✅ Ensure months (`MM`) are **two digits** (`01-12`).  
✅ The year (`YYYY`) should be **exactly four digits**.  

### **Code Context:**  
```js
function isValidDate(date) {
  // Implement a regex that checks if the input matches the expected date formats.
  // Return true if the date is valid, otherwise return false.
}

// Example usage:
console.log(isValidDate("25/12/2023")); // Expected: true
console.log(isValidDate("12-31-2023")); // Expected: true
console.log(isValidDate("31-13-2023")); // Expected: false (invalid month)
console.log(isValidDate("2023/12/25")); // Expected: false (wrong format)
```

---

## **Task 3: Extract Hashtags from a Social Media Post**  
### **Task:**  
Write a regex to find all **hashtags** (e.g., `#coding`, `#100DaysOfCode`) in a text.  

### **Tips:**  
✅ A hashtag **starts with `#`**.  
✅ It is followed by **letters, numbers, or underscores (`_`)**.  
✅ It should **stop when a space or special character** (except `_`) appears.  

### **Code Context:**  
```js
function extractHashtags(text) {
  // Use a regular expression to find all hashtags in the text.
  // The function should return an array of hashtags.
}

// Example usage:
console.log(extractHashtags("Learning #JavaScript is fun! #100DaysOfCode")); 
// Expected: ["#JavaScript", "#100DaysOfCode"]

console.log(extractHashtags("No hashtags here.")); 
// Expected: []
```

---

## **Task 4: Validate a Strong Password**  
### **Task:**  
Create a regex that ensures a password meets the following requirements:  
- At least **8 characters long**  
- Contains at least **one uppercase letter**  
- Contains at least **one lowercase letter**  
- Contains at least **one digit**  

### **Tips:**  
✅ Use **character sets** like `[A-Z]`, `[a-z]`, and `[0-9]`.  
✅ Use **quantifiers** (`{8,}`) to enforce a **minimum length**.  
✅ Consider using `?=.*` to **ensure character presence**.  

### **Code Context:**  
```js
function isStrongPassword(password) {
  // Implement a regex that checks password strength.
  // The function should return true if the password meets all criteria.
}

// Example usage:
console.log(isStrongPassword("StrongPass1"));  // Expected: true
console.log(isStrongPassword("weak"));         // Expected: false
console.log(isStrongPassword("NoNumberHere")); // Expected: false
console.log(isStrongPassword("12345678"));     // Expected: false
```

---

## **Task 5: Match a URL (Including HTTP and HTTPS)**  
### **Task:**  
Write a regex to validate a **URL**, including both `http` and `https` versions.  

### **Tips:**  
✅ URLs **start with `http://` or `https://`**.  
✅ The domain should contain **letters, numbers, and dots (`.`)**.  
✅ The path (after `/`) can have optional query parameters.  

### **Code Context:**  
```js
function isValidURL(url) {
  // Implement a regex to check if the input is a valid URL.
  // The function should return true if it's valid, otherwise false.
}

// Example usage:
console.log(isValidURL("https://example.com"));    // Expected: true
console.log(isValidURL("http://www.test.org"));    // Expected: true
console.log(isValidURL("www.missing-protocol.com"));// Expected: false
console.log(isValidURL("random text"));            // Expected: false
```