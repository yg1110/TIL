const fs = require("fs");
let cook = {};
function rename(name, index) {
  let files = fs.readdirSync(name);
  for (let i = 0; i < files.length; i++) {
    let origin = name + "/" + files[i];
    let change = name + "/" + (index + i) + ".jpg";
    fs.rename(origin, change, function(err) {
      if (err) throw err;
    });

    cook[change] = name;
  }
}

rename("계란", 50000);
rename("양파", 51000);
rename("땅콩", 52000);
rename("날콩가루", 53000);

console.log(cook);
