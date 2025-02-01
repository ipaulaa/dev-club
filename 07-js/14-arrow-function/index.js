const greet1 = () => "Hello, World!";
const square1 = num => num ** 2;
const cube1 = num => num ** 3;
const power1 = (base, exponent) => base ** exponent;

console.log(greet1());
console.log(square1(3));
console.log(cube1(3));
console.log(power1(3, 7));

const greet2 = () => {
  return "Hello, World!";
};

const square2 = num => {
  return num ** 2;
};

const cube2 = num => {
  return num ** 3;
};

const power2 = (base, exponent) => {
  return base ** exponent;
};

console.log(greet2());
console.log(square2(3));
console.log(cube2(3));
console.log(power2(3, 7));
