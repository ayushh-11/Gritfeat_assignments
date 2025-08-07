# JavaScript Algorithm Problems

---

## 1. Find if a Duplicate Exists in a List

> Example:
```js
const data = [1, 3, 5, 2, 4, 5];
// Answer: [5]
```

---

## 2. Check if any Item from User Roles Exists in Required Roles

> Example:
```js
const roles = ['admin', 'manager', 'supervisor', 'editor', 'viewer', 'owner'];
const userRoles = ['user', 'editor'];
const requiredRoles = ['admin', 'editor'];
// Answer: true
```

---

## 3. Find Common Elements Between Two Arrays

> Example:
```js
const a1 = [1, 4, 2, 8, 9];
const a2 = [7, 5, 0, 4, 1];
// Answer: [1, 4]
```

---

## 4. Filter Items Based on Allowed Keys

> Example:
```js
const data = [
  { key: 'name', value: 'John' },
  { key: 'email', value: 'john@example.com' },
  { key: 'age', value: 20 },
];
const allowedKeys = ['name', 'age'];
// Answer: [ { key: 'name', value: 'John' }, { key: 'age', value: 20 } ]
```

---

## 5. Determine Whether Both Keys and Values of Two Objects Are Equal

> Example:
```js
const d1 = { name: 'John', email: 'john@example.com', age: 20 };
const d2 = { name: 'John', email: 'john@example.com', age: 20 };
const d3 = { name: 'Jane', email: 'jane@example.com', age: 20 };

// sameObject(d1, d2) => true
// sameObject(d1, d3) => false
```

---

## 6. Group the Related Data by Category

> Example:
```js
const products = [
  { id: 1, name: 'Phone', categoryId: 2 },
  { id: 2, name: 'Shirt', categoryId: 1 },
  { id: 3, name: 'Charger', categoryId: 2 }
];
// Expected Output:
// {
//   '1': [ { id: 2, name: 'Shirt', categoryId: 1 } ],
//   '2': [
//     { id: 1, name: 'Phone', categoryId: 2 },
//     { id: 3, name: 'Charger', categoryId: 2 }
//   ]
// }
```

---

## 7. Implement Binary Search Algorithm

- Sort the array using one of the sorting algorithms: Selection, Insertion, Merge, Quick, or Heap Sort
- Then implement binary search to find an element

---

## 8. Implement Singly Linked List

Operations should include:
- `append(data)`: Add data at the end
- `prepend(data)`: Add data at the beginning
- `insertAt(index, data)`: Add data at a specific index
- `removeAt(index)`: Remove data at a specific index
- `size()`: Return size of the list
- `isEmpty()`: Check if the list is empty
- `search(data)`: Find data in the list

---

## 9. Detect Cycles in a Dependency Structure (Optional)

> Example:
```js
const deps = {
  A: { id: 1, dependsOn: [ { id: 2 } ] },
  B: { id: 2, dependsOn: [ { id: 3 } ] },
  C: { id: 3, dependsOn: [ { id: 1 } ] }
};
// Answer: true
// If there’s a cycle, find the cycle path:
// ['A', 'B', 'C', 'A']
```

---

## 10. Explain the Concept of a Binary Search Tree (BST)

- What is a BST?
- Include JavaScript implementation
