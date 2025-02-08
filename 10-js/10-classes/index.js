class Person {
  age;
  name;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  logIntro() {
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old!`);
  }
}

const p1 = new Person("Paula", 28);
const p2 = new Person("Xavier", 32);
const p3 = new Person("Valerie", 87);

p1.logIntro();
p2.logIntro();
p3.logIntro();
