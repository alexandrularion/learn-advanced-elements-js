// DOM = DOCUMENT OBJECT MODEL
// DOM is a programming interface for web documents.
// DOM represents the structure of a document as a tree of objects.
// Each objects coresponds to a part of the page. (i.e. <html/>, <head/>, <body/>)

// What is the relation between DOM and JavaScript?
// In JS, you can interact with the DOM to read and modify the content, structure, and style of web pages dynamically.

// Whenever we want to interact with them DOM we can use the document object
console.log(document); // {....}

// How can we modify or read DOM elements in JavaScript?

// Step 1 - Choose the element you want read or modify from the HTML code
// <h1> ... </h1>
// Step 2 - Select the element using the JavaScript document methods
// i.e. document.getElementById, document.getElementsByClassName, document.getelementsByName ...
// i.e. document.querySelector, document.querySelectorAll (new)
const headingElements = document.getElementsByTagName("h1");
const firstHeadingElement = headingElements[0]; // HTMLElement | undefined

console.log(firstHeadingElement); // {...}
console.log(
  firstHeadingElement.clientWidth,
  firstHeadingElement.clientHeight,
  firstHeadingElement.style
); // {...}

// Step 3 - (Optional) Choose what you want to modify
firstHeadingElement.innerText = "Hello world from JavaScript!";
firstHeadingElement.style.color = "#ff0000";

// Step 4 - (Optional) Choose what kind of event you want to add
firstHeadingElement.addEventListener("click", (event) => {
  event.target.style.color = "#0000FF";
});
