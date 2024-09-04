const heading = document.getElementById("my-unique-heading");

console.log(document); // DOM

if (heading === null) {
  console.log("Cannot find element with id: my-unique-heading");
} else {
  heading.innerText = "I changed the hello world text.";
  heading.addEventListener("click", () => {
    heading.style.color = "red";
    heading.innerText = "Loading...";

    // we change back to the original properties
    setTimeout(() => {
      heading.style.color = "#000";
      heading.innerText = "I changed the hello world text.";
    }, 3000);
  });
}
