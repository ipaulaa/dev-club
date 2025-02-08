function randint(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  if (minCeiled > maxFloored) {
    throw new Error("<min> must be smaller than <max>");
  }
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

try {
  console.log(randint(1, 10));
} catch (err) {
  console.log(err);
} finally {
  console.log("Finally!");
}

try {
  console.log(randint(10, 1));
} catch (err) {
  console.log(err.message);
} finally {
  console.log("Finally!");
}
