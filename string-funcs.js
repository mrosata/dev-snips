/**
 * Drop string utils onto the devSnip namespace
 *
 * @param {object} decoratee - the devSnip parent object
 * @param {string} ns - the devSnip object namespace
 */
function stringyFuncs(decoratee = window, ns = 'devSnip') {
  if (ns) {
    decoratee[ns] = decoratee[ns] || {}
  }
  const devSnips = ns ? decoratee[ns] : decoratee
  
  // slice :: [a] => [a]
  devSnips.slice = devSnips.slice || [].slice.call.bind([].slice)
  // toList :: (ArrayLike A) => A<a> => [a]
  devSnips.toList = devSnips.toList || as => devSnips.slice(as)
  // map :: ([a], a -> b) -> [b]
  devSnips.map = devSnips.map || fn => xs => xs.map(fn)
  
  // words :: Str -> [Str]
  devSnips.words = s => (s || '').split(' ')
  // chars :: Str -> [Str]
  devSnips.chars = (s) => s.split('')
  // substr :: Str -> Str
  devSnips.substr = (i, j) => s => ''.substr.call(s, i, j)
  // capitalize :: Str -> Str
  devSnips.capitalize = (s) => `${ ''.toUpperCase.call(devSnips.substr(0, 1)(s)) }${ devSnips.substr(1)(s)}`
  // unwords :: (ArrayLike A) => A<a> -> String
  devSnips.unwords = (a) => devSnips.toList(a).join(' ')
  // capitalizeWords :: String -> String
  devSnips.capitalizeWords = (s) => devSnips.unwords(devSnips.map(devSnips.words(s), devSnips.capitalize))
  // testMatch :: RegExp, String -> Boolean
  devSnips.testMatch = (regExp, s) => regExp.test(s)
  // firstMatch :: RegExp, String -> Array|null
  devSnips.getMatches = (regExp, s) => regExp.exec(s)
  // strReplace :: RegExp, String, String -> String
  devSnips.strReplace = (re, s, replaceWith) => s.replace(re, replaceWith)
  // strReplaceWithFirstMatch :: RegExp, String -> String
  devSnips.strReplaceWithFirstMatch = (re, s) => devSnips.strReplace(re, s, '$1')
  // repeat :: Int, Str -> Str
  devSnips.repeat = (amount, str) => devSnips.toList(amount).fill(str).join('')
  
  return devSnips
}

stringFuncs()
