var people = [];
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  walk() {
    console.log(`${this.name} ${this.surname} walks`);
  }
}

function generatePeople() {
  const names = ["John", "Kate"];
  const surnames = ["Doe", "Mitt"];

  // The condition of the for loop was buggy
  // It was adjusted to the length of the names array (list)
  for (let i = 0; i < names.length; i++) {
    // i = 1
    // 1 < 2 (names.length = 2)
    people.push(new Person(names[i], surnames[i]));
  }
}

function makePeopleWalk() {
  people.forEach(function makeOnePersonWalk(person) {
    person.walk();
  });
}

window.onload = function onLoad() {
  generatePeople();
  makePeopleWalk();
};

//DEBUGGING task

//Fibonacci sequence
function fibo(n) {
  var a = 0;
  var b = 1;
  var arr = [a, b];
  var c = 0;

  //every element of the sequence is the sum of two previous ones
  for (let i = 2; i < n; i++) {
    c = a + b;

    // swap the variables values
    a = b;
    b = c;
    arr.push(c);
  }
  return arr;
}

var f = fibo(10);

//displays: [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
//should be: [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
console.log(f);

//DEBUGGING exercise

//finding n-th power of x
function power(x, n) {
  var result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
    // result = result * x;
  }
  return result;
}

var p = power(2, 3);

//displays: 256, should be 8
console.log(p);
