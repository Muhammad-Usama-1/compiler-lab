const fs = require("fs");
const fileContent = fs.readFileSync("./text.txt", "utf-8");
const operators = ["+", "-", "/", "*"];
const punctuations = [",", ";", "="];
let tokens = [];
let lexeme = "";
function tokennizer(input) {
  let current = 0;
  while (current < input.length) {
    let char = input[current];
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current = current + 1;
      continue;
    }
    if (!operators.includes(char) && !punctuations.includes(char)) {
      lexeme = lexeme + char;
      current = current + 1;
    }
    if (operators.includes(char) || punctuations.includes(char)) {
      tokens.push(lexeme);
      lexeme = "";
      current = current + 1;
    }
  }
}
tokennizer(fileContent);
console.log(tokens);
