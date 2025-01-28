function logInput() {
  userOutput.textContent = userInput.value;
  userInput.value = "";
}

const userInput = document.getElementById("user-input");
const userOutput = document.getElementById("user-output");
