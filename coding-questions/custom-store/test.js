const { createStore } = require("./solution");

// Helper for readable time
const getTime = () =>
  new Date().toLocaleTimeString("en-US", { hour12: false }) +
  ":" +
  new Date().getMilliseconds();

console.log("==== Test 1: Basic State Update ====");
const store1 = createStore({ count: 0 });
store1.subscribe(state => console.log(`[${getTime()}] State updated:`, state));
store1.setState({ count: store1.getState().count + 1 });
store1.setState({ count: store1.getState().count + 2 });

/*
Expected Output:
[time] State updated: { count: 1 }
[time] State updated: { count: 3 }
*/

console.log("\n==== Test 2: Multiple Subscribers & Unsubscribe ====");
const store2 = createStore({ theme: "light" });

const unsub1 = store2.subscribe(state => console.log("Listener1:", state));
const unsub2 = store2.subscribe(state => console.log("Listener2:", state));

store2.setState({ theme: "dark" });
unsub1(); // unsubscribe first listener
store2.setState({ theme: "blue" });

/*
Expected Output:
Listener1: { theme: 'dark' }
Listener2: { theme: 'dark' }
Listener2: { theme: 'blue' }
*/

console.log("\n==== Test 3: Partial State Merge ====");
const store3 = createStore({ count: 0, user: { name: "Alice" } });
store3.subscribe(state => console.log("Updated:", state));

store3.setState({ count: 5 });
store3.setState({ user: { name: "Bob" } });

/*
Expected Output:
Updated: { count: 5, user: { name: 'Alice' } }
Updated: { count: 5, user: { name: 'Bob' } }
*/
