### 1. **Change Background on Hover**  
**Description:**  
Change the background color of a `<div>` when the user hovers over it.  

**Tips:**  
- Use the `mouseover` and `mouseout` events.  
- Apply styles dynamically.  

**Example Input:**  
User hovers over a `<div>` with an initial background color of `white`.  

**Example Output:**  
The background changes to `lightblue` on hover and reverts to `white` when the cursor leaves.  

---

### 2. **Show Key Pressed**  
**Description:**  
Display the key the user pressed on the keyboard in real-time.  

**Tips:**  
- Use the `keydown` event.  
- Capture the key value using `event.key`.  

**Example Input:**  
User presses the "A" key.  

**Example Output:**  
"Key pressed: A"  

---

### 3. **Display Click Coordinates**  
**Description:**  
Show the X and Y coordinates of the mouse when the user clicks on a webpage.  

**Tips:**  
- Use the `click` event.  
- Get coordinates with `event.clientX` and `event.clientY`.  

**Example Input:**  
User clicks at position (150, 200).  

**Example Output:**  
"Coordinates: X: 150, Y: 200"  

---

### 4. **Toggle Paragraph Visibility**  
**Description:**  
Toggle the visibility of a paragraph when a button is clicked.  

**Tips:**  
- Use the `click` event.  
- Change the `display` style property to show or hide the paragraph.  

**Example Input:**  
User clicks a button when the paragraph is visible.  

**Example Output:**  
The paragraph becomes hidden and reappears on the next button click.  

---

### 5. **Form Validation on Input Blur**  
**Description:**  
Validate an input field when the user moves out of it (on blur).  

**Tips:**  
- Use the `blur` event to check the input content.  
- Validate patterns like email or empty fields.  

**Example Input:**  
User types an invalid email and moves to the next field.  

**Example Output:**  
"Error: Please enter a valid email address."  

---

### 6. **Change Text Content on Click**  
**Description:**  
Change the text content of a paragraph when a button is clicked.  

**Tips:**  
- Use the `click` event.  
- Replace the content dynamically.  

**Example Input:**  
User clicks a button.  

**Example Output:**  
The paragraph text changes from "Hello" to "Welcome!"  

---

### 7. **Scroll to Top on Button Click**  
**Description:**  
Scroll the webpage to the top when a button is clicked.  

**Tips:**  
- Use the `click` event.  
- Implement smooth scrolling with `window.scrollTo()`.  

**Example Input:**  
User clicks a "Scroll to Top" button while at the bottom of the page.  

**Example Output:**  
The page scrolls smoothly to the top.  

---

### 8. **Open Modal on Button Click**  
**Description:**  
Open a modal window when the user clicks a button.  

**Tips:**  
- Use the `click` event.  
- Add functionality to close the modal when clicking outside it.  

**Example Input:**  
User clicks a "Show Modal" button.  

**Example Output:**  
A modal window appears, and clicking outside closes it.  

---

### 9. **Highlight a Word on Double-Click**  
**Description:**  
Highlight the word double-clicked in a paragraph.  

**Tips:**  
- Use the `dblclick` event.  
- Highlight by wrapping the word in a `<span>` with a special style.  

**Example Input:**  
User double-clicks the word "JavaScript" in a sentence.  

**Example Output:**  
The word "JavaScript" is highlighted in yellow.  

---

### 10. **Drag and Drop Element**  
**Description:**  
Allow a user to drag a `<div>` element and drop it in a specific container.  

**Tips:**  
- Use `dragstart`, `dragover`, and `drop` events.  
- Track the dragged element using `event.dataTransfer`.  

**Example Input:**  
User drags a box and drops it into another container.  

**Example Output:**  
The box moves to the container where it was dropped.