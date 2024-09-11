const paragraph = document.querySelector("p");
const heading = document.querySelector("h1");

const generateColor = (str, opacity) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const blue = ((hash & 0xff) % 100) + 150; // Adjusted range for more variation
  const red = (((hash >> 8) & 0xff) % 100) + 150; // Adjusted range for more variation
  const green = (((hash >> 16) & 0xff) % 100) + 150; // Adjusted range for more variation
  // Ensure that the values are within the valid range (0 to 255)
  const clamp = (value) => Math.min(255, Math.max(0, value));
  const color = `rgba(${clamp(red)}, ${clamp(green)}, ${clamp(
    blue
  )}, ${opacity})`;

  // Add generated color within paragraph text
  paragraph.innerText = color;

  // Modify the color of the paragraph with the one generated
  paragraph.style.color = color;
};

const handleChange = (input) => {
  console.log(input); // Treat input param like is a normal element
  console.log("input type: ", input.type);
  console.log("input value: ", input.value);
  console.log("handleChange was called");

  // Add the written text from input inside the heading above
  heading.innerText = input.value;
};

// Triggered when the DOM content was loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("The DOM was loaded.");

  // Empty state for paragraph
  paragraph.innerText = "No color generated.";

  // Empty state for heading
  heading.innerText = "Insert job name.";
});

// Triggered when the user hover with mouse on heading element
heading.addEventListener("mouseenter", (event) => {
  console.log(event);

  heading.style.transition = "0.5s ease-in-out";
  heading.style.transform = "scale(1.5) translateX(200px)";
});

const handleMouseLeave = (event) => {
  console.log(event);

  heading.style.transform = "scale(1) translateX(0)";
  heading.removeEventListener("mouseleave", handleMouseLeave);
};

// Triggered when the user unhover the heading element
heading.addEventListener("mouseleave", handleMouseLeave);
