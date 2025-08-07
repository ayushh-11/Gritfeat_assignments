//Binary Search with Merge Sort

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

const merge = (l, r) => {
  const res = [];
  let i = 0, j = 0;
  while (i < l.length && j < r.length) {
    res.push(l[i] < r[j] ? l[i++] : r[j++]);
  }
  return res.concat(l.slice(i)).concat(r.slice(j));
};

const binarySearch = (arr, target) => {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) return true;
    if (arr[mid] < target) l = mid + 1;
    else r = mid - 1;
  }
  return false;
};

const input = [5, 1, 4, 2, 7];
const sorted = mergeSort(input);
console.log(binarySearch(sorted, 4)); // true

//Time complexity : O(nlogn)
