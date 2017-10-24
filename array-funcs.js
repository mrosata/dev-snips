/**
 * Drop array utils onto the devSnip namespace
 *
 * @param {object} decoratee - the devSnip parent object
 * @param {string} ns - the devSnip object namespace
 */
function arrayFuncs(decoratee = window, ns = 'devSnip') {
  if (ns) {
    decoratee[ns] = decoratee[ns] || {}
  }
  const devSnips = ns ? decoratee[ns] : decoratee
  
  // slice :: [a] => [a]
  devSnips.slice = [].slice.call.bind([].slice)
  // toList :: (ArrayLike A) => A<a> => [a]
  devSnips.toList = as => devSnips.slice(as)
  // reverse :: [a] -> [a]
  devSnips.reverse = (a) => devSnips.toList(a).reverse()
  // map :: ([a], a -> b) -> [b]
  devSnips.map = fn => xs => xs.map(fn)
  // tail :: [a] -> [a]
  devSnips.tail = ([x, ...xs]) => xs
  // init :: [a] -> [a]
  devSnips.init = xs => xs.length < 2 ? xs : xs.slice(0, xs.length-1)
  // head :: [a] -> [a]
  devSnips.head = ([x, ...xs]) => [x]
  // last :: [a] -> a
  devSnips.last = ([x, ...xs]) => xs.length === 0 ? x : devSnips.last(xs)
  // first :: [a] -> a
  devSnips.first = ([x, ...xs]) => x
  
  return devSnips
}

arrayFuncs()
