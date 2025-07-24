// ============================
// Task 8: Greeting Repeater
// ============================

function repeatGreeting(greeting, times = 3) {
  
  if (!Number.isInteger(times) || times <= 0) {
    console.log("Error: 'times' must be a positive integer.");
    return;
  }

  for (let i = 0; i < times; i++) {
    console.log(greeting);
  }
}


// Test Examples

console.log("Example 1: (No times passed)");
repeatGreeting("Greeting");

console.log("\nExample 2: (Passed 5");
repeatGreeting("Greeting", 5);

console.log("\nExample 3 (Passed -2):");
repeatGreeting("Greeting", -2); 

