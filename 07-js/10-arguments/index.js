function logName(name) {
  console.log(`Name is: ${name}`);
}

function add(n1, n2) {
  console.log(`${n1} + ${n2} is ${n1 + n2}`);
}

function greet(name = "World") {
  console.log(`Hello, ${name}!`);
}

logName();
logName("Paula");
logName("Xavier");
logName("Luna", "Valerie");

console.log();
add(13, 17);
add(21, 19);

console.log();
greet();
greet("Kyle");
