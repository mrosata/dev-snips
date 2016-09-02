// wrap :: Val -> Fn -> Val
const wrap = (val) => () => val;
// wrapValue :: Val -> Fn -> Val
const wrapValue = (val) => isCallable(val) ? val : wrap(val);
