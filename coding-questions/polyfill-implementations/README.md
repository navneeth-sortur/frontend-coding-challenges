# Polyfills for call, apply, and bind

## Problem Statement

Implement polyfills for the JavaScript function methods:

- `Function.prototype.call`
- `Function.prototype.apply`
- `Function.prototype.bind`

These methods allow developers to explicitly set the value of `this` when invoking functions.

---

## Requirements

### 1. `call` Polyfill

Invoke a function immediately with a specified `this` context and arguments passed individually.

### 2. `apply` Polyfill

Similar to `call`, but arguments should be provided as an array.

### 3. `bind` Polyfill

Return a **new function** with `this` permanently bound to a specific value.  
The new function should also support partial arguments (like native `bind`).

---

## Example

```js
function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}
const user = { name: "Alice" };

greet.myCall(user, "Hello", "!");
greet.myApply(user, ["Hi", "!!"]);

const greetUser = greet.myBind(user, "Hey");
greetUser("!!!");
```

---

## Approach

For `call`:

1. Ensure the context is an object.
2. Temporarily assign the function to the object.
3. Invoke it with individual arguments.
4. Delete the temporary property.

For `apply`:
Same as `call`, but handle arguments as an array.

For `bind`:

1. Capture the function and the bound `this`.
2. Return a new function that:
   - Preserves the bound `this`
   - Accepts additional arguments
3. Works even when used with `new` (bonus behavior).

---

## Time Complexity

- `call` : **O(1)**
- `apply` :**O(n)** (due to argument spreading).
- `bind` : **O(1)**

## Space Complexity

- All polyfills : **O(1)**

---

## Files

- `solution.js` - main polyfill implementations.
- `test.js` - test cases to validate correctness.
