# Debounce Function

## Problem Statement

Implement a **debounce function** in JavaScript.

The debounce function limits the rate at which a function gets invoked.  
It ensures that the given function is **only executed after a certain amount of time has passed** since the last time it was called.

This is commonly used to improve performance in events like resizing, scrolling, or typing in a search box.

---

## Example

```js
function onResize() {
  console.log("Window resized!");
}

const debouncedResize = debounce(onResize, 300);

// When the resize event is triggered continuously,
// `onResize` will only execute **once**, 300ms after the last event.
window.addEventListener("resize", debouncedResize);
```

---

## Approach

1. The `debounce` function takes two arguments:
   - `fn`: The function to debounce.
   - `delay`: Time in milliseconds to wait before invoking fn.
2. It returns a new function that:
   - Clears the previous timer each time it’s called.
   - Starts a new timer.
   - Executes `fn` only after the delay passes without new calls.
3. After traversal, if the stack is empty → "Balanced", else "Not Balanced".

---

## Time Complexity

- **O(1)** per call (ignoring the delay timer overhead).

## Space Complexity

- **O(1)**

---

## Files

- `solution.js` — main debounce implementation.
- `test.js` — sample tests to validate behavior.
