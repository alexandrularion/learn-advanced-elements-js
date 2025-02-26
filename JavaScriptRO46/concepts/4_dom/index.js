// Tip: How to interact with DOM (DOM Methods)
// Tip: We can access the DOM methods within the "document" object

console.log(document); // Tip: This is our DOM
console.log(window); // Tip: width / height / mouse position

const headingElement = document.getElementById("custom-heading");
const bodyElement = document.getElementsByTagName("body").item(0);

// Tip: Element Properties
console.log(headingElement); // Tip: You should see an object within console

console.log(headingElement.attributes); // NamedNodeMap {0: id, id: id, length: 1}
console.log(headingElement.style); // { accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}

headingElement.style.fontSize = "200px";
headingElement.style.color = "#0000ff";

headingElement.innerHTML = `<span> Inserted from JS </span>
                            <span> Multiline text </span>`;

headingElement.innerText = "Applied innerText from JS";

console.log(headingElement.className); // "my-heading my-heading--lg"
console.log(headingElement.classList); // ['my-heading', 'my-heading--lg', value: 'my-heading my-heading--lg']
console.log(headingElement.children); // HTMLCollection []
console.log(headingElement.childNodes); // NodeList [text]
console.log(headingElement.clientWidth); // 1109 (px)
console.log(headingElement.clientHeight); // 690 (px)
console.log(headingElement.firstChild); // "Applied innerText from JS"
console.log(headingElement.lastChild); // "Applied innerText from JS"

// Tip: Element Events

// Tip: In most of the frameworks we name it with camelCase (onClick)
headingElement.onclick = function (event) {
  console.log(event);
  // Tip: We can do any action and side effects using the click event
  event.target.style.color = "#ff0000";
};

headingElement.ondblclick = (event) => {
  // Tip: Exploring the Element Methods
  const paragraphElement = document.createElement("p");
  paragraphElement.innerText =
    "This text was added by double clicking on heading.";

  paragraphElement.setAttribute("class", "custom-text");

  bodyElement.appendChild(paragraphElement);
};
