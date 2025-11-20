const { unstableApi, withRetry } = require("./solution");

(async () => {
  console.log("=== Testing Retry Mechanism ===");

  try {
    const response = await withRetry(unstableApi, 4, 1500);
    console.log("Final Success:", response);
  } catch (err) {
    console.error("Final Error:", err.message);
  }

  console.log("\n=== Test Completed ===");
})();
