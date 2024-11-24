const array = [
  {
    id: 0,
    name: "Romanica",
    capital: "Bucharest",
    population: 19000000,
  },
  {
    id: 1,
    name: "Republica Moldova",
    capital: "Chisinau",
    population: 4000000,
  },
  {
    id: 2,
    name: "Germanica",
    capital: "Berlin",
    population: 82000000,
  },
];

// 1. push() - Adds one or more elements to the end of the array
array.push({
  id: 3,
  name: "Ukraina",
  capital: "Kyiv",
  population: 37000000,
});
console.log(array); // [...,{ id: 3, name: "Ukraina", capital: "Kyiv", population: 37000000, }]

// 2. pop() - Removes the last element from the array
const element = array.pop();
console.log(element);
console.log(array); // [...,{ id: 2, name: "Germanica", capital: "Berlin", population: 82000000, },]

// 3. shift() - Removes the first element from the array
const shiftedElement = array.shift();
console.log(shiftedElement); // { id: 0, name: "Romanica", capital: "Bucharest", population: 19000000, },
console.log(array); // [{ id: 1, name: "Republica Moldova", capital: "Chisinau", population: 4000000, },...]

// 4. sort() - Sorts the elements depending on the property of the element
array.sort((a, b) => a.population - b.population);
console.log(array); //

// 5. forEach() - Iterates through all the array elements
array.forEach((value, index) => {
  console.log(value, index);
});

// 6. map() - Iterates throguh all the array elements and must return a value within the callback
// it creates a new list with the values returned by the callback, with the same length as original
const newArray = array.map((value, index) => {
  return `<div> 
            <h1>${value.name}</h1>
            <p>${value.population}</p>
        </div>`;
});
console.log(newArray); // ['<div> \n<h1>Republica Moldova</h1>\n<p>4000000</p>\n</div>', '<div> \n <h1>Germanica</h1>\n<p>82000000</p>\n</div>']

const countriesList = document.getElementById("countries-list");

newArray.forEach((card) => {
  const node = document.createElement("div");
  node.style.background = "#ededed";
  node.style.padding = "20px";
  node.style.borderRadius = "20px";
  node.innerHTML = card;
  countriesList.appendChild(node);
});
