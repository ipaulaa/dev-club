function applyDiscount(value, threshold, discount) {
  const discountFactor = 1 - discount / 100;
  return value >= threshold ? discountFactor * value : value;
}

const prices = [10, 244, 99, 2, 20, 33, 250];

let total = 0;
let finalPrice = 0;
prices.forEach(price => {
  total += price;
  finalPrice += applyDiscount(price, 30, 10);
});

const discount = total - finalPrice;
console.log(`Total: $ ${total.toFixed(2)}`);
console.log(`Discount: $ ${discount.toFixed(2)}`);
console.log(`Final Price: $ ${finalPrice.toFixed(2)}`);
