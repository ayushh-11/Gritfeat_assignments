# JavaScript Algorithm Problems with Time Complexity

---

## 1. Find if a Duplicate Exists in a List

```js
const findDuplicate = (arr) => {
  const seen = {};
  for (let num of arr) {
    if (seen[num]) return [num];
    seen[num] = true;
  }
  return [];
};

const data = [1, 3, 5, 2, 4, 5];
console.log(findDuplicate(data)); // [5]
```

**Time Complexity:** O(n)

---

## 2. Check if any Item from User Roles Exists in Required Roles

```js
const hasRequiredRole = (user, required) => {
  const map = {};
  for (let role of required) map[role] = true;
  for (let role of user) {
    if (map[role]) return true;
  }
  return false;
};

const userRoles = ['user', 'editor'];
const requiredRoles = ['admin', 'editor'];
console.log(hasRequiredRole(userRoles, requiredRoles)); // true
```

**Time Complexity:** O(n + m)

---

## 3. Find Common Elements Between Two Arrays

```js
const commonElements = (a1, a2) => {
  const set = new Set(a1);
  return a2.filter(item => set.has(item));
};

const a1 = [1, 4, 2, 8, 9];
const a2 = [7, 5, 0, 4, 1];
console.log(commonElements(a1, a2)); // [1, 4]
```

**Time Complexity:** O(n + m)

---

## 4. Filter Items Based on Allowed Keys

```js
const filterByAllowedKeys = (data, allowed) => {
  const allowedSet = new Set(allowed);
  return data.filter(item => allowedSet.has(item.key));
};

const data = [
  { key: 'name', value: 'John' },
  { key: 'email', value: 'john@example.com' },
  { key: 'age', value: 20 },
];
const allowedKeys = ['name', 'age'];
console.log(filterByAllowedKeys(data, allowedKeys));
```

**Time Complexity:** O(n)

---

## 5. Determine Whether Two Objects are Equal

```js
const sameObject = (a, b) => {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;
  for (let key of aKeys) {
    if (a[key] !== b[key]) return false;
  }
  return true;
};
```

**Time Complexity:** O(n)

---

## 6. Group Data by Category

```js
const groupByCategory = (products) => {
  return products.reduce((acc, item) => {
    const cat = item.categoryId;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});
};

const products = [
  { id: 1, name: 'Phone', categoryId: 2 },
  { id: 2, name: 'Shirt', categoryId: 1 },
  { id: 3, name: 'Charger', categoryId: 2 }
];

console.log(groupByCategory(products));
```

**Time Complexity:** O(n)

---

## 7. Binary Search with Merge Sort

```js
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

const merge = (left, right) => {
  const result = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
};

const binarySearch = (arr, target) => {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return true;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
};

const sorted = mergeSort([5, 2, 9, 1, 4]);
console.log(binarySearch(sorted, 4)); // true
```

**Time Complexity:** Merge Sort: O(n log n), Binary Search: O(log n)

---

## 8. Singly Linked List

```js
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

  append(data) {
    const newNode = new Node(data);
    if (!this.head) this.head = newNode;
    else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = newNode;
    }
    this.length++;
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insertAt(index, data) {
    if (index < 0 || index > this.length) return;
    if (index === 0) return this.prepend(data);
    const newNode = new Node(data);
    let prev = null, curr = this.head;
    for (let i = 0; i < index; i++) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = newNode;
    newNode.next = curr;
    this.length++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let prev = null, curr = this.head;
      for (let i = 0; i < index; i++) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = curr.next;
    }
    this.length--;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  search(data) {
    let curr = this.head;
    let index = 0;
    while (curr) {
      if (curr.data === data) return index;
      curr = curr.next;
      index++;
    }
    return -1;
  }
}
```

**Time Complexity:** Most operations are O(n), except `prepend`, `size`, `isEmpty` which are O(1)

---

## 9. Detect Cycle in Dependency Graph

```js
const hasCycle = (deps) => {
  const visited = new Set();
  const stack = new Set();
  const path = [];

  const dfs = (key) => {
    if (stack.has(key)) {
      path.push(key);
      return true;
    }
    if (visited.has(key)) return false;

    visited.add(key);
    stack.add(key);
    path.push(key);

    for (let dep of deps[key]?.dependsOn || []) {
      const nextKey = Object.keys(deps).find(k => deps[k].id === dep.id);
      if (nextKey && dfs(nextKey)) return true;
    }

    stack.delete(key);
    path.pop();
    return false;
  };

  for (let key in deps) {
    if (dfs(key)) {
      path.push(path[0]); // complete the cycle
      console.log("Cycle Path:", path);
      return true;
    }
  }
  return false;
};

const deps = {
  A: { id: 1, dependsOn: [{ id: 2 }] },
  B: { id: 2, dependsOn: [{ id: 3 }] },
  C: { id: 3, dependsOn: [{ id: 1 }] }
};

console.log(hasCycle(deps)); // true
```

**Time Complexity:** O(n + e) (DFS on graph)