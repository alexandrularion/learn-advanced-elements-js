// DOM - Document Object Model

console.log(document); // Object
console.log(window); // Object

// 1. Use a specific selector method
/**
    document.getElementById
    document.getElementsByClassName
    document.getElementsByName
    document.getElementsByTagName

    // NEW
    document.querySelector
    document.querySelectorAll
 */

const body = document.getElementsByTagName("body")[0];

console.log(body); // Body element

// 2. We can do a series of operations
// Create new HTML element, delete HTML element, update HMTL element, find an HMTL element

console.log(body.children); // HTMLCollection (includes script tag)
console.log(body.attributes); // NamedNodeMap {length: 0}
console.log(body.style); // CSSStyleDeclaration (Object)

body.style.backgroundColor = "#000"; // the style object allows us to update style properties

const paragraphElement = document.createElement("p"); // createElement allows us to create a new element (p, div, h1 etc)
paragraphElement.innerText = "Paragraph added from JS"; // innerText allows us to update the text of the element
paragraphElement.style.color = "#fff";

body.appendChild(paragraphElement); // add a new node / existing node to the body

console.log(body.lastChild); // prints the last child ??? paragraph
console.log(body.firstChild); // pront the first child ??? script
console.log(body.clientHeight);
console.log(body.clientWidth);
console.log(body.clientTop); // x coordinate
console.log(body.clientLeft); // y coordinate

const buttonElement = document.createElement("button");
buttonElement.innerText = "Click me";
body.prepend(buttonElement); // add a new node / existing  node before any element within body

let counter = 0;

// 3. Add events (click, mouseenter etc)
buttonElement.addEventListener("click", function (event) {
  console.log(event);
  // Do anything you want
  // HTTP call (with fetch), update other elements already in DOM
  // create other elements
  paragraphElement.style.color = "#ff9900";
  paragraphElement.style.fontSize = "20px";

  // Update a global variable outside the function
  //   counter = counter + 1;
  counter += 1;
  console.log("counter: ", counter);
  paragraphElement.innerText = `Your counter value is: ${counter}`;

  // show a pop up message
  window.alert("You clicked the 'Click me' button");
});

paragraphElement.addEventListener("mouseenter", function (event) {
  console.log(event);

  window.alert("The cursor entered the paragraph area");
});
