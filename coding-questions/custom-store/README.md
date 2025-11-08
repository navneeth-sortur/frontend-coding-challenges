# Problem: Create a Custom Store (State Management)

### Problem Statement

Implement a function **`createStore(initialState)`** that acts as a lightweight state management system, similar to Redux or Zustand.

The store should:

1. Hold an internal `state` initialized with `initialState`.
2. Provide a method `getState()` to return the current state.
3. Provide a method `setState(newState)` to update and merge the new state with the existing one.
4. Provide a method `subscribe(listener)` that allows registering a listener function.
   - Every time the state changes, all subscribed listeners should be called with the updated state.
   - The `subscribe` method should return an **unsubscribe function** that removes the listener when called.

### Example Usage

```js
const store = createStore({ count: 0 });

store.subscribe(state => {
  console.log("State updated:", state);
});

store.setState({ count: store.getState().count + 1 });
store.setState({ count: store.getState().count + 2 });
```

**Output:**
State updated: { count: 1 }
State updated: { count: 3 }

---

### Expected Features

- ✅ Supports multiple subscribers
- ✅ Allows unsubscribe functionality
- ✅ Merges partial updates into the existing state
- ✅ Notifies all listeners on every state change

---

### Concepts Tested

- Closures in JavaScript
- Pub-Sub (Publish/Subscribe) Pattern
- State immutability using spread operator
- Functional programming and observer design pattern

---

## Files

- `solution.js` — main implementation.
- `test.js` — sample test cases.
