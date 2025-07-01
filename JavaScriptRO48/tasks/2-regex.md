## ✅ **Task 1: Match Digits**

### 📝 Description

Write a regex that matches all individual digits in the string.

### 🔧 Base Code

```javascript
const input = "User123 joined in 2024.";
const digits = input.match(/* regex here */);
console.log("Digits:", digits);
```

### 📌 Requirement

Match all individual digit characters.

### 💡 Tips

Use a digit metacharacter (`\d`) and global flag.

### 🧪 Sample Output

```
Digits: ["1", "2", "3", "2", "0", "2", "4"]
```

---

## ✅ **Task 2: Validate Basic Email**

### 📝 Description

Check if a string is a valid email address.

### 🔧 Base Code

```javascript
const email = "john.doe@example.com";
const isValid = /* regex here */.test(email);
console.log("Valid email?", isValid);
```

### 📌 Requirement

Basic validation for `text@text.text`.

### 💡 Tips

Use anchors and escaped characters.

### 🧪 Sample Output

```
Valid email? true
```

---

## ✅ **Task 3: Extract Words**

### 📝 Description

Extract all words (ignore punctuation and symbols).

### 🔧 Base Code

```javascript
const text = "Hello, world! Let's learn regex.";
const words = text.match(/* regex here */);
console.log("Words:", words);
```

### 📌 Requirement

Return clean alphanumeric word tokens.

### 💡 Tips

Use `\b\w+\b` or `\w+` with `/g`.

### 🧪 Sample Output

```
Words: ["Hello", "world", "Let", "s", "learn", "regex"]
```

---

## ✅ **Task 4: Replace Spaces With Dashes**

### 📝 Description

Replace all spaces with hyphens to make a slug.

### 🔧 Base Code

```javascript
const title = "React Regex Cheatsheet";
const slug = title.replace(/* regex here */, "-");
console.log("Slug:", slug);
```

### 📌 Requirement

Convert spaces to dashes.

### 💡 Tips

Use whitespace `\s` or plain space `' '`.

### 🧪 Sample Output

```
Slug: React-Regex-Cheatsheet
```

---

## ✅ **Task 5: Remove HTML Tags**

### 📝 Description

Remove all HTML tags from a string.

### 🔧 Base Code

```javascript
const html = "<h1>Hello</h1><p>World</p>";
const clean = html.replace(/* regex here */, "");
console.log("Text without HTML:", clean);
```

### 📌 Requirement

Remove anything between `< >`.

### 💡 Tips

Use `<[^>]*>` globally.

### 🧪 Sample Output

```
Text without HTML: HelloWorld
```

---

## 🟡 **Task 6: Validate Date Format (DD/MM/YYYY)**

### 📝 Description

Validate date format `DD/MM/YYYY`.

### 🔧 Base Code

```javascript
const date = "12/06/2025";
const isValid = /* regex here */.test(date);
console.log("Valid date?", isValid);
```

### 📌 Requirement

Match exactly 2 digits + `/` + 2 digits + `/` + 4 digits.

### 💡 Tips

Use anchors (`^`, `$`) and escaped slashes.

### 🧪 Sample Output

```
Valid date? true
```

---

## 🟡 **Task 7: Extract Hashtags**

### 📝 Description

Find all hashtags in a string.

### 🔧 Base Code

```javascript
const post = "Loving #JavaScript and #regex with #OpenAI!";
const hashtags = post.match(/* regex here */);
console.log("Hashtags:", hashtags);
```

### 📌 Requirement

Match `#` followed by letters/numbers.

### 💡 Tips

Use `#\w+` and `/g`.

### 🧪 Sample Output

```
Hashtags: ["#JavaScript", "#regex", "#OpenAI"]
```

---

## 🔴 **Task 8: Match Phone Numbers**

### 📝 Description

Match phone numbers in two formats:

* `(123) 456-7890`
* `123-456-7890`

### 🔧 Base Code

```javascript
const text = "Reach me at (123) 456-7890 or 987-654-3210.";
const phones = text.match(/* regex here */);
console.log("Phone numbers:", phones);
```

### 📌 Requirement

Use optional groups for different formats.

### 💡 Tips

Escape `()` and `-`.

### 🧪 Sample Output

```
Phone numbers: ["(123) 456-7890", "987-654-3210"]
```

---

## 🔴 **Task 9: Find Repeated Words**

### 📝 Description

Find repeated consecutive words in a sentence.

### 🔧 Base Code

```javascript
const sentence = "This is is a common mistake.";
const repeated = sentence.match(/* regex here */);
console.log("Repeated word:", repeated);
```

### 📌 Requirement

Use backreference to match repeated word.

### 💡 Tips

Try `\b(\w+)\s+\1\b`

### 🧪 Sample Output

```
Repeated word: ["is is"]
```

---

## 🔴 **Task 10: Password Strength Validator**

### 📝 Description

Check if a password is strong:

* At least 8 characters
* One uppercase
* One lowercase
* One digit

### 🔧 Base Code

```javascript
const password = "MyPass123";
const isSecure = /* regex here */.test(password);
console.log("Strong password?", isSecure);
```

### 📌 Requirement

Use lookaheads for multiple rules.

### 💡 Tips

Use `(?=.*[A-Z])`, `(?=.*[a-z])`, `(?=.*\d)`, `.{8,}`

### 🧪 Sample Output

```
Strong password? true
```