// Example of manipulating the DOM with JS
const headings = document.getElementsByTagName("h1");
headings[0].innerText = "I've changed the text from JS.";

// DOM Methods and Properties
const paragraphElement = document.getElementById("description");
paragraphElement.innerHTML = `
    <span style="color: #00ff00"> Lorem ipsum </span>
    sit amet consectetur adipisicing elit.
`; // .innerHTML - gets or sets the HTML or XML markup contained within the element

const imageElement = document.getElementsByTagName("img")[0];
imageElement.setAttribute(
  "src",
  "https://images.pexels.com/photos/29609563/pexels-photo-29609563/free-photo-of-scenic-alpine-landscape-with-rustic-cabins.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
); // .setAttribute -  sets the value of an attribute on the specified element.

const formElement = document.querySelector("form");

const buttonElement = document.createElement("button");
buttonElement.setAttribute("type", "submit");
buttonElement.innerText = "Create account";
buttonElement.style =
  "background: #000; border: none; height: 40px; padding: 0 20px; color: #fff;";

formElement.appendChild(buttonElement); // .appendChild - adds a node to the end of the list of children of a specified parent node.

const inputElements = document.getElementsByClassName("text-input");
console.log(inputElements); // HTMLCollection - an object which contains both indexes and attribute names to extract the elements
console.log(inputElements.namedItem("name")); // .namedItem - helps us to extract easely the element by the name attribute
console.log(inputElements.namedItem("email"));

const nameInput = inputElements.namedItem("name");
nameInput.setAttribute("value", "John Doe");
nameInput.classList.add("edited"); // .classList.add - set a specific class to the element
nameInput.classList.remove("text-input"); // .classList.remove - delete a specific class from the element
console.log(nameInput.classList);

const biographyTextarea = document.getElementById("biography-textarea");
biographyTextarea.innerText = "I am a programmer enthusiast! :)))";
biographyTextarea.classList.add("invalid");

const passwordInput = document.querySelector("#password-input");
const passwordBtn = document.querySelector("#password-btn");

// Native Events and Event Listeners

// Native event: onclick
passwordBtn.onclick = function () {
  if (passwordInput.getAttribute("type") === "password") {
    passwordInput.setAttribute("type", "text");
    passwordBtn.innerText = "Hide password";
  } else {
    passwordInput.setAttribute("type", "password");
    passwordBtn.innerText = "Show password";
  }
};

// Native event: ondblclick = double click
imageElement.ondblclick = function () {
  if (imageElement.style.transform === "scale(1)") {
    imageElement.style.transform = "scale(1.2)";
  } else {
    imageElement.style.transform = "scale(1)";
  }
};

// Event listener: submit
formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  const values = {
    name: event.target[0].value,
    email: event.target[1].value,
    biography: event.target[2].value,
    password: event.target[3].value,
  };
  console.log(values);
  console.log("Callback", event);

  // Delete on double click event from image element
  imageElement.ondblclick = null;
});

// Event listener: focus
passwordInput.addEventListener("focus", function () {
  const body = document.querySelector("body");
  body.style.background = "#222";
  body.style.color = "#fff";
});

// Event listener: blur
function handleInputBlur() {
  const body = document.querySelector("body");
  body.style.background = "#fff";
  body.style.color = "#000";

  // Delete the blur event listener from password input element
  passwordInput.removeEventListener("blur", handleInputBlur);
}
passwordInput.addEventListener("blur", handleInputBlur);
