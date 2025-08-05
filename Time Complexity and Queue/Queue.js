class Queue {
  constructor() {
    this.items = [];
  }

  // Enqueue: Add element to the end
  enqueue(value) {
    this.items.push(value);
  }

  // Dequeue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // Search
  search(value) {
    return this.items.indexOf(value);
  }

  // Utility: Check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Utility: Print the queue
  printQueue() {
    console.log("Queue:", this.items.join(" <- "));
  }
}

const q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

q.printQueue();

console.log(q.dequeue());

console.log(q.search(20)); 

console.log(q.search(50));

