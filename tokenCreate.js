const fs = require("fs");
const fileContent = fs.readFileSync("./text.txt", "utf-8");
const regex = require("./pureRegex");
const wordBreaker = require("./wordBreaker2");
const words = wordBreaker(fileContent);
const tokens = [];
words.forEach((w) => {
  if (regex.isIntConstant(w)) {
    tokens.push({
      TYPE: "INT CONSTANT",
      value: w,
    });
  }

  if (regex.isStringConstant(w)) {
    tokens.push({
      TYPE: "STRING CONSTANT",
      value: w,
    });
  }
  if (regex.isReservedKeyword(w)) {
    tokens.push({
      TYPE: "KEYWORD",
      value: w,
    });
  }
  if (regex.isFloatConstant(w)) {
    tokens.push({
      TYPE: "FLOAT NUMBER",
      value: w,
    });
  }
});

// console.log(isIntConstant("suppose"));
console.log(tokens);
