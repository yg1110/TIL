function hello() {
  console.log(this.name);
}

var obj = {
  name: "Rho"
};

name = "ZeroRoad";
hello.bind(obj)();
