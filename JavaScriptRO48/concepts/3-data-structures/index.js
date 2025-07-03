// Primitive Data Types
// String ("My text is 123"), Number (1,2,3,4...), Boolean (true/false), Undefined, Null, Symbol
// BigInt

// Non-Primitive Data Types
// Function, Array, Set, Map, Object, Math

let sum = 20; // Float = 20.00, Int = 20, Long Int = 999 999 999 999 999 999

// We can include all data types inside the Array
const dataStructure = [
  2,
  "Hello world",
  true,
  undefined,
  null,
  Symbol("hello"),
  999999999999999999,
  {
    name: "John Doe",
    age: 30,
  },
  () => {
    return 10;
  },
  Math.sqrt(20),
  ["Hello World", "Learning programming"],
  new Map(),
  new Set(),
];

// Array of objects
// {} - object literal (short syntax)
// [] - array literal (short syntax)
const users = [
  {
    name: "John Doe",
    age: 20,
    email: "john.doe@gmail.com",
  },
  {
    name: "Jane Doe",
    age: 35,
    email: "jane.doe@gmail.com",
  },
  {
    name: "John Wick",
    age: null,
    email: null,
  },
];

function updateUsers() {
  users.forEach((user) => {
    console.log(user);
    console.log(user.email);
  });
}
