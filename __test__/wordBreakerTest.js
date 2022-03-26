const fs = require("fs");
const tokennizer = require("../wordBreaker2");
const fileContent = fs.readFileSync("./text.txt", "utf-8");
// console.log(tokennizer(fileContent));
