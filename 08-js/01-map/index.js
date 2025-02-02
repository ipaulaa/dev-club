const primes = [2, 3, 5, 7];
const cubes = primes.map(num => num ** 3);
const newNumbers = primes.map((num, index) => num * index);
const specialNumbers = primes.map((num, index, arr) => {
  console.log("num:", num);
  console.log("index:", index);
  console.log("arr:", arr);
  console.log();
  return num + index;
});

console.log("primes:", primes);
console.log("cubes:", cubes);
console.log("newNumbers:", newNumbers);
console.log("specialNumbers:", specialNumbers);

const users = [
  { name: "Chloe", vip: true },
  { name: "Marie", vip: false },
  { name: "Daisy", vip: true },
  { name: "Isaac", vip: true },
  { name: "Valerie", vip: false },
  { name: "Xavier", vip: true },
  { name: "Zoe", vip: false }
];

const updateUsers = users.map(user => ({
  name: user.name,
  vip: user.vip,
  bracelet: `${user.vip ? "🟣️" : "🟡"}`
}));
console.log(updateUsers);

const students = [
  { name: "Chloe", grade: 7 },
  { name: "Marie", grade: 5 },
  { name: "Daisy", grade: 8 },
  { name: "Isaac", grade: 9 },
  { name: "Valerie", grade: 3 },
  { name: "Xavier", grade: 2 },
  { name: "Zoe", grade: 10 }
];

const updateStudents = students.map(student => ({
  name: student.name,
  grade: student.grade,
  result: student.grade < 6 ? "❌" : "✅"
}));

console.log(updateStudents);
