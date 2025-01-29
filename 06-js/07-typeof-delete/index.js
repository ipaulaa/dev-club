const symbol = "π";
const value = 3.14159;
const isIrrational = true;
const piArray = [symbol, value, isIrrational];
const pi = { symbol, value, isIrrational };

console.log(symbol, typeof symbol);
console.log(value, typeof value);
console.log(isIrrational, typeof isIrrational);
console.log(piArray, typeof piArray);
console.log(pi, typeof pi);

console.log(pi);
delete pi.isIrrational;
console.log(pi);
