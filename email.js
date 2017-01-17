function isEmail(input) {
  return /^\w+[._]?\w+?@\w+[_-]*?\w+?\.\w{2,}$/.test(input);
}

console.log(isEmail("marcoroganovic@gmail.com"));
console.log(isEmail("123email123@gmail.com"));
console.log(isEmail("test_test@email-server.net"))
console.log(isEmail("hello@"));
console.log(isEmail("@emailserver.net"))
