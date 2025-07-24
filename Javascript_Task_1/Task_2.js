
const str = "Hello, World!";
const num = 42;
const bool = true;
const obj = { name: "Alice", age: 25 };
let undef;
const nul = null;
const sym = Symbol("id");
const bigIntVal = 9007199254740991n;
const notANumber = NaN;


console.log("Data Types : ");
console.log("str:", typeof str);           // string
console.log("num:", typeof num);           // number
console.log("bool:", typeof bool);         // boolean
console.log("obj:", typeof obj);           // object
console.log("undef:", typeof undef);       // undefined
console.log("nul:", typeof nul);           // object 
console.log("sym:", typeof sym);           // symbol
console.log("bigIntVal:", typeof bigIntVal); // bigint
console.log("notANumber:", typeof notANumber); // number


// NaN behavior
console.log("\nNaN Behavior : ");
console.log("NaN + 5:", NaN + 5);             // NaN
console.log("NaN + 'hello':", NaN + "hello"); // "NaNhello"
console.log("NaN === NaN:", NaN === NaN);     // false
console.log("isNaN(NaN):", isNaN(NaN));       // true


// Type Coercion Examples
console.log("\nType Coercion : ");

console.log("\nstring + number => string")
console.log("'5' + 3:", '5' + 3); // "53"


console.log("\nnumber + boolean => number")
console.log("true + 2:", true + 2);   // 3 (true is coerced to 1)
console.log("false + 2:", false + 2); // 2 (false is coerced to 0)


console.log("\nstring + boolean => string")
console.log("'hello' + true:", 'hello' + true); // "hellotrue"

console.log("\nnumber + null => number")
console.log("10 + null:", 10 + null); // 10 (null coerced to 0)

console.log("\nundefined + number => NaN")
console.log("undefined + 3:", undefined + 3); // NaN

console.log("\nobject + string => string (object to string)")
console.log("{} + 'text':", {} + 'text'); // "[object Object]text"

// BigInt and Number cannot be mixed directly
try {
  console.log("BigInt + Number:", bigIntVal + 10);
} catch (err) {
  console.log("BigInt + Number: TypeError - cannot mix BigInt and Number");
}

// Boolean coercion in conditionals
console.log("\nBoolean Coercion in Conditionals : ");
console.log("Boolean(''):", Boolean(''));         // false
console.log("Boolean('hello'):", Boolean('hello')); // true
console.log("Boolean(0):", Boolean(0));           // false
console.log("Boolean(1):", Boolean(1));           // true
console.log("Boolean(null):", Boolean(null));     // false
console.log("Boolean(undefined):", Boolean(undefined)); // false

