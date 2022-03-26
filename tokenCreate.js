const fs = require("fs");
const fileContent = fs.readFileSync("./text.txt", "utf-8");
const {
  isIntConstant,
  isReservedKeyword,
  isFloatConstant,
  isStringConstant,
} = require("./pureRegex");
const wordBreaker = require("./wordBreaker2");
const cc = wordBreaker(fileContent);
const tokens = [];
cc.forEach((c) => {
  if (isIntConstant(c)) {
    tokens.push({
      TYPE: "INT CONSTANT",
      value: c,
    });
  }
  if (isStringConstant(c)) {
    tokens.push({
      TYPE: "STRING CONSTANT",
      value: c,
    });
  }
  if (isReservedKeyword(c)) {
    tokens.push({
      TYPE: "KEYWORD",
      value: c,
    });
  }
  if (isFloatConstant(c)) {
    tokens.push({
      TYPE: "FLOAT NUMBER",
      value: c,
    });
  }
});
// console.log(isIntConstant("suppose"));
console.log(tokens);
