const text = document.getElementById("text");
const changeBtn = document.getElementById("change-btn");

changeBtn.addEventListener("click", () => {
  text.textContent = "Olá, mundo!";
});
