const LA = require("../pureRegex");
const fs = require("fs");
const fileContent = fs.readFileSync(`${__dirname}/text1.txt`, "utf-8");
// const { isAlpha, isDigit } = require("./LA");
const isAlpha = (ch) => {
  if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
    if (puntuators.includes(ch)) {
      return false;
    }
    return true;
  }
};
const puntuators = [";", ",", "\n", ":", "[", "]", "{", "}", "(", ")"];

const operators = [
  "and",
  "or",
  "not",
  "*",
  "/",
  "%",
  "+",
  "-",
  "<",
  ">",
  ">=",
  "<=",
  "!=",
  "==",
  "band",
  "bor",
  "bnot",
  "bxor",
  ".",
];

const assignments = ["+=", "-=", "*=", "/=", "%=", "="];
const seperators = [];
seperators.push(...puntuators);
seperators.push(...operators);
seperators.push(...assignments);

const dot = ".";
const space = " ";
const quotes = ['"', "'"];
const Opencmt = "/*";
const Closecmt = "*/";
const cmts = [Opencmt, Closecmt];
function BreakWord(string) {
  let lexeme = "";
  const res = [];
  let i = 0;
  let dotcount = 0;
  while (i < string.length) {
    let char = string[i];
    if (char == "/" && string[i + 1] == "*") {
      char += string[i + 1];
    }
    if (cmts.includes(char)) {
      const cmtIp = char;
      if (i == string.length) break;
      lexeme += char;
      i += 1;
      char = string[i];
      while (!Closecmt.includes(lexeme)) {
        lexeme += char;
        if (i == string.length - 1) break;
        i += 1;
        char = string[i];
        res.push(lexeme);
        lexeme = "";
      }
    }
    if (quotes.includes(char)) {
      let qouteIp = char;
      if (char == "\n") break;
      lexeme += char;
      i += 1;
      char = string[i];
      while (char != qouteIp) {
        if (char == "\n") break;
        lexeme += char;
        i += 1;
        char = string[i];
      }
      if (char == "\n") {
        res.push(lexeme);
        lexeme = "";
      }
    }
    if (char != space) lexeme += char;
    if (i == string.length - 1) {
      if (
        char == space ||
        seperators.includes(char) ||
        seperators.includes(lexeme)
      ) {
        if (lexeme != "") {
          res.push(lexeme);
          lexeme = "";
        }
      } else {
        res.push(lexeme);
        lexeme = "";
      }
    }
    if (i + 1 < string.length) {
      let nextch = string[i + 1];
      let prech = string[i - 1];
      if (nextch == "=" && seperators.includes(char)) {
        lexeme += nextch;
        i += 1;
      }
      if (nextch == dot) {
        dotcount += 1;
        i += 1;
        char = string[i];
        nextch = string[i + 1];
        if (
          isAlpha(nextch) ||
          lexeme.length != 1 ||
          seperators.includes(nextch)
        ) {
          res.push(lexeme);
          lexeme = "";
        }
        if (dotcount > 0) lexeme += char;
      }
      if (
        string[i + 1] == space ||
        seperators.includes(string[i + 1]) ||
        seperators.includes(lexeme)
      ) {
        if (char == "+" || char == "-") {
          if (prech == "=" || prech == space || operators.includes(prech)) {
            if (string[i + 1] != space) {
              i = i + 1;
              char = string[i];
              lexeme += char;
              while (
                !seperators.includes(char) &&
                !seperators.includes(string[i + 1]) &&
                string[i + 1] != space
              ) {
                i = i + 1;
                char = string[i];

                lexeme += char;
              }
            }
          }
        }
        if (lexeme != "" && !dot.includes(lexeme)) {
          res.push(lexeme);
          lexeme = "";
        }
      }

      if (nextch == ";" && lexeme) {
        res.push(lexeme);
        lexeme = "";
      }
      if (char == dot && lexeme.length == 1 && isAlpha(nextch)) {
        res.push(lexeme);
        lexeme = "";
      }
    }
    i = i + 1;
  }
  return res;
}

let test = ` 
interface::A_B_C
while(a.b.c<<<<<==78.65
b+++=56.75ab7.11!^.56bcx.55.55.a5c
char c="abc++=\\"abc\\\*/"abc"a=b=c
string s='\\\'+'++'\n'+=35'\\
return a&&==@bc`;
let result = BreakWord(test);
console.log(result);

module.exports = BreakWord;
