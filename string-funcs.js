// testMatch :: RegExp, String -> Boolean
const testMatch = (regExp, s) => regExp.test(s);
// firstMatch :: RegExp, String -> Array|null
const getMatches = (regExp, s) => regExp.exec(s);
// strReplace :: RegExp, String, String -> String
const strReplace = (re, s, replaceWith) => s.replace(re, replaceWith);
// strReplaceWithFirstMatch :: RegExp, String -> String
const strReplaceWithFirstMatch = (re, s) => strReplace(re, s, '$1');
