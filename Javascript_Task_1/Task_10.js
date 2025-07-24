

function outer(addThis) {
  // outer captures the number to add
  function inner(x) {
    return x + addThis; // inner "remembers" addThis even after outer is done
  }
  return inner;
}

// Example Usage & Closure Demonstration


const add5 = outer(5); 
const add10 = outer(10); 

console.log("Using closures:");
console.log("add5(3):", add5(3));   // 8
console.log("add5(7):", add5(7));   // 12

console.log("add10(2):", add10(2)); // 12
console.log("add10(10):", add10(10)); // 20
