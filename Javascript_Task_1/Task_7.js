
function sumGreaterThanTen(arr) {
  let sum = 0;

  for (let num of arr) {
    if (num > 10) {
      sum += num;
    }
  }

  return sum;
}

// Average of Numbers Greater Than 10


function averageGreaterThanTen(arr) {
  let sum = 0;
  let count = 0;

  for (let num of arr) {
    if (num > 10) {
      sum += num;
      count++;
    }
  }

  if (count === 0) {
    return 0;
  }

  return sum / count;
}


// Test Examples


const numbers = [5, 12, 8, 20, 15, 3, 30];

console.log("Original array:", numbers);
console.log("Sum > 10:", sumGreaterThanTen(numbers));
console.log("Average > 10:", averageGreaterThanTen(numbers));
