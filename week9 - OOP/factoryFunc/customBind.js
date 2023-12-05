const bind = (fn, context) => {
    // Return a new function that, when called, sets the context and calls the original function with arguments
    return function (...args) {
      // Call the original function with the specified context and combined arguments
      return fn.call(context, ...args);
    };
};