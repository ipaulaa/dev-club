function getRandomQuote() {
  const quotes = [
    "There are two hard things in programming: cache invalidation, naming things, and off-by-one errors.",
    "Debugging: Being the detective in a crime movie where you’re also the murderer.",
    "A user interface is like a joke. If you have to explain it, it’s not that good."
  ];
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

const quote1 = getRandomQuote();
const quote2 = getRandomQuote();

console.log("QUOTE 1:", quote1);
console.log("QUOTE 2:", quote2);

console.log(
  quote1 === quote2 ? "As strings são iguais" : "As strings são diferentes"
);
