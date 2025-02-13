// Tip: Built-in vs Custom data structures

// Built-in
const user = {
  name: "Ion Popescu",
  email: "ion.popescu@yahoo.com",
  age: 18,
}; // JS Object (built-in)

// JS without objects
const userName = "Ion Popescu";
const userEmail = "ion.popescu@yahoo.com";
const userAge = 18;

// Tip: User profile in a real scenario
const userProfile = {
  id: 101,
  username: "codeMaster",
  email: "codemaster@example.com",
  passwordHash: "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3", // (hashed password)
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
  age: 28,
  isActive: true,
  role: "developer",
  skills: ["JavaScript", "React", "Node.js", "CSS", "HTML"],
  experience: {
    years: 5,
    companies: ["TechCorp", "DevSolutions", "Freelance"],
  },
  address: {
    street: "123 Code Lane",
    city: "San Francisco",
    state: "CA",
    zip: "94105",
  },
  socialLinks: {
    github: "https://github.com/codemaster",
    linkedin: "https://linkedin.com/in/codemaster",
    twitter: "@codeMasterJS",
  },
  subscription: {
    plan: "Premium",
    renewalDate: "2025-06-15",
    isAutoRenew: true,
  },
  preferences: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
  },
  lastLogin: new Date("2025-02-10T14:30:00"),
  loginAttempts: 3,
  completedProjects: 12,
  favoriteTech: ["JavaScript", "TypeScript", "GraphQL"],
  updateProfile: function (newInfo) {
    Object.assign(this, newInfo);
  },
  getFullName: function () {
    return `${this.fullName.firstName} ${this.fullName.lastName}`;
  },
};

// Tip: How to access and call a method within userProfile object
console.log(userProfile.getFullName()); // Output: John Doe

// Tip: How to access a single property within userProfile object (dot notation)
console.log(userProfile.email); // Output: codemaster@example.com

// Tip: How to access nested objects
console.log(userProfile.experience.years); // Output: 5
console.log(userProfile.preferences.notifications.email); // Output: true

// JS Array (Built-in)
const products = [
  {
    id: 1,
    name: "Wireless Keyboard",
    category: "Electronics",
    price: 39.99,
    stock: 120,
    rating: 4.5,
    reviews: 240,
    tags: ["wireless", "keyboard", "accessory"],
    seller: {
      name: "TechGear",
      location: "San Francisco, CA",
    },
  },
  {
    id: 2,
    name: "Gaming Mouse",
    category: "Electronics",
    price: 29.99,
    stock: 80,
    rating: 4.7,
    reviews: 310,
    tags: ["gaming", "mouse", "RGB"],
    seller: {
      name: "GamerWorld",
      location: "New York, NY",
    },
  },
  {
    id: 3,
    name: "USB-C Charging Cable",
    category: "Accessories",
    price: 12.99,
    stock: 500,
    rating: 4.2,
    reviews: 150,
    tags: ["charging", "cable", "USB-C"],
    seller: {
      name: "FastCharge",
      location: "Los Angeles, CA",
    },
  },
  {
    id: 4,
    name: "Smartphone Stand",
    category: "Accessories",
    price: 14.99,
    stock: 300,
    rating: 4.6,
    reviews: 98,
    tags: ["stand", "phone", "adjustable"],
    seller: {
      name: "GadgetsPlus",
      location: "Chicago, IL",
    },
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 49.99,
    stock: 50,
    rating: 4.8,
    reviews: 420,
    tags: ["bluetooth", "speaker", "portable"],
    seller: {
      name: "SoundMax",
      location: "Miami, FL",
    },
  },
];

console.log(products); // Output: [....]
console.log(products.length); // Output: 5
console.log(
  products.push({
    id: 6,
    name: "Bluetooth Headset",
    category: "Electronics",
    price: 259.99,
    stock: 50,
    rating: 4.8,
    reviews: 420,
    tags: ["bluetooth", "speaker", "portable"],
    seller: {
      name: "SoundMax",
      location: "Miami, FL",
    },
  })
); // Output: 6
console.log(
  products.unshift({
    id: 10,
    name: "Wireless Headset",
    category: "Electronics",
    price: 259.99,
    stock: 50,
    rating: 4.8,
    reviews: 420,
    tags: ["bluetooth", "speaker", "portable"],
    seller: {
      name: "SoundMax",
      location: "Miami, FL",
    },
  })
); // Output: 7
console.log(products.pop()); // Output: { id: 6, name: "Bluetooth Headset", ...}
console.log(products.shift()); // Output: { id: 1, name: "Wireless Keyboard",... }

// Array loop methods - .map() , .forEach(), .filter(), .some(), .sort()
// Loop features: for(let incremetor=0; incrementor < 100; incrementor++){ //mycode }
// while() , do{}...while(){}, for(const myElement of myArray){}

console.log(products[4]); // Output: { id: 5, name: "Bluetooth Speaker", category: "Electronics",...}
console.log(products[0]); // Output: {  id: 1, name: "Wireless Keyboard", category: "Electronics",...}

products.forEach((element, index) => {
  // Tip: we can write our code  here
  // Tip: the code we write is valid for each step (iteration)
  console.log(element, index); // Output: { id: ..., }, 1
});
