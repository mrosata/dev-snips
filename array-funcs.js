// slice :: [a] => [a]
const slice = [].slice.call.bind([].slice)
// toList :: (ArrayLike A) => A<a> => [a]
const toList = as => slice(as)
// reverse :: [a] -> [a]
const reverse = (a) => toList(a).reverse()
// map :: ([a], a -> b) -> [b]
const map = fn => xs => xs.map(fn)
// tail :: [a] -> [a]
const tail = ([x, ...xs]) => xs
// init :: [a] -> [a]
const init = xs => xs.length < 2 ? xs : xs.slice(0, xs.length-1)
// head :: [a] -> [a]
const head = ([x, ...xs]) => [x]
// last :: [a] -> a
const last = ([x, ...xs]) => xs.length === 0 ? x : last(xs)
// first :: [a] -> a
const first = ([x, ...xs]) => x
