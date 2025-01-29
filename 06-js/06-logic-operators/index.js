const a = true;
const b = false;

let result = a && a;
console.log(`${a} && ${a}`, result);

result = a && b;
console.log(`${a} && ${b}`, result);

result = b && a;
console.log(`${b} && ${a}`, result);

result = b && b;
console.log(`${b} && ${b}`, result);

result = a || a;
console.log(`${a} || ${a}`, result);

result = a || b;
console.log(`${a} || ${b}`, result);

result = b || a;
console.log(`${b} || ${a}`, result);

result = b || b;
console.log(`${b} || ${b}`, result);

result = !a;
console.log(`!${a}`, result);

result = !b;
console.log(`!${b}`, result);
