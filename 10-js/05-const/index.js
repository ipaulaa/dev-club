// ⚠️ ERROR DEMO: ReferenceError
// console.log(str1);

const str1 = "const 1";
console.log(str1);

if (str1) {
  const str2 = "const 2";
  console.log(str1);
  console.log(str2);
}

console.log(str1);

// ⚠️ ERROR DEMO: ReferenceError
// console.log(str2);

const user = { name: "Paula" };
console.log(user);

// ⚠️ ERROR DEMO: TypeError
// user = { name: "Paula Rodrigues" };

user.name = "Paula Bueno";
console.log(user);
