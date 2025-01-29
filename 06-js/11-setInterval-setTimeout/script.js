const list = document.getElementById("list");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

let interval;
let timeout;

startBtn.addEventListener("click", () => {
  list.textContent = "";

  let counter = 0;
  interval = setInterval(() => {
    list.innerHTML += `<li>${++counter} second(s)</li>`;
  }, 1000);

  timeout = setTimeout(() => {
    list.innerHTML += `<li>DONE! 🥳</li>`;
    clearInterval(interval);
  }, 9000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  clearTimeout(timeout);
});
