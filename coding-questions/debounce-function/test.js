const debounce = require("./solution");

// A simple mock function for testing
function mockFn() {
  console.log("Function executed at", Date.now());
}

// Create a debounced version
const debouncedFn = debounce(mockFn, 500);

console.log("Testing debounce...");

// Simulate rapid calls
debouncedFn();
debouncedFn();
debouncedFn();

setTimeout(() => {
  debouncedFn();
}, 300);

setTimeout(() => {
  console.log(
    "Final check after 1s — should have executed only once at the end."
  );
}, 1000);
