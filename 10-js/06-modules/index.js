const user = require("./user");
const math = require("./math");
const { add, sub, mul, div, pow, mod } = require("./math");

console.log(user);

console.log(math.add(7, 9));
console.log(math.sub(72, 9));
console.log(math.mul(7, 3));
console.log(math.div(72, 9));
console.log(math.pow(2, 11));
console.log(math.mod(73, 9));

console.log();
console.log(add(7, 9));
console.log(sub(72, 9));
console.log(mul(7, 3));
console.log(div(72, 9));
console.log(pow(2, 11));
console.log(mod(73, 9));
