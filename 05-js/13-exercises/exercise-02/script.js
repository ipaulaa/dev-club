const links = document.getElementsByTagName("a");

for (const link of links) {
  link.addEventListener("click", () => {
    alert(link.textContent);
  });
}
