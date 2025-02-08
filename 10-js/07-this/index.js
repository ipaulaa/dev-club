const { user } = require("./user");

console.log(user);
user.greet();

function logThis() {
  console.log(this);
}

logThis();
