const primes = [2, 3, 5, 7];
const sum = primes.reduce((acc, num) => acc + num);
console.log("primes:", primes);
console.log("sum:", sum);

const companies = [
  {
    name: "Samsung",
    marketValue: 50,
    CEO: "Kim Hyun Suk",
    foundedYear: 1938
  },
  {
    name: "Microsoft",
    marketValue: 415,
    CEO: "Satya Nadella",
    foundedYear: 1975
  },
  {
    name: "Intel",
    marketValue: 117,
    CEO: "Brian Krzanich",
    foundedYear: 1968
  },
  {
    name: "Facebook",
    marketValue: 383,
    CEO: "Mark Zuckerberg",
    foundedYear: 2004
  },
  {
    name: "Spotify",
    marketValue: 30,
    CEO: "Daniel Ek",
    foundedYear: 2006
  },
  {
    name: "Apple",
    marketValue: 845,
    CEO: "Tim Cook",
    foundedYear: 1976
  }
];

const sumMarketValues = companies.reduce(
  (acc, company) => acc + company.marketValue,
  0
);
console.log(sumMarketValues);

const cart = [
  { productName: "Apple", pricePerKg: 5.19, weightKg: 1.2 },
  { productName: "Watermelon", pricePerKg: 3.9, weightKg: 4.5 },
  { productName: "Pineapple", pricePerKg: 3.98, weightKg: 2.3 },
  { productName: "Grapes", pricePerKg: 7.28, weightKg: 1.8 },
  { productName: "Banana", pricePerKg: 3.26, weightKg: 2.1 }
];

const shoppingTotal = cart.reduce(
  (acc, product) => acc + product.pricePerKg * product.weightKg,
  0
);

console.log(`shoppingTotal: $${shoppingTotal.toFixed(2)}`);
