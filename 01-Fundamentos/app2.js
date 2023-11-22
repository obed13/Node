const fs = require("fs");

const data = fs.readFileSync("readme.md", "utf8");

const newData = data.replace(/React/gi, "Angular");

fs.writeFileSync("readme-Angular.md", newData);

//console.log(data);
