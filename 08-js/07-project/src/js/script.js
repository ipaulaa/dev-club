const getFormatPrice = price => {
  return FORMATTER.format(price);
};

const addProduct = product => {
  return `<li>
    <img src="${product.src}" alt="${product.name}" />
    <h2>${product.name}</h2>
    <p id="price">${FORMATTER.format(product.price)}</p>
  </li>`;
};

const addProducts = products => {
  let elements = "";
  products.forEach(product => {
    elements += addProduct(product);
  });

  main.innerHTML = `
    <ul>
      ${elements}
    </ul>`;
};

const FORMATTER = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "brl"
});

const forEachBtn = document.getElementById("foreach-btn");
const mapBtn = document.getElementById("map-btn");
const reduceBtn = document.getElementById("reduce-btn");
const filterBtn = document.getElementById("filter-btn");

const main = document.getElementById("main");

forEachBtn.addEventListener("click", () => addProducts(menuOptions));
mapBtn.addEventListener("click", () => {
  const newMenuOptions = menuOptions.map(opt => ({
    ...opt,
    price: opt.price * 0.9
  }));

  addProducts(newMenuOptions);
});

reduceBtn.addEventListener("click", () => {
  const total = menuOptions.reduce((acc, opt) => acc + opt.price, 0);
  console.log(total);
  main.innerHTML = `<p class="total">Total: <span>${FORMATTER.format(total)}</span></p>`;
});

filterBtn.addEventListener("click", () => {
  const veganMenuOptions = menuOptions.filter(opt => opt.vegan);
  addProducts(veganMenuOptions);
});
