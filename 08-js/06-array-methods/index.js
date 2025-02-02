const numbers = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000];

console.log("~~~ PUSH ~~~");
console.log("before:", numbers);
numbers.push(7);
console.log("after:", numbers);

console.log("\n~~~ LENGTH ~~~");
console.log("length:", numbers.length);

console.log("\n~~~ SORT ~~~");
console.log("before:", numbers);
numbers.sort((a, b) => a - b);
console.log("after:", numbers);

console.log("\n~~~ DELETE ~~~");
console.log("before:", numbers);
delete numbers[0];
console.log("after:", numbers);

console.log("\n~~~ EVERY ~~~");
console.log(
  "\nall < 1000?",
  numbers.every(num => num < 1000)
);
console.log(
  "all <= 1000?",
  numbers.every(num => num <= 1000)
);

console.log("\n~~~ SOME ~~~");
console.log(
  "\nany > 1000?",
  numbers.some(num => num > 1000)
);
console.log(
  "any >= 1000?",
  numbers.some(num => num >= 1000)
);

console.log("\n~~~ FILL ~~~");
console.log("before:", numbers);
numbers.fill(-1, 0, 3);
console.log("after:", numbers);

const users = [
  { name: "Chloe", vip: true },
  { name: "Marie", vip: false },
  { name: "Daisy", vip: true },
  { name: "Isaac", vip: true },
  { name: "Valerie", vip: false },
  { name: "Xavier", vip: true },
  { name: "Zoe", vip: false }
];

console.log("\n~~~ FIND ~~~");
console.log(
  "\nfind Xavier:",
  users.find(user => user.name === "Xavier")
);
console.log(
  "find Xander:",
  users.find(user => user.name === "Xander")
);

const fibonacci = [1, 1, 2, 3];

console.log("\n~~~ FIND-INDEX ~~~");
console.log("fibonacci:", fibonacci);
console.log(
  "where is 1?",
  fibonacci.findIndex(num => num === 1)
);
console.log(
  "where is 5?",
  fibonacci.findIndex(num => num === 5)
);

const arrNames1 = ["Chloe", "Marie", "Daisy", "Isaac"];
const arrNames2 = ["Valerie", "Xavier", "Zoe"];

console.log("\n~~~ CONCAT ~~~");
const names = arrNames1.concat(arrNames2);
console.log("arrNames1:", arrNames1);
console.log("arrNames2:", arrNames2);
console.log("names:", names);

console.log("\n~~~ INCLUDES ~~~");
console.log("numbers:", numbers);
console.log("has 87?", numbers.includes(87));
console.log("has 7?", numbers.includes(7));

console.log("\n~~~ JOIN ~~~");
console.log("names:", names);
console.log(names.join());
console.log(names.join(" - "));

console.log("\n~~~ SLICE ~~~");
console.log("names:", names);
console.log("slice:", names.slice(4, 6));
console.log("slice:", names.slice());
console.log("names:", names);

names.push("A", "B", "C");

console.log("\n~~~ SPLICE ~~~");
console.log("\nnames:", names);
console.log("splice:", names.splice(0, 0, "Becca"));
console.log("names:", names);
console.log("splice:", names.splice(8, 3, "Aaron"));
console.log("names:", names);

console.log("\n~~~ POP ~~~");
console.log("before:", names);
console.log("pop:", names.pop());
console.log("after:", names);

console.log("\n~~~ SHIFT ~~~");
console.log("before:", names);
console.log("shift:", names.shift());
console.log("after:", names);
