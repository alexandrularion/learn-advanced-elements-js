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

// Tip: Sort the elements in ascending order
const ascendingSortedUsers = users.sort((a, b) => a.age - b.age);
console.log(ascendingSortedUsers);

// Tip: Sort the elements in descending order
const descendingSortedUsers = users.sort((a, b) => b.age - a.age);
console.log(descendingSortedUsers);

// Tip: Filter the elements based on specific value
const filteredUsers = users.filter((user) => user.married);
// Falsy values: '', 0, null, undefined, false, NaN
console.log(filteredUsers);

// Tip: Filter the elements based on multiple values
const filteredUsers2 = users.filter((user) => user.married && user.age > 45);
console.log(filteredUsers2);

// Tip: Map as a data structure
const persons = new Map();

// Tip: Use .set() method to add a new key-value pair
persons.set(1, { name: "Jane Doe", id: 245566 });
persons.set(2, { name: "John Doe", id: 339922 });

// Tip: Use .get() method to retrieve information about a value within map
console.log("Map -", persons.get(1)); // { name: "Jane Doe", id: 245566 }

// Tip: Use .size property to get the current length of the object
console.log("Map -", persons.size); // 2

// Tip: Use .delete() method to remove any key-value pair from the map
persons.delete(1);

console.log("Map -", persons.size); // 1

console.log(persons.get(1)); // undefined

// Tip: Check if there is an element with the specified key
console.log("Map -", persons.has(2)); // true
console.log("Map -", persons.has(1)); // false

// Tip: Iterate over all the key-value pairs
persons.forEach((person, index) => {
  console.log("Map -", person.name, index);
});

// Tip: Set as a data structure
const uniquePersons = new Set();

uniquePersons.add({ name: "Jane Doe", id: 245566 });
uniquePersons.add({ name: "Jane Doe", id: 245566 });
uniquePersons.add({ name: "John Doe", id: 339922 });

// Tip: The objects have unique references and they can't be compared (deduplicated)
console.log(uniquePersons);

console.log(uniquePersons.size); // 3

// Tip: Use clear() when you want to remove all the data
uniquePersons.clear();

console.log(uniquePersons); // Set(0) {}
