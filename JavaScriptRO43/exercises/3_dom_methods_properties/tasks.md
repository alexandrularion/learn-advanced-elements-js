# JavaScript DOM Exercises (Properties and Methods)

This set of exercises will help you get hands-on practice with JavaScript DOM manipulation using properties and methods. These exercises range from easy to medium difficulty and focus on selecting, modifying, and interacting with elements on a webpage.

## Exercise 1: Change Element Text
- **Objective**: Select a paragraph element with an ID of `myPara` and change its text content to "Hello World!".
- **Details**: You are required to select the element using its `id` and modify the content displayed on the webpage by updating the text.
- **Hint**: Use the `textContent` or `innerHTML` property to update the text.

## Exercise 2: Change Element Background Color
- **Objective**: Select a `div` element with a class of `box` and change its background color to blue.
- **Details**: You'll learn how to modify the styling of an element using JavaScript by targeting its class and updating the background color.
- **Hint**: Use the `style` property to set the `backgroundColor`.

## Exercise 3: Update an Input Field Value
- **Objective**: Select an input field with an ID of `userInput` and set its value to "New Value".
- **Details**: Practice interacting with form elements by updating the value of an input field.
- **Hint**: Use the `value` property to update the input field.

## Exercise 4: Hide an Element
- **Objective**: Select a paragraph element with an ID of `hiddenPara` and hide it by setting its `display` style to `none`.
- **Details**: This exercise helps you learn how to hide elements on the page using JavaScript by manipulating the CSS `display` property.
- **Hint**: Use `style.display` to hide the element.

## Exercise 5: Change Image Source
- **Objective**: Select an image element with an ID of `myImage` and change its `src` attribute to point to a new image URL.
- **Details**: You'll learn how to update attributes of HTML elements, such as changing the source of an image dynamically.
- **Hint**: Use the `setAttribute` method or directly update the `src` property.

## Exercise 6: Toggle a Class on Click
- **Objective**: Add a click event listener to a button with an ID of `toggleButton`. When the button is clicked, toggle a class `active` on a `div` with a class of `box`.
- **Details**: This exercise introduces event handling and DOM manipulation by toggling classes based on user interactions.
- **Hint**: Use `classList.toggle` inside the event listener.

## Exercise 7: Count List Items
- **Objective**: Select an unordered list with a class of `itemList` and display the number of list items (`li`) inside it by updating the text content of a `span` with an ID of `countSpan`.
- **Details**: You'll learn how to count elements inside a container and display the result by manipulating the DOM.
- **Hint**: Use `getElementsByTagName` or `querySelectorAll` to count the `li` elements, then update the `textContent` of the span.

## Exercise 8: Create and Append New Element
- **Objective**: Create a new `li` element with the text "New Item" and append it to an unordered list with a class of `itemList`.
- **Details**: Practice creating new elements dynamically and appending them to the DOM using JavaScript.
- **Hint**: Use `createElement` to create the new list item and `appendChild` to add it to the list.

## Exercise 9: Remove an Element
- **Objective**: Select and remove a `div` element with an ID of `removeMe` from the DOM.
- **Details**: Learn how to remove elements from the DOM by selecting and deleting them programmatically.
- **Hint**: Use `removeChild` or `remove` to delete the element.

## Exercise 10: Change Multiple Elements' Styles
- **Objective**: Select all paragraphs inside a `div` with a class of `textContainer` and change their font size to `18px`.
- **Details**: This exercise teaches you how to loop through multiple elements and apply a style change to all of them.
- **Hint**: Use `querySelectorAll` to select all paragraph elements and loop through them to update their `style.fontSize`.
