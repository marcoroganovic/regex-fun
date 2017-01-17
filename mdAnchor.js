// Basic Markdown style anchor

function makeHref(text) {
  var re = /^\[(.+)\]\(href=("|')(.+)\2\)$/gi;
  var link = text.replace(re, "<a href=\"$3\">$1</a>");
  return link;
}

console.log(makeHref("[Home](href='/index.html')"));
console.log(makeHref("[About](href='/about.html')"));
console.log(makeHref("[Contact](href='/contact.html')"));
