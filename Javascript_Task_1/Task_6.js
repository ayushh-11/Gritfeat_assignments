
console.log("3x3 Multiplication Table:\n");

for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += (i * j) + "\t";
  }
  console.log(row.trim());
}


// Bonus: 12x12 Multiplication Table

console.log("\n12x12 Multiplication Table:\n");


// Print table
for (let i = 1; i <= 12; i++) {
  let row ="";
  for (let j = 1; j <= 12; j++) {
    row += (i * j) + "\t";
  }
  console.log(row);
}
