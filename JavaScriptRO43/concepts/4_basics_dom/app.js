const heading = document.getElementById("my-unique-heading");

if (heading === null) {
  console.log("Cannot find element with id: my-unique-heading");
} else {
  heading.innerText = "I changed the hello world text.";
}
