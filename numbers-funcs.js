/** 
 * Numbers Module
 * @author Michael Rosata
 * @license MIT
 */

// abs :: Number -> Number
const abs = num => Math.abs(num);
// int :: Mixed -> Int
const int = (mixed) => ~~mixed;
// pow :: Number, Number -> Number
const pow = (base, exponent) => Math.pow(base, exponent);
// toFixed :: ( Int, Float ) -> Fixed
const toFixed = (digits, number) => int(pow(10, digits) * number) / pow(10, digits); 
