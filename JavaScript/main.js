const time = require("./time.js");
// console.log(new Date(2020, 2, 17, 13, 30, 0));

let data = [
  {
    start: new Date(2020, 2, 17, 13, 30, 0), //월이 0부터 시작함
    end: new Date(2020, 2, 17, 15, 50, 0), // 월이 0부터 시작함
    color: "green"
  },
  {
    start: new Date(2020, 2, 17, 2, 10, 0), //월이 0부터 시작함
    end: new Date(2020, 2, 17, 3, 30, 0), // 월이 0부터 시작함
    color: "yellow"
  },
  {
    start: new Date(2020, 2, 17, 5, 20, 0), //월이 0부터 시작함
    end: new Date(2020, 2, 17, 6, 50, 0), // 월이 0부터 시작함
    color: "blue"
  },
  {
    start: new Date(2020, 2, 17, 11, 00, 0), //월이 0부터 시작함
    end: new Date(2020, 2, 17, 13, 10, 0), // 월이 0부터 시작함
    color: "pink"
  }
];
// const person = new _class.Person(data);
// console.log(person);
console.log(time.difftime(data));
