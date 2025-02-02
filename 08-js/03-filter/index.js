const numbers = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000];
const bigNumbers = numbers.filter(num => num >= 100);

console.log("numbers:", numbers);
console.log("bigNumbers:", bigNumbers);

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

const newCompanies = companies.filter(
  company => company.marketValue < 200 && company.foundedYear >= 1990
);
console.log("newCompanies:", newCompanies);
