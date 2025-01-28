const userInput = document.getElementById("user-input");

console.log(userInput.placeholder);
userInput.placeholder = "Enter anything here...";
console.log(userInput.placeholder);

userInput.value = "ANYTHING";
console.log(userInput.value);

const image = document.querySelector("img");
console.log(image.src);

image.src = "assets/hippo.png";
