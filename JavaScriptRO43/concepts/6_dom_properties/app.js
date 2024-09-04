// Find and select the tag with '.container' class
const container = document.querySelector(".container");

// local JS object
const user = {
  name: "John doe",
  age: 24,
};

// Add raw HTML combined with JS data
container.innerHTML = `
    <p>Hello world</p>
    <div> 
      <h1> Hello, ${user.name}</h1>
      <p> ${user.name}: ${user.age}</p>
    </div>
`;

// Find and select the <img /> tag
const img = document.querySelector("img");

console.log(img.src); // ""

// Modify or set the 'src' attribute
img.src =
  "https://images.pexels.com/photos/19254459/pexels-photo-19254459/free-photo-of-elegant-couple-walking-on-the-pavement-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

// Modify or set the 'alt' attribute
img.alt = "Couple image";

console.log(img.src); // 'https://images.pexels.com/photos/19254459/pexels-pho....'

// Find and select the <p /> tag
const paragraph = document.querySelector(".paragraph");

if (user.age >= 20) {
  paragraph.style.color = "blue";
  paragraph.style.fontSize = "30px";
  paragraph.style.fontWeight = 700;
  paragraph.style.alignItems = "center";
}
