// isObject :: Mixed -> Boolean
const isObject = (o) => o && typeof o === "object";
// isArray :: Mixed -> Boolean
const isArray = (a) => Array.isArray(a);
// isCallable :: Mixed -> Boolean
const isCallable = (fn) => typeof fn === "function";
// isUndefined :: Mixed -> Boolean
const isUndefined = (item) => typeof item === "undefined";
// isNone :: Mixed -> Boolean
const isNone = (item) => isUndefined(item) || (!item && typeof item === "object");
// isEven :: Mixed -> Boolean
const isEven = (n) => n % 2 === 0;
