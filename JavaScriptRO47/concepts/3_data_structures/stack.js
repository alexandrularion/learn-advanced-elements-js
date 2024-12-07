class Stack {
  constructor() {
    this.items = {}; // { 0: "Book 1", 1: "Book 2", 2: "Book 3" }
    this.length = 0;
  }

  push(value) {
    // value = "Book 1"
    this.items[this.length] = value; // { 0: "Book 1" }
    this.length++; // +1
  }
  pop() {
    if (this.isEmpty()) {
      return null; // return null and exit the method
    }
    const item = this.items[this.length - 1]; // last element
    delete this.items[this.length - 1];
    this.length--; // -1
    return item;
  }
  peek() {
    if (this.isEmpty()) {
      return null; // return null and exit the method
    }
    return this.items[this.length - 1];
  }
  isEmpty() {
    return Object.keys(this.items).length === 0 && this.length === 0; // [0,1,2]
  }
  clear() {
    this.items = {};
    this.length = 0;
  }
  print() {
    // ["Book 1", "Book 2", "Book 3"] = "Book 1 -> Book 2 -> Book 3"
    console.log(Object.values(this.items).join(" -> "));
  }
}

const books = new Stack();

books.push("Book 1");
books.push("Book 2");
books.push("Book 3");
console.log("[Stack]: Peek ", books.peek()); // Only print: "Book 3"
console.log("[Stack]: Is Empty ", books.isEmpty()); // false
books.print(); // "Book 1 -> Book 2 -> Book 3"
console.log("[Stack]: Pop ", books.pop()); // "Book 3"
books.print(); // "Book 1 -> Book 2"
books.clear();
books.print(); // ""
