console.log("Numbers 1 to 20 (skip divisible by 3, stop at divisible by 5):");

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }

  if (i % 5 === 0) {
    break; 
  }

  console.log(i);
}


// Bonus: Sum of even numbers from 1 to 100
let sum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log("\nSum of even numbers from 1 to 100:", sum);

for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = i; j >= 1; j--) {
    line += j + " ";
  }
  console.log(line.trim());
}