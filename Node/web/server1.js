const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    fs.readFile("./server1.html", (err, data) => {
      if (err) {
        throw err;
      }
      res.end(data);
    });
  })
  .listen(8080, () => {
    console.log("server start 8080");
  });
