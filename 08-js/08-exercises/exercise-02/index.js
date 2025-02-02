function getLengths(arr) {
  return arr.map(name => name.length);
}

const names = ["Chloe", "Marie", "Daisy", "Isaac", "Valerie", "Xavier", "Zoe"];
console.log(getLengths(names));
