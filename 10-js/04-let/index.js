// ⚠️ ERROR DEMO: ReferenceError
// console.log(str1);

let str1 = "let 1";
console.log(str1);

if (str1) {
  let str2 = "let 2";
  console.log(str1);
  console.log(str2);
}

console.log(str1);

// ⚠️ ERROR DEMO: ReferenceError
// console.log(str2);

let user = { name: "Paula" };
console.log(user);
user = { name: "Paula Rodrigues" };
console.log(user);
