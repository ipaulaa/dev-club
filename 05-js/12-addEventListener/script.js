function logEvent(event) {
  console.log(event);
}

const tech = document.getElementById("tech");
const userInput = document.getElementById("user-input");
const loremBtn = document.getElementById("lorem-btn");

tech.addEventListener("change", function (event) {
  console.log(event);
});
userInput.addEventListener("keypress", logEvent);
loremBtn.addEventListener("click", logEvent);
