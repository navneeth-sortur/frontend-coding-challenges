# Balanced Parentheses

## Problem Statement

Given an expression string `exp`, write a program to examine whether the pairs and the orders of `{}`, `()`, and `[]` are correct in `exp`.

The expression is considered **Balanced** if every opening bracket has a corresponding and correctly placed closing bracket.

---

## Examples

**Example 1**

Input: exp = "[()]{}{()()
}"
Output: Balanced

**Example 2**

Input: exp = "[(])"
Output: Not Balanced

---

## Approach

1. Use a **stack** data structure.
2. Traverse each character in the string:
   - If it's an opening bracket (`(`, `{`, `[`), push it to the stack.
   - If it's a closing bracket, check if the top of the stack has the matching opening bracket.
   - If not matched or stack is empty → return "Not Balanced".
3. After traversal, if the stack is empty → "Balanced", else "Not Balanced".

---

## Time Complexity

- **O(n)** — where `n` is the length of the string.

## Space Complexity

- **O(n)** — for the stack storage.

---

## Files

- `solution.js` — main implementation.
- `test.js` — sample test cases.
