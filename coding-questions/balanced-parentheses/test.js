const isBalanced = require("./solution");

const testCases = [
  { input: "[()]{}{[()()]()}", expected: "Balanced" },
  { input: "[(])", expected: "Not Balanced" },
  { input: "{[()]}", expected: "Balanced" },
  { input: "{[(])}", expected: "Not Balanced" },
  { input: "", expected: "Balanced" }
];

testCases.forEach(({ input, expected }, index) => {
  const result = isBalanced(input);
  console.log(
    `Test ${index + 1}:`,
    result === expected
      ? "✅ Passed"
      : `❌ Failed (Expected ${expected}, got ${result})`
  );
});
