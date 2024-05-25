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
