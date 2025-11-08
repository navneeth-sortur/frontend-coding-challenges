const throttle = require("./solution");

function logEvent() {
  const time = new Date().toLocaleTimeString();
  console.log(`Throttled call at ${time}`);
}

const throttledFn = throttle(logEvent, 1000);

console.log("Testing throttle...");

let interval = setInterval(() => {
  throttledFn();
}, 200); // Call every 200ms

// Stop after 3 seconds
setTimeout(() => {
  clearInterval(interval);
  console.log(
    "Test completed - function should have executed ~3 times in total."
  );
}, 3000);
