const fs = require("fs");
const fileContent = fs.readFileSync("./text.txt", "utf-8");
// console.log(fileContent);
const operators = ["+", "-", "/", "*"];
const arr = [];
const punctuations = [",", ";", "="];

let lexeme = "";
for (let i = 0; i < fileContent.length; i++) {
  const char = fileContent.charAt(i);
  let WHITESPACE = /\s/;
  if (WHITESPACE.test(char)) {
    if (lexeme) {
      arr.push(lexeme);
      lexeme = "";
    }
    continue;
  }
  // if (WHITESPACE.test(char)) continue;
  if (!operators.includes(char) && !punctuations.includes(char)) {
    // console.log("not operator nor punctuations");
    lexeme = lexeme + char;
  }
  if (operators.includes(char) || punctuations.includes(char)) {
    if (lexeme) {
      arr.push(lexeme);
      lexeme = "";
    }
  }
}
console.log(arr);
console.log(fileContent);
