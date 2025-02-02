function sumNumbers(arr) {
  return arr.reduce((acc, n) => acc + n);
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(sumNumbers(numbers));
