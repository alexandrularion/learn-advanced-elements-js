# Regex Tasks for JavaScript

### 1. **Easy: Validate Email Format**  
**Task:** Write a regular expression to validate if a string is in the format of an email address.  
Examples of valid emails:  
- `example@example.com`  
- `user123@mail.co`  
- `name.surname@domain.org`

**Tips:**  
1. Use anchors (`^` and `$`) to ensure the pattern matches the entire string.  
2. Focus on splitting the email into three parts: the username, the `@` symbol, and the domain.  
3. Avoid using overly complex patterns at this stage; focus on basic validation.

---

### 2. **Medium: Extract Dates in `YYYY-MM-DD` Format**  
**Task:** Write a regular expression to extract dates in the format `YYYY-MM-DD` from a block of text. For example:  
Input:  
`The event is on 2024-11-26, and the deadline was 2023-12-31.`  
Output:  
`['2024-11-26', '2023-12-31']`

**Tips:**  
1. Remember that `YYYY` consists of 4 digits, `MM` and `DD` each have 2 digits.  
2. Use capturing groups if you want to extract the year, month, or day separately.  
3. Look for word boundaries (`\b`) to avoid matching invalid parts of text.

---

### 3. **Advanced: Validate and Capture Nested Tags in HTML**  
**Task:** Write a regular expression to validate and capture the content of a simple nested HTML tag, like `<div>Content</div>`.  
Examples of valid strings:  
- `<div>Hello</div>`  
- `<span>World</span>`  
- `<p>Some text</p>`

**Tips:**  
1. Use lazy quantifiers (`*?`) to ensure the regex doesn't consume too much text.  
2. Use capturing groups to extract the tag name and its content.  
3. Be cautious with nested tags as regex struggles with recursion. Consider testing on non-nested tags to simplify the problem.  
4. Look into advanced techniques or libraries for more complex nested HTML validation.