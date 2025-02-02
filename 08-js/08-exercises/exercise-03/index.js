function filterEvens(arr) {
  return arr.filter(n => n % 2 === 0);
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(filterEvens(numbers));
