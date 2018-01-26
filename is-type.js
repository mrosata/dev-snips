/**
 * IS TYPE
 * @description
 *   Predicates to test types
 */

// Regular Expression for ints and floats
// NUMERICAL_RE :: RegExp
const NUMERICAL_RE = /^\d*\.?\d*$/;

// Better typeof operator
// type :: a -> String
const type = (subject, asStr = ({}).toString.call(subject)) => asStr.exec(/(\w+)]/)[1].toLowerCase();

// Predicate for whether the `subject` is of type `typeName`
// is :: (Str, a) -> Boolean
const is = (typeName, subject) => type(subject) === typeName;

// Predicate for type object (not null)
// isObject :: Mixed -> Boolean
const isObject = (subject) => subject && is("object", subject);

// Predicate checking Array types
// isArray :: Mixed -> Boolean
const isArray = (subject) => Array.isArray(subject);

// Predicate for whether subject is a Function
// isCallable :: Mixed -> Boolean
const isCallable = (subject) => is("function", subject);

// Predicate for whether subject is a Promise or Thenable
// isThenable :: Mixed -> Boolean
const isThenable = (subject) => isObject(subject) && isCallable(subject.then);

// Predicate for whether subject is undefined
// isUndefined :: Mixed -> Boolean
const isUndefined = (subject) => is("undefined", subject);

// Predicate for whether subject is a Function
// isNull :: Mixed -> Boolean
const isNull = (subject) => is("null", subject);

// Predicate for whether subject is a Function
// isNone :: Mixed -> Boolean
const isNone = (subject) => !subject && (isUndefined(subject) || isNull(subject) || subject !== subject);

// isEven :: Mixed -> Boolean
const isEven = (subject) => Boolean(subject % 2 === 0);

// isOdd :: Mixed -> Boolean
const isOdd = (subject) => !isEven(subject);

// isNumber :: Mixed -> Boolean
const isNumber = (subject) => is("number", subject) && subject === subject;

// isNumerical :: Mixed -> Boolean
const isNumerical = (subject) => NUMERICAL_RE.test(subject);


module.exports = {
  type,
  is,
  isObject,
  isArray,
  isCallable,
  isThenable,
  isUndefined,
  isNull,
  isNone,
  isEven,
  isOdd,
  isNumber,
  isNumerical,
}
