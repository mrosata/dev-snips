// copyArray :: Array -> Array
const copyArray = (a) => a.slice(0);
// reverseArray :: Array -> Array
const reverseArray = (a) => copyArray(a).reverse();
// forEach :: (Array, Function) -> Array
const forEach = (a, fn) => copyArray(a).map(fn);
// splitWords :: String -> String
const splitWords = (s) => s.split(' ');
// splitChars :: String -> String
const splitChars = (s) => s.split('');
// capitalize :: String -> String
const capitalize = (s) => splitChars(s)[0].toUpperCase() + s.slice(1);
// sentenceFromArray :: Array -> String
const sentenceFromArray = (a) => copyArray(a).join(' ');
// capitalizeWords :: String -> String
const capitalizeWords = (s) => sentenceFromArray(forEach(splitWords(s), capitalize));

// TODO: Document below
const toList = (l) => [].concat(l);
const tail = (l) => toList(l).slice(1);
const head = (l) =>  toList(l).slice(0, realNum( toList(l).length - 1) );
const lastItem = (l) =>  toList(l)[ realNum( toList(l).length -1 ) ];
const firstItem = (l) => toList(l)[0];
