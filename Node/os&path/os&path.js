const os = require("os");
const path = require("path");
const string = __filename;

console.log(os.homedir());
console.log(os.tmpdir());
console.log(path.dirname(string));
