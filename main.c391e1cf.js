// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"e7Sb":[function(require,module,exports) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
},{}],"nyVk":[function(require,module,exports) {
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
},{}],"ixeg":[function(require,module,exports) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
},{}],"IOZJ":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
},{"./arrayLikeToArray":"ixeg"}],"yJnk":[function(require,module,exports) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
},{}],"xw6J":[function(require,module,exports) {
var arrayWithHoles = require("./arrayWithHoles");

var iterableToArrayLimit = require("./iterableToArrayLimit");

var unsupportedIterableToArray = require("./unsupportedIterableToArray");

var nonIterableRest = require("./nonIterableRest");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
},{"./arrayWithHoles":"e7Sb","./iterableToArrayLimit":"nyVk","./unsupportedIterableToArray":"IOZJ","./nonIterableRest":"yJnk"}],"fk2o":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
},{"./arrayLikeToArray":"ixeg"}],"rp83":[function(require,module,exports) {
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;
},{}],"v5FO":[function(require,module,exports) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
},{}],"YtCi":[function(require,module,exports) {
var arrayWithoutHoles = require("./arrayWithoutHoles");

var iterableToArray = require("./iterableToArray");

var unsupportedIterableToArray = require("./unsupportedIterableToArray");

var nonIterableSpread = require("./nonIterableSpread");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
},{"./arrayWithoutHoles":"fk2o","./iterableToArray":"rp83","./unsupportedIterableToArray":"IOZJ","./nonIterableSpread":"v5FO"}],"ZBnv":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],"iIt7":[function(require,module,exports) {
"use strict";

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestObject = void 0;

var TestObject = function TestObject() {
  (0, _classCallCheck2.default)(this, TestObject);

  this.draw = function (origin) {
    var size = 32;
    return "\n            <svg x=".concat(origin.x - size / 2, " y=").concat(origin.y - size / 2, " width=\"").concat(size, "\" height=\"").concat(size, "\" viewbox=\"0 0 ").concat(size, " ").concat(size, "\">\n                <path d=\"M28.623,25c-0.722-1.938-2.388-3.365-4.005-4.751c-1.1-0.942-2.138-1.833-2.786-2.804\n                c-0.704-1.056-1.236-2.747-1.549-4.915c2.061-1.593,3.097-4.201,2.589-6.883c-0.53-2.797-2.804-5.042-5.607-5.536\n                C12.85-0.666,9,2.726,9,7c0,2.185,1.005,4.208,2.717,5.531c-0.313,2.167-0.845,3.859-1.549,4.915\n                c-0.647,0.971-1.686,1.861-2.786,2.804C5.765,21.635,4.099,23.062,3.377,25H2c-0.552,0-1,0.448-1,1v5c0,0.552,0.448,1,1,1h28\n                c0.552,0,1-0.448,1-1v-5c0-0.552-0.448-1-1-1H28.623z M11,7c0-1.331,0.491-2.632,1.305-3.626c1.017-1.01,2.351-1.686,3.695-1.686\n                c0.986,0,1.944,0.331,2.771,0.877C20.113,3.58,21,5.267,21,7c0,2.757-2.243,5-5,5S11,9.757,11,7z M8.684,21.768\n                c1.154-0.989,2.348-2.012,3.148-3.213c0.909-1.364,1.545-3.387,1.897-6.003C14.43,12.839,15.196,13,16,13s1.57-0.161,2.271-0.448\n                c0.353,2.616,0.988,4.639,1.897,6.003c0.8,1.201,1.994,2.224,3.148,3.213c1.58,1.354,3.063,2.639,3.518,4.232H5.165\n                C5.62,24.406,7.104,23.121,8.684,21.768z M29,30H3v-3h26V30z\"/>\n            </svg>\n        ");
  };
};

exports.TestObject = TestObject;
},{"@babel/runtime/helpers/classCallCheck":"ZBnv"}],"Jibl":[function(require,module,exports) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],"v5KI":[function(require,module,exports) {
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;
},{}],"XsAw":[function(require,module,exports) {
var setPrototypeOf = require("./setPrototypeOf");

var isNativeReflectConstruct = require("./isNativeReflectConstruct");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
},{"./setPrototypeOf":"Jibl","./isNativeReflectConstruct":"v5KI"}],"KA2S":[function(require,module,exports) {
var define;
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

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

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"m4eR":[function(require,module,exports) {
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":"KA2S"}],"fwsn":[function(require,module,exports) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
},{}],"BsCT":[function(require,module,exports) {
"use strict";

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Point = void 0;

var Point = function Point(x, y) {
  var _this = this;

  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  (0, _classCallCheck2.default)(this, Point);

  this.toString = function () {
    return "".concat(_this.x, ", ").concat(_this.y);
  };

  this.valueOf = function () {
    return "".concat(_this.x, ", ").concat(_this.y, ", ").concat(_this.z);
  };

  this.translate = function (vector) {
    return new Point(_this.x + vector.x, _this.y + vector.y, _this.z + vector.z);
  };

  this.multiply = function (scalar) {
    return new Point(_this.x * scalar, _this.y * scalar, _this.z * scalar);
  };

  this.map = function (mapper) {
    return new Point(mapper(_this.x), mapper(_this.y), mapper(_this.z));
  };

  this.distance2D = function (other) {
    return (Math.abs(_this.x - other.x) + Math.abs(_this.y - other.y) + Math.abs(_this.x + _this.y - other.x - other.y)) / 2;
  };

  this.distance3D = function (other) {
    return _this.distance2D(other) + Math.abs(_this.z - other.z);
  };

  this.x = x;
  this.y = y;
  this.z = z;
};

exports.Point = Point;
},{"@babel/runtime/helpers/classCallCheck":"ZBnv"}],"OIFl":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONFIG = void 0;

var point_1 = require("./point");

var SIZE = 64;
exports.CONFIG = {
  CHUNK_SIZE: 1,
  RENDER_DISTANCE: 4,
  HEX_SIZE: SIZE,
  ORIGIN_POINT: new point_1.Point(0, 0),
  X_VERSOR: new point_1.Point(SIZE * Math.sqrt(3), 0),
  Y_VERSOR: new point_1.Point(SIZE * Math.sqrt(3) / 2, SIZE * 3 / 2)
};
},{"./point":"BsCT"}],"NoOd":[function(require,module,exports) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],"UQJg":[function(require,module,exports) {
"use strict";

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hex = void 0;

var config_1 = require("./config");

var point_1 = require("./point");

var Hex = /*#__PURE__*/function () {
  function Hex(x, y, z) {
    var _this = this;

    var gameObjects = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    (0, _classCallCheck2.default)(this, Hex);

    this.draw = function () {
      var center = config_1.CONFIG.ORIGIN_POINT.translate(config_1.CONFIG.X_VERSOR.multiply(_this.position.x)).translate(config_1.CONFIG.Y_VERSOR.multiply(_this.position.y));

      var points = _this.hexPoints(center, config_1.CONFIG.HEX_SIZE);

      _this.g = document.createElementNS("http://www.w3.org/2000/svg", 'g');
      _this.g.id = _this.position.valueOf();
      _this.g.innerHTML = "\n            <polygon points=\"".concat(points.join(' '), "\">\n                <title>").concat(JSON.stringify(_this, null, 4), "</title>\n            </polygon>\n            <text x=\"").concat(center.x, "\" y=\"").concat(center.y + 40, "\" text-anchor=\"middle\" style=\"font-size:20px;fill:gray\">").concat(_this.position, "</text>\n            ").concat(_this.gameObjects.map(function (obj) {
        return obj.draw(center);
      }), "\n        ");

      _this.addEventSupport(_this.g);

      return _this.g;
    };

    this.distance = function (other) {
      return _this.position.distance2D(other.position);
    };

    this.hexPoints = function (center, size) {
      return (0, _toConsumableArray2.default)(Array(6)).map(function (_, i) {
        var angle_deg = 60 * i - 30;
        var angle_rad = Math.PI / 180 * angle_deg;
        return new point_1.Point(center.x + size * Math.cos(angle_rad), center.y + size * Math.sin(angle_rad));
      });
    };

    this.position = new point_1.Point(x, y, z);
    this.chunkPosition = new point_1.Point(Math.floor(this.position.x / config_1.CONFIG.CHUNK_SIZE), Math.floor(this.position.y / config_1.CONFIG.CHUNK_SIZE), z);
    this.gameObjects = gameObjects;
  }

  (0, _createClass2.default)(Hex, [{
    key: "addEventSupport",
    value: function addEventSupport(g) {
      var _this2 = this;

      g.addEventListener("mousedown", function (e) {
        e.preventDefault();
        var button = e.buttons;

        if (button === 1) {
          var _this2$onSelected;

          (_this2$onSelected = _this2.onSelected) === null || _this2$onSelected === void 0 ? void 0 : _this2$onSelected.call(_this2, _this2);
        }

        if (button === 2) {
          var _this2$onDeselected;

          (_this2$onDeselected = _this2.onDeselected) === null || _this2$onDeselected === void 0 ? void 0 : _this2$onDeselected.call(_this2, _this2);
        }
      });
    }
  }]);
  return Hex;
}();

exports.Hex = Hex;
},{"@babel/runtime/helpers/toConsumableArray":"YtCi","@babel/runtime/helpers/classCallCheck":"ZBnv","@babel/runtime/helpers/createClass":"NoOd","./config":"OIFl","./point":"BsCT"}],"BTgH":[function(require,module,exports) {
"use strict";

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEX_MOVE = exports.unique = exports.range = void 0;

var point_1 = require("./point");

var range = function range(start, stop) {
  return (0, _toConsumableArray2.default)(Array(stop - start)).map(function (_, i) {
    return i + start;
  });
};

exports.range = range;

var unique = function unique(element, index, array) {
  return array.indexOf(element) === index;
};

exports.unique = unique;
exports.HEX_MOVE = {
  RIGHT: new point_1.Point(1, 0, 0),
  LEFT: new point_1.Point(-1, 0, 0),
  UPPER_RIGHT: new point_1.Point(1, -1, 0),
  UPPER_LEFT: new point_1.Point(0, -1, 0),
  LOWER_RIGHT: new point_1.Point(0, 1, 0),
  LOWER_LEFT: new point_1.Point(-1, 1, 0),
  UP: new point_1.Point(0, 0, 1),
  DOWN: new point_1.Point(0, 0, -1)
};
},{"@babel/runtime/helpers/toConsumableArray":"YtCi","./point":"BsCT"}],"GLYb":[function(require,module,exports) {
"use strict";

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadChunkDB = exports.unloadChunk = exports.loadChunk = void 0;

var config_1 = require("./config");

var hex_1 = require("./hex");

var point_1 = require("./point");

var utils_1 = require("./utils");

var loadedChunks = new Set();

var loadChunk = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(point) {
    var minBound, maxBound;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!loadedChunks.has(point.valueOf())) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", []);

          case 2:
            minBound = point.multiply(config_1.CONFIG.CHUNK_SIZE);
            maxBound = minBound.translate(new point_1.Point(config_1.CONFIG.CHUNK_SIZE, config_1.CONFIG.CHUNK_SIZE, 1));
            loadedChunks.add(point.valueOf());
            return _context.abrupt("return", utils_1.range(minBound.x, maxBound.x).flatMap(function (x) {
              return utils_1.range(minBound.y, maxBound.y).flatMap(function (y) {
                return utils_1.range(minBound.z, maxBound.z).map(function (z) {
                  return new hex_1.Hex(x, y, z);
                });
              });
            }));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loadChunk(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.loadChunk = loadChunk;

var unloadChunk = function unloadChunk(point) {
  loadedChunks.delete(point.valueOf());
  console.log('unload', point.valueOf());
};

exports.unloadChunk = unloadChunk;

var loadChunkDB = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(point) {
    var minBound, maxBound, response, body;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!loadedChunks.has(point.valueOf())) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", []);

          case 2:
            console.log('load', point.valueOf());
            minBound = new point_1.Point(point.x * config_1.CONFIG.CHUNK_SIZE, point.y * config_1.CONFIG.CHUNK_SIZE, point.z);
            maxBound = minBound.translate(new point_1.Point(config_1.CONFIG.CHUNK_SIZE - 1, config_1.CONFIG.CHUNK_SIZE - 1, 0));
            _context2.next = 7;
            return fetch('http://localhost:3000', {
              method: 'POST',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                minBound: minBound,
                maxBound: maxBound
              })
            });

          case 7:
            response = _context2.sent;
            _context2.next = 10;
            return response.json();

          case 10:
            body = _context2.sent;
            loadedChunks.add(point.valueOf());
            return _context2.abrupt("return", body.map(function (h) {
              return new hex_1.Hex(h.position.x, h.position.y, h.position.z, h.gameObjects);
            }));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function loadChunkDB(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.loadChunkDB = loadChunkDB;
},{"@babel/runtime/regenerator":"m4eR","@babel/runtime/helpers/asyncToGenerator":"fwsn","./config":"OIFl","./hex":"UQJg","./point":"BsCT","./utils":"BTgH"}],"N3AR":[function(require,module,exports) {
"use strict";

var _construct2 = _interopRequireDefault(require("@babel/runtime/helpers/construct"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unloadFromMap = exports.reloadHexes = exports.reloadHex = exports.loadIntoMap = void 0;

var config_1 = require("./config");

var mapProvider_1 = require("./mapProvider");

var point_1 = require("./point");

var utils_1 = require("./utils");

function loadIntoMap(view) {
  var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : config_1.CONFIG.ORIGIN_POINT;
  var distance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : config_1.CONFIG.RENDER_DISTANCE;
  var futureChunks = utils_1.range(origin.x - distance, origin.x + distance + 1).flatMap(function (x) {
    return utils_1.range(origin.y - distance, origin.y + distance + 1).map(function (y) {
      return new point_1.Point(x, y, origin.z);
    });
  }).filter(function (chunk) {
    return chunk.distance3D(origin) <= distance;
  }).flatMap( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(chunkPosition) {
      var result, chunk, chunkDocument;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return mapProvider_1.loadChunk(chunkPosition);

            case 2:
              result = _context.sent;

              if (result.length !== 0) {
                chunk = document.createElementNS("http://www.w3.org/2000/svg", 'g');
                chunk.id = "chunk ".concat(chunkPosition.valueOf());
                chunk.append.apply(chunk, (0, _toConsumableArray2.default)(result.map(function (h) {
                  return h.draw();
                })));
                chunkDocument = document.createDocumentFragment();
                chunkDocument.append(chunk);
                view.append(chunkDocument);
              }

              return _context.abrupt("return", result);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  return Promise.all(futureChunks).then(function (map) {
    return map.flatMap(function (h) {
      return h;
    });
  });
}

exports.loadIntoMap = loadIntoMap;

function reloadHex(view, hex) {
  var rendered = hex.draw();
  view.querySelector("#" + CSS.escape(hex.position.valueOf())).replaceWith(rendered);
  return rendered;
}

exports.reloadHex = reloadHex;

function reloadHexes(view) {
  for (var _len = arguments.length, hexes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    hexes[_key - 1] = arguments[_key];
  }

  hexes.forEach(function (hex) {
    return reloadHex(view, hex);
  });
}

exports.reloadHexes = reloadHexes;

function unloadFromMap(view, map) {
  var origin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : config_1.CONFIG.ORIGIN_POINT;
  var distance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : config_1.CONFIG.RENDER_DISTANCE * 2;
  return Promise.all((0, _toConsumableArray2.default)(map.values()).filter(function (hex) {
    return hex.chunkPosition.distance3D(origin) > distance;
  }).map(function (hex) {
    var id = hex.position.valueOf();
    map.delete(id);
    return 'chunk ' + hex.chunkPosition.valueOf();
  }).filter(utils_1.unique).map(function (chunkId) {
    view.querySelector('#' + CSS.escape(chunkId)).remove();
    var chunk = pointFromChunkId(chunkId);
    mapProvider_1.unloadChunk(chunk);
  }));
}

exports.unloadFromMap = unloadFromMap;

function pointFromChunkId(chunkId) {
  return (0, _construct2.default)(point_1.Point, (0, _toConsumableArray2.default)(chunkId.slice(6).split(', ').map(function (i) {
    return parseInt(i);
  })));
}
},{"@babel/runtime/helpers/construct":"XsAw","@babel/runtime/regenerator":"m4eR","@babel/runtime/helpers/toConsumableArray":"YtCi","@babel/runtime/helpers/asyncToGenerator":"fwsn","./config":"OIFl","./mapProvider":"GLYb","./point":"BsCT","./utils":"BTgH"}],"yevO":[function(require,module,exports) {
"use strict";

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyRotateCapability = exports.applyZoomCapability = exports.applyPanCapability = exports.preventContextMenuCapability = exports.applyOriginChangeCapability = void 0;

var config_1 = require("./config");

var point_1 = require("./point");

var TRANSLATE_REGEXP = /translate\(([-0-9\.]+) ([-0-9\.]+)\)/;
var SCALE_REGEXP = /scale\(([-0-9\.]+)\)/;
var ROTATE_REGEXP = /rotate\(([-0-9\.]+)\)/;

var applyOriginChangeCapability = function applyOriginChangeCapability(view, onOriginChange) {
  view.addEventListener('mousedown', function (e) {
    if (e.buttons === 2) {
      var _view$querySelector;

      (_view$querySelector = view.querySelector('[selected]')) === null || _view$querySelector === void 0 ? void 0 : _view$querySelector.removeAttribute('selected');
      var hexElement = e.target.parentElement;
      hexElement.setAttribute('selected', 'true');

      var _hexElement$id$split$ = hexElement.id.split(', ').map(function (i) {
        return parseInt(i);
      }),
          _hexElement$id$split$2 = (0, _slicedToArray2.default)(_hexElement$id$split$, 3),
          x = _hexElement$id$split$2[0],
          y = _hexElement$id$split$2[1],
          z = _hexElement$id$split$2[2];

      x = Math.floor(x / config_1.CONFIG.CHUNK_SIZE);
      y = Math.floor(y / config_1.CONFIG.CHUNK_SIZE);
      onOriginChange(new point_1.Point(x, y, z));
    }
  });
};

exports.applyOriginChangeCapability = applyOriginChangeCapability;

var preventContextMenuCapability = function preventContextMenuCapability(view) {
  view.addEventListener('contextmenu', function (e) {
    return e.preventDefault();
  });
};

exports.preventContextMenuCapability = preventContextMenuCapability;

var applyPanCapability = function applyPanCapability(view) {
  view.addEventListener('mousemove', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (e.buttons === 2) {
      var transform = view.firstElementChild.attributes.getNamedItem('transform');

      var _getTranslate = getTranslate(transform),
          _getTranslate2 = (0, _slicedToArray2.default)(_getTranslate, 2),
          x = _getTranslate2[0],
          y = _getTranslate2[1];

      var _view$getAttribute$sp = view.getAttribute('viewBox').split(' ').slice(2).map(function (e) {
        return parseInt(e);
      }),
          _view$getAttribute$sp2 = (0, _slicedToArray2.default)(_view$getAttribute$sp, 2),
          viewX = _view$getAttribute$sp2[0],
          viewY = _view$getAttribute$sp2[1];

      var screenX = view.getBoundingClientRect().width;
      var screenY = view.getBoundingClientRect().height;
      var mouseX = e.movementX * viewX / screenX;
      var mouseY = e.movementY * viewY / screenY;
      setTranslate(transform, x + mouseX, y + mouseY);
    }
  });
};

exports.applyPanCapability = applyPanCapability;

var applyZoomCapability = function applyZoomCapability(view, minZoom, maxZoom, step) {
  view.addEventListener('wheel', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var transform = view.firstElementChild.attributes.getNamedItem('transform');
    var zoom = getZoom(transform);
    var deltaZoom = Math.sign(e.deltaY) * step;
    var newZoom = Math.min(maxZoom, Math.max(minZoom, zoom - deltaZoom));
    setZoom(transform, newZoom);

    var _view$getAttribute$sp3 = view.getAttribute('viewBox').split(' ').slice(2).map(function (e) {
      return parseInt(e);
    }),
        _view$getAttribute$sp4 = (0, _slicedToArray2.default)(_view$getAttribute$sp3, 2),
        viewX = _view$getAttribute$sp4[0],
        viewY = _view$getAttribute$sp4[1];

    var screenX = view.getBoundingClientRect().width;
    var screenY = view.getBoundingClientRect().height;
    var mouseX = e.x * viewX / screenX;
    var mouseY = e.y * viewY / screenY;

    var _getTranslate3 = getTranslate(transform),
        _getTranslate4 = (0, _slicedToArray2.default)(_getTranslate3, 2),
        x = _getTranslate4[0],
        y = _getTranslate4[1];

    var diffX = mouseX - x;
    var diffY = mouseY - y;
    setTranslate(transform, x + diffX * (zoom - newZoom) / zoom, y + diffY * (zoom - newZoom) / zoom);
  });
};

exports.applyZoomCapability = applyZoomCapability;

var applyRotateCapability = function applyRotateCapability(view) {
  var rotateStepDeg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 45;
  view.addEventListener('mousedown', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (e.buttons === 4) {
      var transform = view.firstElementChild.attributes.getNamedItem('transform');
      var rotate = getRotate(transform);
      setRotate(transform, rotate + rotateStepDeg);
    }
  });
};

exports.applyRotateCapability = applyRotateCapability;

function getTranslate(transform) {
  return transform.value.match(TRANSLATE_REGEXP).slice(1).map(function (s) {
    return parseInt(s);
  });
}

function setTranslate(transform, x, y) {
  var translate = "translate(".concat(x, " ").concat(y, ")");
  transform.value = transform.value.replace(TRANSLATE_REGEXP, translate);
}

function getZoom(transform) {
  return parseFloat(transform.value.match(SCALE_REGEXP)[1]);
}

function setZoom(transform, zoom) {
  var scale = "scale(".concat(zoom, ")");
  transform.value = transform.value.replace(SCALE_REGEXP, scale);
}

function getRotate(transform) {
  return parseFloat(transform.value.match(ROTATE_REGEXP)[1]);
}

function setRotate(transform, deg) {
  var rotate = "rotate(".concat(deg, ")");
  transform.value = transform.value.replace(ROTATE_REGEXP, rotate);
}
},{"@babel/runtime/helpers/slicedToArray":"xw6J","./config":"OIFl","./point":"BsCT"}],"KmWJ":[function(require,module,exports) {
"use strict";

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var TestObject_1 = require("./game/TestObject");

var mapLoader_1 = require("./world/mapLoader");

var viewCapabilities_1 = require("./world/viewCapabilities");

var map = new Map();
var view = document.querySelector('#view');
viewCapabilities_1.preventContextMenuCapability(view);
viewCapabilities_1.applyPanCapability(view);
viewCapabilities_1.applyZoomCapability(view, 0.3, 2.0, 0.1);
viewCapabilities_1.applyRotateCapability(view, 30);
mapLoader_1.loadIntoMap(view.firstElementChild).then(function (hexes) {
  return hexes.forEach(function (h) {
    map.set(h.position.valueOf(), h);
    h.onSelected = handleHexSelection;
    h.onDeselected = handleHexDeselection;
  });
}).then(function () {
  (0, _toConsumableArray2.default)(map).filter(function (_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        hexId = _ref2[0],
        _ = _ref2[1];

    return ["3, 0, 0", "0, 3, 0", "-3, 0, 0", "0, -3, 0", "3, -3, 0", "-3, 3, 0"].includes(hexId);
  }).forEach(function (_ref3) {
    var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
        _ = _ref4[0],
        hex = _ref4[1];

    hex.gameObjects.push(new TestObject_1.TestObject());
    mapLoader_1.reloadHex(view, hex);
  });
});

function handleHexSelection(hex) {
  console.log("LMB " + hex.position.valueOf());
  var activeHex = Array.from(map.values()).find(function (hex) {
    return hex.g.hasAttribute("selected");
  });

  if (activeHex) {
    if (activeHex === hex) {
      handleHexDeselection(hex);
    } else if (hex.g.hasAttribute("available")) {
      moveGameObjects(activeHex, hex);
    } else {
      activeHex.g.removeAttribute("selected");
      clearAttribute("available");
      activateHex(hex);
    }
  } else {
    activateHex(hex);
  }
}

function handleHexDeselection(hex) {
  var _document$querySelect;

  console.log("RMB " + hex.position.valueOf());
  (_document$querySelect = document.querySelector('[selected]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.removeAttribute('selected');
  Array.from(map.values()).forEach(function (hex) {
    return hex.g.removeAttribute("available");
  });
}

function moveGameObjects(from, to) {
  var _to$gameObjects;

  (_to$gameObjects = to.gameObjects).push.apply(_to$gameObjects, (0, _toConsumableArray2.default)(from.gameObjects));

  from.gameObjects = [];
  mapLoader_1.reloadHexes(view, to, from);
  clearAttribute("available");
}

function clearAttribute(attr) {
  Array.from(map.values()).forEach(function (hex) {
    return hex.g.removeAttribute(attr);
  });
}

function activateHex(hex) {
  var _hex$g;

  (_hex$g = hex.g) === null || _hex$g === void 0 ? void 0 : _hex$g.setAttribute("selected", "true");

  if (hex.gameObjects.length !== 0) {
    Array.from(map.values()).filter(function (h) {
      var distance = h.distance(hex);
      return distance > 0 && distance <= 2 && h.gameObjects.length === 0;
    }).forEach(function (h) {
      return h.g.setAttribute("available", "true");
    });
  }
}
},{"@babel/runtime/helpers/slicedToArray":"xw6J","@babel/runtime/helpers/toConsumableArray":"YtCi","./game/TestObject":"iIt7","./world/mapLoader":"N3AR","./world/viewCapabilities":"yevO"}]},{},["KmWJ"], null)
//# sourceMappingURL=/main.c391e1cf.js.map