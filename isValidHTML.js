// doesn't account for self-closing tags

function isValidHTML(input) {
  return /^<(\w+)\b(?:\s+?[\w+\-*?\w+]*?=('|")[\w+\-*?\w+]*?\2)*?>.*?<\/\1>$/.test(input);
}

console.log(isValidHTML("<h1 class='hello'>HELLO</h1>")); // true
console.log(isValidHTML("<p>Lorem ispum dolor sit amet</p>")); // true
console.log(isValidHTML("<span data-id=\"1\">item</span>")); // true
console.log(isValidHTML("<div class='container'>")); // false
console.log(isValidHTML("<div></div>")); // true
