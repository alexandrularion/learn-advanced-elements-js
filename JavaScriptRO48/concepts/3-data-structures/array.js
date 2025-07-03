const products = [{ name: "Masina de spalat", price: 20 }];

// Push
// Appends new elements to the end of an array, and returns the new length of the array.
products.push({ name: "Aspirator", price: 100 });

products.push(
  ...[
    { name: "Frigider", price: 50 },
    { name: "Espresor", price: 30 },
  ]
); // More objects at the same time (... spread operator)

// Unshit
// Inserts new elements at the start of an array, and returns the new length of the array.
products.unshift({
  name: "Uscator de par",
  price: 15,
});

console.log(products);
// Output:
// [
//   { name: "Uscator de par", price: 15 },
//   { name: "Masina de spalat", price: 20 },
//   { name: "Aspirator", price: 100 },
//   { name: "Frigider", price: 50 },
//   { name: "Espresor", price: 30 },
// ];

// Pop
// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
const lastProduct = products.pop();
console.log(lastProduct); // { name: "Espresor", price: 30 }

// Shift
// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
const firstProduct = products.shift();
console.log(firstProduct); // { name: "Uscator de par", price: 15 },

// CRUD - Create (add) Read (get) Update (edit) Delete (remove)

// Frontend -> Request (HTTP) -> GET Products -> Backend ->
// Response (HTTP) -> Search Products -> Frontend

// Statuses: 200x(OK, Created), 300x (Redirect),
// 400x (Not found, Bad Request, Forbidden), 500x (Server error)

// Content Format: JSON (Most used), From Control (Forms),
// File (HTML), XML (Often used for config)

// API - Application Programming Interface (AKA Backend -> Logic / Database / Services)

// MyApp - Our Platform ?? Cookies - Accept All / Accept only required
// Twillio (Provider for Email, SMS, Phone Calls) - Third Party - Required
// Google Analytics (Collect data related to user behavior) - Third Party - Optional
// Stripe (Payments and more) - Third Party - Required

const product1 = { name: "Aspirator", price: 100 };
const product2 = { name: "Aspirator", price: 100 };
const product3 = { name: "Aspirator", price: 100 };
const product4 = { name: "Aspirator", price: 100 };
const product5 = { name: "Aspirator", price: 100 };
const product6 = { name: "Aspirator", price: 100 };

// Wordpress (PHP - another language)

// Preturi minime de start (100-500 Utilizatori)
// 6E / luna - frontend
// 10E / luna - backend
// 15E / luna - baza de date
// 31E - luna (custom frontend / backend product)

// Wordpress (PHP)
// 10E (100-500 utlizatori) - 120E / an
