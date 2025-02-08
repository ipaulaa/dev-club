const user = {
  name: "Paula",
  age: 28,
  greet: function () {
    console.log(`Hello, I'm ${this.name}!`);
  }
};

this.user = user;
