//Linked List Implementation


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Append: Add data at the end
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.length++;
  }

  // Prepend: Add data at the beginning
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  // InsertAt: Add data at a specific index
  insertAt(index, data) {
    if (index < 0 || index > this.length) {
      console.log("Index out of bounds");
      return;
    }

    if (index === 0) {
      this.prepend(data);
      return;
    }

    const newNode = new Node(data);
    let curr = this.head;
    let prev = null;
    let i = 0;

    while (i < index) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    newNode.next = curr;
    prev.next = newNode;
    this.length++;
  }

  // RemoveAt: Remove node at a specific index
  removeAt(index) {
    if (index < 0 || index >= this.length) {
      console.log("Index out of bounds");
      return;
    }

    let curr = this.head;
    if (index === 0) {
      this.head = curr.next;
    } else {
      let prev = null;
      let i = 0;

      while (i < index) {
        prev = curr;
        curr = curr.next;
        i++;
      }

      prev.next = curr.next;
    }

    this.length--;
  }

  // Size: Return size of list
  size() {
    return this.length;
  }

  // isEmpty: Return true if list is empty
  isEmpty() {
    return this.length === 0;
  }

  // Search: Find node by data
  search(data) {
    let curr = this.head;
    let index = 0;
    while (curr) {
      if (curr.data === data) return index;
      curr = curr.next;
      index++;
    }
    return -1; // Not found
  }

  // Print: Display all nodes
  print() {
    let curr = this.head;
    let result = '';
    while (curr) {
      result += curr.data + ' -> ';
      curr = curr.next;
    }
    console.log(result + 'null');
  }
}

const list = new SinglyLinkedList();

list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.insertAt(2, 15);   // Insert 15 at index 2
list.print();           // 5 -> 10 -> 15 -> 20 -> 30 -> null

list.removeAt(3);       // Remove item at index 3 (20)
list.print();           // 5 -> 10 -> 15 -> 30 -> null

console.log("Size:", list.size());          // Size: 4
console.log("Is Empty:", list.isEmpty());   // Is Empty: false
console.log("Search 15:", list.search(15)); // Search 15: 2
console.log("Search 100:", list.search(100)); // Search 100: -1

//