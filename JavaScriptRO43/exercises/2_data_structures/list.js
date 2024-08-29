/**
    Linked List Exercise: Append and Print
        Create a simple LinkedList class that allows you to add elements to the end and print the entire list. Implement the add and printList methods.
    Tips:
        Start with a Node class that has a data property and a next pointer.
        In add, if the list is empty, set the head to the new node; otherwise, traverse to the end and add the new node.
        In printList, traverse the list and collect elements into a string, then print it.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      // TODO: Set `head` to `newNode`
    } else {
      let current = this.head;
      // TODO: Traverse to the end of the list
      // TODO: Set the `next` of the last node to `newNode`
    }
  }

  printList() {
    let current = this.head;
    let list = [];

    // TODO: Traverse the list and push each node's data into `list`

    console.log(list.join(" -> "));
  }
}

// Example:
let linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.printList(); // 10 -> 20 -> 30
