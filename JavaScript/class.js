// es5이전 클래스 선언방법 (사용자 정의타입 생성)
function PersonType(name) {
  this.name = name;
  console.log(this);
}
PersonType.prototype.sayName = function() {
  console.log(this.name);
};

console.log(PersonType["name"]);
let person = new PersonType("yg1110");
person.sayName();

console.log(person instanceof PersonType);
console.log(person instanceof Object);
