function createStore(initialState) {
  let state = initialState;
  const listeners = new Set();

  return {
    // Returns the current state
    getState: () => state,

    // Updates state and notifies listeners
    setState: newState => {
      state = { ...state, ...newState };
      listeners.forEach(listener => listener(state));
    },

    // Subscribes a listener and returns an unsubscribe function
    subscribe: listener => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    }
  };
}

// Export for testing
module.exports = { createStore };
