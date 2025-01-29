const age1 = Math.floor(Math.random() * 3);
const age2 = Math.floor(Math.random() * 3);

console.log("AGE 1:", age1);
console.log("AGE 2:", age2);

if (age1 === age2) {
  console.log("As duas pessoas tem a mesma idade!");
} else {
  console.log(`A ${age1 > age2 ? "primeira" : "segunda"} pessoa é mais velha`);
}
