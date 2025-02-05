// A function that computes some value based on two inputs
function computeValue(a, b, c, d) {
  return anotherFunction(b + 931, c);
}

// An Immediately Invoked Function Expression (IIFE)
// Purpose: To perform some initialization or shuffling logic
(function (generatorFunction, targetValue) {
  // Get the array from the generator function
  var array = generatorFunction();

  // Infinite loop to process the array until a condition is met
  while (true) {
      try {
          // Perform a series of mathematical operations and comparisons
          var result =
              -parseInt(anotherFunction(1087, "tCbP")) / 1 +
              (parseInt(anotherFunction(627, "l3WM")) / 2) *
                  (parseInt(anotherFunction(303, "v3$$")) / 3) +
              (parseInt(anotherFunction(1232, "^uVV")) / 4) *
                  (parseInt(anotherFunction(343, "FC5u")) / 5) +
              parseInt(anotherFunction(990, "8t(X")) / 6 +
              parseInt(anotherFunction(834, "K0Tc")) / 7 +
              parseInt(anotherFunction(424, "K0Tc")) / 8 -
              (parseInt(anotherFunction(849, "9NiL")) / 9) *
                  (parseInt(anotherFunction(949, "DbWt")) / 10);

          // If the result matches the target value, exit the loop
          if (result === targetValue) {
              break;
          } else {
              // Otherwise, rotate the array
              array.push(array.shift());
          }
      } catch (error) {
          // On error, also rotate the array
          array.push(array.shift());
      }
  }
})(initializeArray, 191841);

// Function that generates an array of strings
function initializeArray() {
  var obfuscatedArray = [
      "string1",
      "string2",
      "string3",
      // many more strings...
  ];

  // Return the array when the function is invoked
  initializeArray = function () {
      return obfuscatedArray;
  };

  return obfuscatedArray;
}

// A higher-order function that executes a callback once
var executeOnce = (function () {
  var executed = true; // Ensures the callback is executed only once
  return function (context, callback) {
      var onceFn = executed
          ? function () {
                if (callback) {
                    var result = callback.apply(context, arguments);
                    callback = null; // Prevent further execution
                    return result;
                }
            }
          : function () {};
      executed = false;
      return onceFn;
  };
})();

// Another IIFE, performing environment checks or obfuscation logic
var environmentChecker = executeOnce(this, function () {
  var getGlobalObject = function () {
      try {
          return Function(
              "return (function() {}.constructor(\"return this\")())"
          )();
      } catch (error) {
          return typeof window !== "undefined" ? window : globalThis;
      }
  };

  var globalObject = getGlobalObject();
  var regex = new RegExp("[obfuscation-pattern]", "g");
  var replacement = ".some-obfuscated-string".replace(regex, "").split(";");

  // Logic to identify specific keys in the global object
  var key1, key2, key3, key4;
  for (var key in globalObject) {
      if (matchesPattern(key, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
          key1 = key;
          break;
      }
  }

  // Similar checks for other keys
  for (var subKey in globalObject[key1]) {
      if (matchesPattern(subKey, 6, [5, 110, 0, 100])) {
          key2 = subKey;
          break;
      }
  }

  // Additional processing based on identified keys
  var result1 = globalObject[key1][key2];
  var result2 =
      globalObject[key1][key3] && globalObject[key1][key3][key4];

  // Use the results for further logic...
});

// Utility function to match a key against a pattern
function matchesPattern(string, length, pattern) {
  if (string.length !== length) return false;
  for (var i = 0; i < length; i++) {
      for (var j = 0; j < pattern.length; j += 2) {
          if (i === pattern[j] && string.charCodeAt(i) !== pattern[j + 1]) {
              return false;
          }
      }
  }
  return true;
}

// Another wrapper function for obfuscation or deferred execution
function anotherFunction(index, key) {
  var array = initializeArray();

  // Cached function for performance
  anotherFunction = function (newIndex, newKey) {
      newIndex -= 297; // Adjust index to access the array
      return array[newIndex];
  };

  return anotherFunction(index, key);
}
'use strict';

/**
 * Executes the obfuscated function a0_0x140c9d.
 * This function contains logic for decoding and dynamic evaluation.
 */
a0_0x140c9d();

/**
 * Dynamic function to retrieve or compute values based on obfuscated logic.
 * @param {number} _0x12fc8b - The input value.
 * @param {string} _0x379a68 - The decryption key or additional input.
 * @returns {string} - The decrypted or retrieved value.
 */
function a0_0x322d(_0x12fc8b, _0x379a68) {
    // Array of encoded strings or data
    var _0x5c6464 = a0_0x2812();

    // Overwrite the function for caching results
    a0_0x322d = function (_0x22c8cb, _0x3841ac) {
        // Compute an index into the array
        _0x22c8cb = _0x22c8cb - 297;
        var _0x5bae19 = _0x5c6464[_0x22c8cb];

        // Initialize additional functionality if not already done
        if (a0_0x322d.oAsZIb === undefined) {
            // Function for Base64 decoding
            var _0x5f04dc = function (_0x2e1bba) {
                let decodedStr = '';
                let encodedStr = '';
                let temp;
                let buffer;
                let currentIndex = 0;

                for (let i = 0; (buffer = _0x2e1bba.charAt(i++));) {
                    if (~buffer) {
                        temp = currentIndex % 4
                            ? temp * 64 + buffer
                            : buffer;
                        if (currentIndex++ % 4) {
                            decodedStr += String.fromCharCode(255 & (temp >> (-2 * currentIndex & 6)));
                        }
                    }
                    buffer = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(buffer);
                }
                return decodeURIComponent(decodedStr.split('').map(c => '%' + c.charCodeAt(0).toString(16).padStart(2, '0')).join(''));
            };

            // RC4 encryption/decryption function
            var _0x95971c = function (input, key) {
                let s = [];
                let j = 0;
                let result = '';
                input = _0x5f04dc(input);

                // Initialize the key-scheduling array
                for (let i = 0; i < 256; i++) {
                    s[i] = i;
                }
                for (let i = 0; i < 256; i++) {
                    j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
                    [s[i], s[j]] = [s[j], s[i]]; // Swap
                }

                // Generate the keystream
                let i = 0;
                j = 0;
                for (let char of input) {
                    i = (i + 1) % 256;
                    j = (j + s[i]) % 256;
                    [s[i], s[j]] = [s[j], s[i]]; // Swap
                    result += String.fromCharCode(char.charCodeAt(0) ^ s[(s[i] + s[j]) % 256]);
                }

                return result;
            };

            a0_0x322d.RfIhEW = _0x95971c;
            _0x12fc8b = arguments;
            a0_0x322d.oAsZIb = true;
        }

        // Retrieve or decrypt the cached value
        var cachedValue = _0x12fc8b[_0x22c8cb];
        if (!cachedValue) {
            if (a0_0x322d.mBvwzV === undefined) {
                a0_0x322d.mBvwzV = true;
            }
            _0x5bae19 = a0_0x322d.RfIhEW(_0x5bae19, _0x3841ac);
            _0x12fc8b[_0x22c8cb] = _0x5bae19;
        } else {
            _0x5bae19 = cachedValue;
        }

        return _0x5bae19;
    };

    return a0_0x322d(_0x12fc8b, _0x379a68);
}

/**
 * Webpack integration for module loading and execution.
 * Pushes a new module into the bundle.
 */
(self.webpackChunk = self.webpackChunk || []).push([[54], {
    0x1b73: (_0x4c7a03, _0x2cc121, _0x702d01) => {
        // Example of obfuscated logic within a Webpack module
        function _0x52ed8f(value) {
            return typeof value === 'symbol' ? 'symbol' : typeof value;
        }

        // Additional functions for dynamic behavior
        function _0x2ddcba() {
            let cache = {};
            return cache;
        }
    }
}]);
// Define a wrapper method for generator functions
_0x1f6771.wrap = createGeneratorWrapper();

// Placeholder for an "undefined" or "default" signal
var CONTINUE_EXECUTION = {};

// Base classes for generator operations
function Generator() {}
function GeneratorFunction() {}
function GeneratorFunctionPrototype() {}

// Shared prototype object for generator functions
var sharedPrototype = {};

// Add a `Symbol.iterator` property to the shared prototype
Object.defineProperty(sharedPrototype, Symbol.iterator, {
    value: function () {
        return this;
    },
});

// Attempt to retrieve the prototype chain of an array iterator
var getPrototype = Object.getPrototypeOf;
var iteratorPrototype = getPrototype && getPrototype(getPrototype([][Symbol.iterator]()));

if (iteratorPrototype && iteratorPrototype !== Object.prototype && iteratorPrototype.hasOwnProperty(Symbol.iterator)) {
    sharedPrototype = iteratorPrototype;
}

// Establish the prototype chain for generator-related classes
var generatorPrototype = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(sharedPrototype);

// Attach methods for `next`, `throw`, and `return` to the generator object
function defineGeneratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
        Object.defineProperty(prototype, method, {
            value: function (arg) {
                return this._invoke(method, arg);
            },
            enumerable: true,
            configurable: true,
            writable: true,
        });
    });
}

// Core logic for async generator functions
function asyncGenerator(innerFn, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
        var result = tryInvoke(innerFn[method], innerFn, arg);
        if (result.type !== "throw") {
            var value = result.arg;
            if (value && typeof value === "object" && value.hasOwnProperty("__await")) {
                return PromiseImpl.resolve(value.__await).then(
                    function (val) {
                        invoke("next", val, resolve, reject);
                    },
                    function (err) {
                        invoke("throw", err, resolve, reject);
                    }
                );
            }
            return PromiseImpl.resolve(value).then(resolve, reject);
        }
        reject(result.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
        function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
                invoke(method, arg, resolve, reject);
            });
        }

        return (previousPromise = previousPromise
            ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
            : callInvokeWithMethodAndArg());
    };
}

// Generator function runtime implementation
function generatorRuntime(innerFn, outerFn, context) {
    var state = "suspendedStart";

    return function (method, arg) {
        if (state === "executing") {
            throw new Error("Generator is already running");
        }

        if (state === "completed") {
            if (method === "throw") {
                throw arg;
            }
            return { value: undefined, done: true };
        }

        context.method = method;
        context.arg = arg;

        while (true) {
            var delegate = context.delegate;
            if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                    if (delegateResult === CONTINUE_EXECUTION) {
                        continue;
                    }
                    return delegateResult;
                }
            }

            if (method === "next") {
                context.sent = context._sent = context.arg;
            } else if (method === "throw") {
                if (state === "suspendedStart") {
                    state = "completed";
                    throw context.arg;
                }
                context.dispatchException(context.arg);
            } else if (method === "return") {
                context.abrupt("return", context.arg);
            }

            state = "executing";

            var record = tryInvoke(innerFn, outerFn, context);
            if (record.type === "normal") {
                state = context.done ? "completed" : "suspendedYield";
                if (record.arg === CONTINUE_EXECUTION) {
                    continue;
                }
                return { value: record.arg, done: context.done };
            } else if (record.type === "throw") {
                state = "completed";
                context.method = "throw";
                context.arg = record.arg;
            }
        }
    };
}

// Helper for invoking delegate methods
function maybeInvokeDelegate(delegate, context) {
    var method = context.method;
    var delegateMethod = delegate.iterator[method];

    if (delegateMethod === undefined) {
        context.delegate = null;

        if (method === "throw" && delegate.iterator.return) {
            context.method = "return";
            context.arg = undefined;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
                return CONTINUE_EXECUTION;
            }
        }

        if (method !== "return") {
            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a '" + method + "' method");
        }
        return CONTINUE_EXECUTION;
    }

    var record = tryInvoke(delegateMethod, delegate.iterator, context.arg);

    if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return CONTINUE_EXECUTION;
    }

    var info = record.arg;

    if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return CONTINUE_EXECUTION;
    }

    if (info.done) {
        context[delegate.resultName] = info.value;
        context.next = delegate.nextLoc;

        if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined;
        }

        context.delegate = null;
        return CONTINUE_EXECUTION;
    }

    return info;
}

// Utility to safely invoke a function with error handling
function tryInvoke(fn, obj, arg) {
    try {
        return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
        return { type: "throw", arg: err };
    }
}
// Define the `wrap` method to create a generator wrapper
_0x1f6771.wrap = createGeneratorWrapper();

// A placeholder indicating control flow continuation
var CONTINUE_EXECUTION = {};

// Classes representing various generator constructs
function Generator() {}
function GeneratorFunction() {}
function GeneratorFunctionPrototype() {}

// Shared prototype object for generator constructs
var sharedPrototype = {};

// Attach the iterator symbol to the shared prototype
Object.defineProperty(sharedPrototype, Symbol.iterator, {
    value: function () {
        return this;
    },
});

// Attempt to retrieve the prototype of an array iterator and set it as the shared prototype if valid
var getPrototype = Object.getPrototypeOf;
var iteratorPrototype = getPrototype && getPrototype(getPrototype([][Symbol.iterator]()));

if (iteratorPrototype && iteratorPrototype !== Object.prototype && iteratorPrototype.hasOwnProperty(Symbol.iterator)) {
    sharedPrototype = iteratorPrototype;
}

// Establish prototype inheritance for generator-related classes
var generatorPrototype = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(sharedPrototype);

// Define `next`, `throw`, and `return` methods on the generator object
function defineGeneratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
        Object.defineProperty(prototype, method, {
            value: function (arg) {
                return this._invoke(method, arg);
            },
            enumerable: true,
            configurable: true,
            writable: true,
        });
    });
}

// Handles errors thrown by generator delegates
function maybeInvokeDelegate(delegate, context) {
    var method = context.method;
    var delegateMethod = delegate.iterator[method];

    if (!delegateMethod) {
        // Handle the case where the delegate doesn't support the current method
        context.delegate = null;

        if (method === "throw" && delegate.iterator.return) {
            context.method = "return";
            context.arg = undefined;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
                return CONTINUE_EXECUTION;
            }
        }

        if (method !== "return") {
            context.method = "throw";
            context.arg = new TypeError(`The iterator does not provide a '${method}' method`);
        }
        return CONTINUE_EXECUTION;
    }

    var record = tryInvoke(delegateMethod, delegate.iterator, context.arg);

    if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return CONTINUE_EXECUTION;
    }

    var info = record.arg;

    if (!info) {
        context.method = "throw";
        context.arg = new TypeError("Iterator result is not an object");
        context.delegate = null;
        return CONTINUE_EXECUTION;
    }

    if (info.done) {
        context[delegate.resultName] = info.value;
        context.next = delegate.nextLoc;

        if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined;
        }

        context.delegate = null;
        return CONTINUE_EXECUTION;
    }

    return info;
}

// Add try-catch support for generator functions
function tryCatchWrapper(tryLocsList) {
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(addTryEntry, this);
    this.reset(true);
}

// Define a helper to add a try block entry
function addTryEntry(entry) {
    var record = { tryLoc: entry[0] };
    if (1 in entry) {
        record.catchLoc = entry[1];
    }
    if (2 in entry) {
        record.finallyLoc = entry[2];
        record.afterLoc = entry[3];
    }
    this.tryEntries.push(record);
}

// Reset state for a specific try block
function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
}

// Implements the core generator runtime
function createGeneratorWrapper(innerFn, outerFn, context) {
    var state = "suspendedStart";

    return function (method, arg) {
        if (state === "executing") {
            throw new Error("Generator is already running");
        }

        if (state === "completed") {
            if (method === "throw") {
                throw arg;
            }
            return { value: undefined, done: true };
        }

        context.method = method;
        context.arg = arg;

        while (true) {
            var delegate = context.delegate;
            if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                    if (delegateResult === CONTINUE_EXECUTION) {
                        continue;
                    }
                    return delegateResult;
                }
            }

            if (method === "next") {
                context.sent = context._sent = context.arg;
            } else if (method === "throw") {
                if (state === "suspendedStart") {
                    state = "completed";
                    throw context.arg;
                }
                context.dispatchException(context.arg);
            } else if (method === "return") {
                context.abrupt("return", context.arg);
            }

            state = "executing";

            var record = tryInvoke(innerFn, outerFn, context);
            if (record.type === "normal") {
                state = context.done ? "completed" : "suspendedYield";
                if (record.arg === CONTINUE_EXECUTION) {
                    continue;
                }
                return { value: record.arg, done: context.done };
            } else if (record.type === "throw") {
                state = "completed";
                context.method = "throw";
                context.arg = record.arg;
            }
        }
    };
}
// Defines a helper function to retrieve values from an iterable
_0x1f6771.values = _0x10626b;

// Prototype for managing generator runtime state
_0x31f417.prototype = {
    // Constructor reference
    constructor: _0x31f417,

    /**
     * Resets the generator state to its initial conditions.
     * @param {boolean} _0x573866 - If true, clears temporary state properties.
     */
    reset: function (_0x573866) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = undefined; // Placeholder for sent values
        this.done = false; // Indicates whether the generator has completed execution
        this.delegate = null; // Delegation state
        this.method = "next"; // Initial method is "next"
        this.arg = undefined; // Argument passed to the generator
        this.tryEntries.forEach(resetTryEntry);

        // Clear temporary "t" variables if not resetting completely
        if (!_0x573866) {
            for (var key in this) {
                if (key.charAt(0) === "t" && Object.prototype.hasOwnProperty.call(this, key) && !isNaN(+key.slice(1))) {
                    this[key] = undefined;
                }
            }
        }
    },

    /**
     * Stops the generator and returns its final value.
     */
    stop: function () {
        this.done = true;
        var rootCompletion = this.tryEntries[0].completion;

        // If the root completion type is "throw", rethrow the error
        if (rootCompletion.type === "throw") {
            throw rootCompletion.arg;
        }

        return this.rval; // Return the final result value
    },

    /**
     * Handles exceptions that occur within the generator.
     * @param {any} exception - The exception to dispatch.
     */
    dispatchException: function (exception) {
        if (this.done) {
            throw exception;
        }

        var context = this;

        // Helper function to set the generator state for exception handling
        function handle(type, nextLoc) {
            var completion = { type: "throw", arg: exception };
            context.next = type;
            if (nextLoc) {
                context.method = "next";
                context.arg = undefined;
            }
            return !!nextLoc;
        }

        // Traverse try entries to find a suitable catch or finally block
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var completion = entry.completion;

            if (entry.tryLoc === "root") {
                return handle("end");
            }

            if (entry.tryLoc <= this.prev) {
                var hasCatch = Object.prototype.hasOwnProperty.call(entry, "catchLoc");
                var hasFinally = Object.prototype.hasOwnProperty.call(entry, "finallyLoc");

                if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) {
                        return handle(entry.catchLoc, true);
                    } else if (this.prev < entry.finallyLoc) {
                        return handle(entry.finallyLoc);
                    }
                } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) {
                        return handle(entry.catchLoc, true);
                    }
                } else if (!hasFinally) {
                    throw new Error("try statement without catch or finally");
                } else if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                }
            }
        }
    },

    /**
     * Handles abrupt control flow instructions like "break" and "continue".
     * @param {string} type - The type of abrupt instruction ("break", "continue", etc.).
     * @param {any} arg - The associated argument.
     */
    abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (
                entry.tryLoc <= this.prev &&
                Object.prototype.hasOwnProperty.call(entry, "finallyLoc") &&
                this.prev < entry.finallyLoc
            ) {
                var finallyEntry = entry;
                break;
            }
        }

        if (finallyEntry && (type === "break" || type === "continue") && 
            finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            finallyEntry = null;
        }

        var completion = finallyEntry ? finallyEntry.completion : {};
        completion.type = type;
        completion.arg = arg;

        if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return CONTINUE_EXECUTION; // Placeholder for continuation
        }

        return this.complete(completion);
    },

    /**
     * Completes the current step in the generator execution.
     * @param {object} completion - The completion record.
     * @param {string} [afterLoc] - The location to jump to next.
     */
    complete: function (completion, afterLoc) {
        if (completion.type === "throw") {
            throw completion.arg;
        }

        if (completion.type === "break" || completion.type === "continue") {
            this.next = completion.arg;
        } else if (completion.type === "return") {
            this.rval = this.arg = completion.arg;
            this.method = "return";
            this.next = "end";
        } else if (completion.type === "normal" && afterLoc) {
            this.next = afterLoc;
        }

        return CONTINUE_EXECUTION;
    },

    /**
     * Handles the completion of a finally block.
     * @param {string} finallyLoc - The location of the finally block.
     */
    finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return CONTINUE_EXECUTION;
            }
        }
    },

    /**
     * Handles the execution of a catch block.
     * @param {string} catchLoc - The location of the catch block.
     */
    catch: function (catchLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc === catchLoc) {
                var completion = entry.completion;

                if (completion.type === "throw") {
                    var thrown = completion.arg;
                    resetTryEntry(entry);
                }

                return thrown;
            }
        }

        throw new Error("illegal catch attempt");
    },
};
