let Person = function() {
  this.a = 1;
  this.b = 2;
};

let person1 = new Person();
Person.prototype.b = 3;
Object.prototype.c = 4;

// 생성자 선언 방법
// 1. Person.prototype.b = 3;
// 2. person1.b = 3;

console.log("체인 순서");
console.log(person1);
console.log(person1.__proto__);
console.log(person1.__proto__.__proto__);
// {a: 1, b: 2} ---> {b: 3} ---> {c: 4}

console.log(person1.a); // 1
// 첫번째 체인에서 찾음.

console.log(person1.b); // 2
// 두번째 체인에도 b가 있지만 무시된다. (property shadowing)

console.log(person1.c); // 4
// 세번째 체인에서 찾음.

function doSomething() {}
doSomething.prototype.foo = "bar";
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
console.log("doSomeInstancing.prop:      " + doSomeInstancing.prop);
console.log("doSomeInstancing.foo:       " + doSomeInstancing.foo);
console.log("doSomething.prototype.foo:  " + doSomething.prototype.foo);
