# Throttle Function

## Problem Statement

Implement a **throttle function** in JavaScript.

The **throttle** function ensures that a given function is **only executed once in a specified time interval**, even if it is called multiple times within that interval.

This is useful for performance optimization during high-frequency events like:

- Scrolling
- Window resizing
- Mouse movements

---

## Example

```js
function onScroll() {
  console.log("Scroll event triggered at", Date.now());
}

const throttledScroll = throttle(onScroll, 2000);

// Even if you scroll continuously,
// `onScroll` will only execute once every 2 seconds.
window.addEventListener("scroll", throttledScroll);
```

---

## Approach

1. The `debounce` function takes two arguments:
   - `fn`: The function to throttle.
   - `limit`: The minimum time (in ms) between two executions.
2. Keep track of the last executed timestamp.
3. On each call:
   - If enough time has passed since the last call, execute the function.
   - Otherwise, ignore the call.

---

## Time Complexity

- **O(1)** per call.

## Space Complexity

- **O(1)**

---

## Files

- `solution.js` - main throttle implementation.
- `test.js` - sample tests to validate behavior.
