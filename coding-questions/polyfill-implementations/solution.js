// Polyfill for Function.prototype.call

Function.prototype.myCall = function (context, ...args) {
  if (context === null || context === undefined) {
    context = globalThis; // default to global context
  }

  context = Object(context); // convert primitives to objects

  const fn = Symbol("fn"); // unique property to avoid collision
  context[fn] = this; // assign function to context

  const result = context[fn](...args); // call function
  delete context[fn]; // cleanup

  return result;
};

// Polyfill for Function.prototype.apply

Function.prototype.myApply = function (context, args = []) {
  if (context === null || context === undefined) {
    context = globalThis;
  }

  context = Object(context);

  if (!Array.isArray(args)) {
    throw new TypeError("Arguments must be an array");
  }

  const fn = Symbol("fn");
  context[fn] = this;

  const result = context[fn](...args);
  delete context[fn];

  return result;
};

// Polyfill for Function.prototype.bind

Function.prototype.myBind = function (context, ...bindArgs) {
  const originalFn = this;

  function boundFn(...callArgs) {
    // If used with "new", ignore provided context
    if (this instanceof boundFn) {
      return new originalFn(...bindArgs, ...callArgs);
    }

    return originalFn.apply(context, [...bindArgs, ...callArgs]);
  }

  boundFn.prototype = Object.create(originalFn.prototype);
  return boundFn;
};

// Export for testing
module.exports = {
  myCall: Function.prototype.myCall,
  myApply: Function.prototype.myApply,
  myBind: Function.prototype.myBind
};
