// LIFO - Last In First Out
class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const node = new StackNode(value);
    node.next = this.top;
    this.top = node;
    this.length++;
  }

  pop() {
    if (!this.top) return null;
    const value = this.top.value;
    this.top = this.top.next;
    this.length--;
    return value;
  }

  peek() {
    return this.top ? this.top.value : null;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }
}

const stack = new Stack();

stack.push("Hello");
stack.push("World");

console.log(stack);

console.log(stack.pop()); // "World"

console.log(stack.peek()); // "Hello"
console.log(stack.size()); // 1
console.log(stack.isEmpty()); // false
