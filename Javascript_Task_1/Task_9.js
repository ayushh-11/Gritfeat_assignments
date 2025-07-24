
// Traditional Function Expression
const multiply = function(a, b) {
  return a * b;
};

console.log("Traditional Function:");
console.log("3 * 4 =", multiply(3, 4)); // Output: 12

// Arrow Function Version
const multiplyArrow = (a, b) => a * b;

console.log("\nArrow Function:");
console.log("5 * 6 =", multiplyArrow(5, 6)); // Output: 30

//  Bonus: Arrow Function with Logging
const multiplyWithLog = (a, b) => {
  const result = a * b;
  console.log(`Multiplying ${a} * ${b} = ${result}`);
  return result;
};

console.log("\nArrow Function with Logging:");
multiplyWithLog(7, 8); 
