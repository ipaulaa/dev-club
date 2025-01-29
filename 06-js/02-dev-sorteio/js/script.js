function getRandom(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
}

function generateRandomNumber() {
  const min = parseInt(minBound.value);
  const max = parseInt(maxBound.value);
  const randomNumber = getRandom(min, max);
  alert(randomNumber);
}

const minBound = document.getElementById("min-bound");
const maxBound = document.getElementById("max-bound");
const drawBtn = document.getElementById("draw-btn");

drawBtn.addEventListener("click", generateRandomNumber);
