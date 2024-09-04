// Find and select the element with id "heading-1"
const heading = document.getElementById("heading-1");

// Find and select the elements with class "paragraph"
const paragraphs = document.getElementsByClassName("paragraph");

// Find and select the <form /> elements
const forms = document.getElementsByTagName("form");

// Find and select the elements with attribute value of "text"
const textTypes = document.getElementsByName("text");

console.log("Heading element: ", heading);
console.log("Paragraph elements: ", paragraphs);
console.log("Forms elements: ", forms);
console.log("Elements with attribute value of 'text': ", textTypes);

// Create a UNIQUE <p /> tag (element)
const messageElement = document.createElement("p");

// Cretate a Unique <button /> tag
const buttonElement = document.createElement("button");

// Add a text inside the <p /> tag
messageElement.innerText = "Loading page...";

// Add a text inside the <button /> tag
buttonElement.innerText = "Save";

// Find and select the <body /> tag
const body = document.querySelector("body");

// Add <p /> tag at the end of <body /> tag
body.appendChild(messageElement);

// Add <button /> tag at the end of <form /> tag
forms[0].appendChild(buttonElement);

// Insert the <p /> tag between paragraphs
body.insertBefore(messageElement, paragraphs[1]);

// Delete the <button /> tag
forms[0].removeChild(buttonElement);

// Replace <p /> tag with <button /> tag within <body />
// body.replaceChild(buttonElement, messageElement);

const messageSpanElement = document.createElement("span");
messageSpanElement.innerText = "Page loaded.";
messageElement.appendChild(messageSpanElement);
