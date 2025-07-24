
function factorial(n) {

  if (typeof n !== 'number' || isNaN(n)) {
    return "Error: Input must be a number.";
  }

  if (!Number.isInteger(n)) {
    return "Error: Factorial is only defined for integers.";
  }

  if (n < 0) {
    return "Error: Factorial is not defined for negative numbers.";
  }

  
  if (n === 0 || n === 1) {
    return 1;
  }


  return n * factorial(n - 1);
}

// Test Examples


console.log("factorial(5):", factorial(5));     // 120
console.log("factorial(0):", factorial(0));     // 1
console.log("factorial(1):", factorial(1));     // 1

console.log("\nInvalid Inputs:");
console.log("factorial(-3):", factorial(-3));   // Error
console.log("factorial('abc'):", factorial("abc")); // Error
console.log("factorial(3.5):", factorial(3.5)); // Error
