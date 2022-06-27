const fs = require("fs");
const BreakWord = require("../again/wordSpiliter");
const fileContent = fs.readFileSync("./text.txt", "utf-8");
// const tokennizer = require("../wordBreaker2");
const arr = BreakWord(fileContent);
console.log(arr);
// console.log(tokennizer(fileContent));
