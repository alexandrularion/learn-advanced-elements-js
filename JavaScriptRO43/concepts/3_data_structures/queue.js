class Queue {
  constructor() {
    this.items = {}; // { 0: "Shopper 1", 1: "Shopper 2", 2: "Shopper 3" }
    this.length = 0;
  }

  enqueue(value) {
    // value = "Shopper 1"
    this.items[this.length] = value; // { 0: "Shopper 1" }
    this.length++; // +1
  }
  dequeue() {
    if (this.isEmpty()) {
      return null; // return null and exit the method
    }
    const item = this.items[0]; // first element

    for (let i = 0; i < this.length; i++) {
      const item = this.items[i + 1]; //  Shopper 2
      this.items[i] = item; // { 0: "Shopper 2", 1: "Shopper 3"}
      if (i === this.length - 1) {
        delete this.items[i];
      }
    }
    this.length--; // -1

    return item;
  }
  front() {
    if (this.isEmpty()) {
      return null; // return null and exit the method
    }
    return this.items[0];
  }
  isEmpty() {
    return Object.keys(this.items).length === 0 && this.length === 0; // [0,1,2]
  }
  clear() {
    this.items = {};
    this.length = 0;
  }
  print() {
    // ["Shopper 1", "Shopper 2", "Shopper 3"] = "Shopper 1 -> Shopper 2 -> Shopper 3"
    console.log(Object.values(this.items).join(" -> "));
  }
}

const shop = new Queue();

shop.enqueue("Shopper 1");
shop.enqueue("Shopper 2");
shop.enqueue("Shopper 3");
console.log("[Queue]: Front ", shop.front()); // Only print: "Shopper 1"
console.log("[Queue]: Is Empty ", shop.isEmpty()); // false
shop.print(); // "Shopper 1 -> Shopper 2 -> Shopper 3"
console.log("[Queue]: Dequeue ", shop.dequeue()); // "Shopper 3"
shop.print(); // "Shopper 1 -> Shopper 2"
shop.clear();
shop.print(); // ""
