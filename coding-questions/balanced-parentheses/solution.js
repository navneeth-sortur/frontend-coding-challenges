function isBalanced(exp) {
  const stack = [];
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "["
  };

  for (let char of exp) {
    if (["(", "{", "["].includes(char)) {
      stack.push(char);
    } else if ([")", "}", "]"].includes(char)) {
      if (stack.pop() !== pairs[char]) {
        return "Not Balanced";
      }
    }
  }

  return stack.length === 0 ? "Balanced" : "Not Balanced";
}

// Export for testing
module.exports = isBalanced;
