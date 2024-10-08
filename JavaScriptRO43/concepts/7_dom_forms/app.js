const form = document.querySelector("form");
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

console.log(form.children);

form.addEventListener("submit", async (event) => {
  console.log(event);

  event.preventDefault();

  // Find and select the password paragraph error message if exists
  const passwordParagraph = document.querySelector("#password-paragraph");

  console.log(form.children.namedItem("email").value);
  console.log(form.children.namedItem("password").value);

  // Get values from each input that is available in the form
  const emailValue = form.children.namedItem("email").value;
  const passwordValue = form.children.namedItem("password").value; // the password from the input

  const isPasswordValid = passwordValue.match(passwordRegex); // true or false
  if (isPasswordValid) {
    if (passwordParagraph) {
      passwordParagraph.style.display = "none";
    }
  } else {
    if (passwordParagraph) {
      passwordParagraph.style.display = "flex";
    } else {
      const paragraphElement = document.createElement("p");
      paragraphElement.innerText =
        "The password should have at least 6 chars, one digit, and one special symbol.";
      paragraphElement.id = "password-paragraph";
      form.appendChild(paragraphElement);
    }
  }

  // You can do an HTTP REQUEST to compare and loggin the user
  const response = await fetch("api.mydomain.com/api/login", {
    method: "POST",
    body: {
      email: emailValue,
      password: passwordValue,
    },
  });

  const body = response.json();
  console.log(body); // { jwtToken: "12938ansdbasvdo1237apsdlas6e1823iqbsd", message: "The user is logged in." }
});
