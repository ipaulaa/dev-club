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

// Companies founded before 1990
// Add 10% to market values
// Sum the new market values
const marketValue = companies
  .filter(company => company.foundedYear < 1990)
  .map(company => company.marketValue * 1.1)
  .reduce((acc, marketValue) => acc + marketValue);

console.log(`marketValue: $${marketValue.toFixed(2)}`);
