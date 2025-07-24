

function multiplyAll(arr, multiplier) {
  
  return arr.map(function(num) {
    return num * multiplier;
  });
}


// Test Examples


const numbers = [1, 2, 3, 4, 5];

console.log("Original array:", numbers);
console.log("Multiplied by 2:", multiplyAll(numbers, 2)); // [2, 4, 6, 8, 10]
console.log("Multiplied by 5:", multiplyAll(numbers, 5)); // [5, 10, 15, 20, 25]

// Simple sumAll function using reduce
function sumAll(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

const nums = [1, 2, 3, 4, 5];
console.log("Sum:", sumAll(nums)); // Output: 15

