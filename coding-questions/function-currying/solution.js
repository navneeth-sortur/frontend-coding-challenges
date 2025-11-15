function sum(...args) {
  if (args.length === 0) {
    throw new Error("At least one number must be provided");
  }

  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] !== "number") {
      if (i === 0) {
        throw new Error("First argument must be a number");
      } else if (i === 1) {
        throw new Error("Second argument must be a number");
      } else {
        throw new Error(`Argument at position ${i + 1} must be a number`);
      }
    }
  }

  if (args.length >= 2) {
    return args.reduce((acc, val) => acc + val, 0);
  }

  let total = args[0];

  const curried = (...nextArgs) => {
    if (nextArgs.length === 0) {
      return total;
    }

    if (typeof nextArgs[0] !== "number") {
      throw new Error("All arguments must be numbers");
    }

    total += nextArgs.reduce((acc, val) => acc + val, 0);

    return curried;
  };

  return curried;
}

module.exports = sum;
