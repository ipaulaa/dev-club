const users = [
  {
    name: "Daisy",
    age: 25
  },
  {
    name: "Luna",
    age: 30
  },
  {
    name: "Nina",
    age: 28
  },
  {
    name: "Xavier",
    age: 35
  }
];

console.log("FOREACH 1:");
users.forEach(user => console.log(user));

console.log("\nFOREACH 2:");
users.forEach((user, index) => console.log(index, user));

console.log("\nFOREACH 3:");
users.forEach((user, index, array) => {
  console.log(array);
  console.log(index, user);
});
