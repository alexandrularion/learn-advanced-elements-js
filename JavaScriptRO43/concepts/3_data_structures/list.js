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
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
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
}

const doubleLinkedList = new LinkedList();

doubleLinkedList.append("Cartofi");
doubleLinkedList.append("Porumb");
doubleLinkedList.prepend("Sfecla");
doubleLinkedList.print(); // "Sfecla<->Cartofi<->Porumb"
