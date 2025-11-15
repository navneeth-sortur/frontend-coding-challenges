const sum = require("./solution");

console.log("Running tests...\n");

console.log(sum(8, 9)); // 17

console.log(sum(4)(8)()); // 12

// Infinite currying
console.log(sum(1)(2)(3)()); // 6
console.log(sum(10)(20)(30)(40)()); // 100

// Large chain
console.log(sum(1)(2)(3)(4)(5)(6)()); // 21

// Empty sum (edge case)
try {
  console.log(sum()());
} catch (err) {
  console.log("Caught error as expected:", err.message);
}

// Non-number input
try {
  console.log(sum(10)("x")());
} catch (err) {
  console.log("Caught error as expected:", err.message);
}

// Mixed invalid direct call
try {
  console.log(sum(10, "20"));
} catch (err) {
  console.log("Caught error as expected:", err.message);
}

// Negative numbers
console.log(sum(5)(-10)(20)()); // 15

// Floating numbers
console.log(sum(1.5)(2.5)(3)()); // 7

// Very large numbers
// console.log(sum(1000000000)(2000000000)()); // 3000000000

console.log("\nAll test cases executed.");
