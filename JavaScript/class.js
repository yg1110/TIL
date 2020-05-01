// es5이전 class 선언방법 (사용자 정의타입 생성)
function Person() {}
Person.prototype.name = "yg1110";
Person.prototype.age = 27;

let kim = new Person();
let Joeng = new Person();

kim.name = "EOHwoo";
console.log(kim.name);
console.log(Joeng.name);

// kim과 Joeng 자신이 변수를 가지고 있는게 아니라,
// Person.prototype이라는 Object의 name이라는 속성을 공유하고 있다.
// 그렇다는 말은 위의 코드 처럼 생성된 객체의 수 만큼 변수가 저장되는 것이 아니라
// 같은 생성자를 통해서 만들어진 객체들은 하나의 prototype 이라는 Object를 공유하고 있다는 뜻이다.

// es6이후 class 선언방법
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  set name(newName) {
    this._name = newName;
  }

  set age(newAge) {
    this._age = newAge;
  }
}

let man = new Person2("yg1110", 10);
console.log(man);
console.log(man.age);
console.log(man.name);

// static methods
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(p1.distance); //undefined
console.log(p2.distance); //undefined
console.log(Point.distance(p1, p2)); //7.0710678118654755

// 상속
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name + " makes a noise.");
};

class Dog extends Animal {
  speak2() {
    console.log(this.name + " barks.");
  }
}

let a = new Animal("anna");
var d = new Dog("Mitzie");
d.speak(); //Mitzie makes a noise.
d.speak2(); //Mitzie barks.
