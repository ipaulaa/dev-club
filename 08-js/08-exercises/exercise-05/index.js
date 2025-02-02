function filterLargeWords(arr) {
  return arr.filter(word => word.length > 5);
}

const words = [
  "apple",
  "sky",
  "banana",
  "orange",
  "code",
  "laptop",
  "react",
  "server",
  "cloud",
  "mouse",
  "desktop",
  "train",
  "screen",
  "graph",
  "notebook"
];

console.log(filterLargeWords(words));
