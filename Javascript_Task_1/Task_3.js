// ============================
// Task 3: If...Else with Logical Operators
// ============================

// Basic check: positive, negative, zero, divisible by 2 and 3
function checkNumber(num) {
  console.log(`\nChecking number: ${num}`);

  if (num > 0) {
    console.log("The number is positive.");
  } else if (num < 0) {
    console.log("The number is negative.");
  } else {
    console.log("The number is zero.");
  }

  if (num % 2 === 0 && num % 3 === 0) {
    console.log("The number is divisible by both 2 and 3.");
  } else {
    console.log("The number is NOT divisible by both 2 and 3.");
  }
}

// Challenge: check if number is a multiple of any number in the array
function checkMultiples(num, arr) {
  console.log(`\nChecking multiples for: ${num} in [${arr}]`);
  let isMultiple = false;

  for (let i = 0; i < arr.length; i++) {
    if (num % arr[i] === 0) {
      console.log(`${num} is a multiple of ${arr[i]}`);
      isMultiple = true;
    }
  }

  if (!isMultiple) {
    console.log(`${num} is not a multiple of any numbers in the array.`);
  }
}


// Test Examples

checkNumber(12);     // Positive and divisible by 2 and 3
checkNumber(-5);     // Negative and not divisible


checkMultiples(10, [2, 3, 5]);  // 10 is a multiple of 2 and 5
checkMultiples(7, [2, 3, 5]);   // 7 is not a multiple of any

