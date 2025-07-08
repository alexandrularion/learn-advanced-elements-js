class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const node = new ListNode(value);
    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) curr = curr.next;
      curr.next = node;
    }
    this.length++;
  }

  prepend(value) {
    const node = new ListNode(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  delete(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let curr = this.head;
    while (curr.next && curr.next.value !== value) {
      curr = curr.next;
    }

    if (curr.next) {
      curr.next = curr.next.next;
      this.length--;
    }
  }

  find(value) {
    let curr = this.head;
    while (curr) {
      if (curr.value === value) return curr;
      curr = curr.next;
    }
    return null;
  }

  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}

const list = new LinkedList();

list.append(2);
list.append(4);
list.append(1000);
list.append(500);
list.prepend(5);
list.prepend(10);
const element = list.find(2);
console.log("element found: ", element);
list.delete(5);
list.print();
