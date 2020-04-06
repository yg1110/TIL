const http = require("http");

const parseCookies = (cookie = "") =>
  cookie.split(";").map(v => {
    v.split("=");
    console.log(v + " : ");
  });
// .map(([k, ...vs]) => [k, vs.join("=")])
// .reduce((acc, [k, v]) => {
//   acc[k.trim()] = decodeURIComponent(v);
//   return acc;
// }, {});

http
  .createServer((req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    console.log(req.url, cookies);
    res.writeHead(200, { "Set-Cookie": "mycookie=test" });
    res.end("Hello Cookie");
  })
  .listen(8080, () => {
    console.log("8080 start");
  });
