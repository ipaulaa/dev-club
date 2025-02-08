const API_URL = "https://economia.awesomeapi.com.br/last/USD-BRL";

const btnPromise = document.getElementById("btn-promise");
const btnAwait = document.getElementById("btn-await");

btnPromise.addEventListener("click", () => {
  const data = fetch(API_URL).then(res => res.json());
  console.log("~~~ convertPromise ~~~");
  console.log(data);
});

btnAwait.addEventListener("click", async () => {
  const data = await fetch(API_URL).then(res => res.json());
  console.log("~~~ convertAwait ~~~");
  console.log(data);
});
