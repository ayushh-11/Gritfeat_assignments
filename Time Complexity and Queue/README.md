
# 📘 Time Complexity Analysis of JavaScript Functions

This document presents the **time complexity analysis** of various JavaScript functions. Each function demonstrates different algorithmic patterns with clear explanations.

---

## 🔹 `print()`

```js
function print() {
  console.log("Hello World");
}
```
**Time Complexity**: `O(1)`

---

## 🔹 `sumArray(arr)`

```js
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
```
**Time Complexity**: `O(n)`

---

## 🔹 `findX(arr)`

```js
function findX(arr) {
  let x = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 10) {
        x.push([arr[i], arr[j]]);
      }
    }
  }
  return x;
}
```
**Time Complexity**: `O(n^2)`

---

## 🔹 `getFirstTwoElements(arr)`

```js
function getFirstTwoElements(arr) {
  if (arr.length < 2) {
    return null;
  }
  const first = arr[0];
  const second = arr[1];
  return [first, second];
}
```
**Time Complexity**: `O(1)`

---

## 🔹 `processTwoArrays(arr1, arr2)`

```js
function processTwoArrays(arr1, arr2) {
  let sum1 = 0;
  for (const item of arr1) {
    sum1 += item;
  }
  let sum2 = 0;
  for (const item of arr2) {
    sum2 += item;
  }
  return sum1 + sum2;
}
```
**Time Complexity**: `O(n + m)`

---

## 🔹 `countF(n)`

```js
function countF(n) {
  let count = 0;
  for (let i = 1; i < n; i = i * 2) {
    count++;
  }
  return count;
}
```
**Time Complexity**: `O(log n)`

---

## 🔹 `findElement(sortedArr, target)`

```js
function findElement(sortedArr, target) {
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === target) {
      return i;
    }
  }
  return -1;
}
```
**Time Complexity**:  
- **Best Case**: O(1) – target at the start  
- **Average Case**: O(n/2) ≈ O(n) – target in the middle  
- **Worst Case**: O(n) – target at the end or not found

---

## 🔹 `recursiveSum(n)`

```js
function recursiveSum(n) {
  if (n <= 0) {
    return 0;
  }
  return n + recursiveSum(n - 1);
}
```
**Time Complexity**: `O(n)`  
- **Best Case**: When `n <= 0` → O(1)  
- **Worst Case**: When `n` is large → O(n)

---

## 🔹 `dFunction(arr)`

```js
function dFunction(arr) {
  const seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      return true;
    }
    seen[arr[i]] = true;
  }
  return false;
}
```
**Time Complexity**:  
- **Best Case**: O(1) – duplicate found early  
- **Worst Case**: O(n) – no duplicates

---

## 🔹 `repeatLog(arr)`

```js
function repeatLog(arr) {
  for (let i = 0; i < arr.length; i++) {
    let repetitions = arr[i];
    for (let j = 0; j < repetitions; j++) {
      console.log('hello');
    }
  }
}
```
**Time Complexity**: `O(2^n)` in worst cases depending on the values in `arr`

---