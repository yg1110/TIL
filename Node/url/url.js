const url = require("url");

const URL = url.URL;

const myURL = new URL(
  "https://wwww.gitbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor"
);

console.log("new URL() : ", myURL);
console.log("url.format() : ", url.format(myURL));
