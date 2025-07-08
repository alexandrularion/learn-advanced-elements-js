// FIFO - First In First Out
class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(value) {
    const node = new QueueNode(value);
    if (!this.rear) {
      this.front = this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    this.length++;
  }

  dequeue() {
    if (!this.front) return null;
    const value = this.front.value;
    this.front = this.front.next;
    if (!this.front) this.rear = null;
    this.length--;
    return value;
  }

  peek() {
    return this.front ? this.front.value : null;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }
}

const queue = new Queue();

queue.enqueue("World");
queue.enqueue("Hello");
queue.enqueue("Programming");
queue.dequeue("Hello");
console.log(queue.isEmpty()); // false
console.log(queue.peek());
console.log(queue.size()); // 2
