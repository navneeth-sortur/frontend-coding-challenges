# Sum Function (Normal, Curried & Infinite Currying)

## Problem Statement

Implement a **sum function** in JavaScript that can work in multiple ways:

### ✔ Normal call

```js
sum(8, 9); // 17
```

### ✔ Curried call

```js
sum(8)(9)(); // 17
```

### ✔ Infinite currying

```js
sum(1)(2)(3)(); // 6
```

The function should correctly compute the total regardless of how many arguments are passed or whether they are passed all at once or through chained calls.

---

### Example

```js
console.log(sum(5, 7)); // 12
console.log(sum(5)(7)()); // 12
console.log(sum(1)(2)(3)()); // 6
console.log(sum(10)(20)(30)()); // 60
```

---

### Approach

1. If two arguments are passed directly (`sum(8, 9)`), return their sum immediately.
2. If only one argument is passed (`sum(8)`), return a function that waits for the next argument.
3. For infinite currying:
   - Keep collecting numbers until an empty call `()` is made.
4. When `()` is encountered, compute the total using all collected arguments.

---

## Time Complexity

- **O(n)** - where n is the number of arguments collected.

## Space Complexity

- **O(n)** -stores collected arguments until evaluation.

---

## Files

- `solution.js` - the main implementation supporting all modes.
- `test.js` - tests validating multiple usages and edge cases.
