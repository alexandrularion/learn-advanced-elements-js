// Showcase that JS is a object oriented programming language
// All the examples below showcase the data types (primitive)
const language = "JavaScript"; // string
const isLogged = true; // boolean
const age = 22; // number
const products = null; // null
let currentUser; // undefined

console.log(language.slice(1, 4)); // "Java"
console.log(age.toFixed(2)); // 22.00
console.log(isLogged.valueOf()); // true
console.log(products); // null
console.log(currentUser); // undefined

// All the examples below showcase the data types (non-primitive)
const product = {
  name: "My product 1",
}; // Object
console.log(product.name); // "My product 1"

const users = [
  {
    name: "John Doe",
    age: 23,
    married: false,
  },
  {
    name: "Jane Doe",
    age: 21,
    married: false,
  },
  {
    name: "Smith Adele",
    age: 49,
    married: true,
  },
  {
    name: "Anne Jordan",
    age: 41,
    married: true,
  },
]; // Array

console.log(users.length); // 2
console.log(users); // [...]

users.push({
  name: "Jessica Wall",
  age: 33,
  married: false,
}); // Tip: Add one or more elements at the end of the array

console.log(users); // [..., { name: "Jessica Wall", age: 33, married: false }]

// Tip: Remove an element from the end of the array
console.log(users.pop()); // { name: "Jessica Wall", age: 33, married: false }

// Tip: Add one or more elements at the start of the array
users.unshift([
  {
    name: "Michael Johnson",
    age: 40,
    married: true,
  },
  {
    name: "David Smith",
    age: 50,
    married: true,
  },
]); // [{ name: "Michael Johnson", age: 40, married: true, }, { name: "David Smith", age: 50, married: true, },...]

console.log(users); // [...]

// Tip: Remove the first element from the start of the array
users.shift(); // [{ name: "Michael Johnson", age: 40, married: true, }]
