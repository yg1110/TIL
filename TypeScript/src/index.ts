interface Human {
  name: string;
  age: number;
  gender: string;
}

class Human2 {
  public name: String;
  public age: number;
  public gender: String;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const person = {
  name: "yg",
  age: 27,
  gender: "male"
};

const yg = new Human2("yg", 27, "male");

const sayHi = (person: Human2): void => {
  console.log(
    `name: ${person.name} age: ${person.age} gender: ${person.gender}`
  );
};

sayHi(yg);

export = {};
