const fs = require("fs");

const content = fs.readFileSync("readme.md", "utf8");

const wordCount = content.split(" ");

/*
const reactWordCount = wordCount.filter(
  (wordCount) => wordCount.toLowerCase().includes('react')
).length;
*/

const reactWordCount = content.match(/react/gi ?? []).length;

console.log("Palabras: ", wordCount.length);

console.log("Palabras React: ", reactWordCount); // case insensitive
