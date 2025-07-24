
var globalVar = "I am a global var";
let globalLet = "I am a global let";
const globalConst = "I am a global const";

console.log("Global Scope:");
console.log(globalVar);  
console.log(globalLet);    
console.log(globalConst);  

function testScope() {
  
  var functionVar = "I am scoped to the function";
  let functionLet = "I am also scoped to the function";
  const functionConst = "I am a constant in the function";

  console.log("\nInside function:");
  console.log(functionVar);  
  console.log(functionLet);   
  console.log(functionConst); 
}

testScope();

// Block Scope
if (true) {
  var blockVar = "I am a var in block (but still global)";
  let blockLet = "I am a let in block";
  const blockConst = "I am a const in block";
}

console.log("\nBlock Scope:");
console.log(blockVar);   // Accessible (var is not block scoped)


// Reassigning and Redeclaring
console.log("\nReassigning and Redeclaring:");
let uname = "Alice";
uname = "Bob"; // Reassignment is allowed
console.log("let Reassigned:", uname);

const city = "Paris";
try {
  city = "London"; // Reassignment not allowed
} catch (err) {
  console.log("const cannot be reassigned");
}

let x = 10;
try {
  let x = 20;
} catch (err) {
  // let cannot be redeclared in the same scope"
}

const y = 30;
try {
  const y = 40;
} catch (err) {
  // const cannot be redeclared in the same scope
}

var z = 50;
var z = 60;
console.log("var redeclared:", z);


// Bonus: Hoisting

function hoisting() {
  console.log("\nHoisting Example:");

  console.log(a); // undefined

  try {
    console.log(b); // ReferenceError
  } catch (err) {
    console.log("b is in temporal dead zone");
  }

  try {
    console.log(c); // ReferenceError
  } catch (err) {
    console.log("c is in temporal dead zone");
  }

  var a = 1;
  let b = 2;
  const c = 3;

  console.log("After declaration:");
  console.log(a);
  console.log(b); 
  console.log(c); 
}

hoisting();
