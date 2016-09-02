// elemById :: String -> HTMLElement
const elemById = (id) => document.getElementById(id);
// elem :: String -> Array<HTMLElement>
const elems = (sel) => Array.prototype.slice.apply(null, document.querySelectorAll(sel));
// elem :: String -> HTMLElement
const elem = (sel) => document.querySelector(sel);
// elemExists :: String -> Boolean
const elemExists = (sel) => !!(elem(sel));
// getHTML :: String -> String
const getHTML = (sel) => elem(sel).innerHTML;
// setHTML :: String, String -> Boolean
const setHTML = (sel, html) => !!(elem(sel).innerHTML = html);
