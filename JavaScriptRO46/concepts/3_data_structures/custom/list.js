class Node {
  constructor(value) {
    this.value = value; // actual value like: object, string, number etc
    this.next = null; // Pointer to the next element
    this.prev = null; // Pointer to the previous element
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const newNode = new Node(value); // { value: "Cartofi", next: null, prev: null }
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // { value: "Cartofi", next: { value: "New node", prev: null, next: null }, prev: null }
      newNode.prev = this.tail; // { value: "New node", prev: { value: "Cartofi", next: null, prev: null }, next: null }
      this.tail = newNode; // { value: "New node", prev: { value: "Cartofi", next: null, prev: null }, next: null }
    }
  }
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  remove(value) {
    if (!this.head) {
      return; // exit the method
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        if (currentNode === this.head && currentNode === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (currentNode === this.head) {
          this.head = this.head.next;
          this.head.prev = null;
        } else if (currentNode === this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
        }
      }
      currentNode = currentNode.next;
    }
  }
  print() {
    let currentNode = this.head;
    let result = "";
    while (currentNode) {
      result += currentNode.value + (!currentNode.next ? "" : "<->");
      currentNode = currentNode.next;
    }
    console.log("[DoubleLinkedList]: ", result);
  }
  printReverse() {
    let currentNode = this.tail;
    let result = "";
    while (currentNode) {
      result += currentNode.value + (!currentNode.prev ? "" : "<->");
      currentNode = currentNode.prev;
    }
    console.log("[DoubleLinkedList]: ", result);
  }
}

const doubleLinkedList = new LinkedList();

doubleLinkedList.append("Cartofi");
console.log(doubleLinkedList);
doubleLinkedList.append("Porumb");
console.log(doubleLinkedList);
doubleLinkedList.prepend("Sfecla");
console.log(doubleLinkedList);
doubleLinkedList.append("Ardei");
console.log(doubleLinkedList);
doubleLinkedList.print(); // "Sfecla<->Cartofi<->Porumb<->Ardei"
doubleLinkedList.printReverse(); // "Ardei<->Porumb<->Cartofi<->Sfecla"

const users = new Array(2);
