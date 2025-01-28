const items = document.querySelectorAll(".item");
const changeBtn = document.querySelector("#change-btn");

changeBtn.addEventListener("click", () => {
  for (const item of items) {
    item.textContent = "Item alterado";
  }
});
