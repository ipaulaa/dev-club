const text = document.querySelector("#text");
const changeBtn = document.querySelector("#change-btn");

changeBtn.addEventListener("click", () => {
  text.textContent = "Olá, mundo!";
});
