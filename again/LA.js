const fs = require("fs");
const regex = require("./regex");
const Token = require("./Token");
const BreakWord = require("./wordSpiliter");
const fileContent = fs.readFileSync(`${__dirname}/text1.txt`, "utf-8");
const quotes = ['"', "'"];

// const puntuators = [";", ",", "\n", ":", "[", "]", "{", "}", "(", ")"];
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

// const assignments = ["+=", "-=", "*=", "/=", "%=", "="];
const assignments = ["+=", "-=", "*=", "/=", "%=", "="];
const seperators = [];
seperators.push(...puntuators);
seperators.push(...operators);
seperators.push(...assignments);
const isAlpha = (ch) => {
  if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
    if (puntuators.includes(ch)) {
      return false;
    }
    return true;
  }
};
const isDigit = (ch) => {
  if (digits.includes(ch)) {
    return true;
  }
};
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const MDM = ["*", "/", "%"];
const PM = ["+", "-"];
const ROP = ["<", ">", ">=", "<=", "!=", "=="];
const DT = ["int", "float", "char", "double", "string", "suppose"];
const AM = ["public", "private", "protected", "sealed"];
const VO = ["virtual", "overide"];

const lexer = () => {
  const Tokens = [];
  let lineNo = 1;
  let string = fileContent;
  let words = BreakWord(string);
  // for (let word in words) {
  for (let word of words) {
    const Token1 = new Token();

    if (word.includes("\n")) {
      lineNo += 1;
    }
    if (word.includes("/*")) {
      continue;
    }
    if (word[0] == "_") {
      // If
      if (regex.isIdentifier(word)) {
        Token1.CP = "ID";
        Token1.VP = word;
        Token1.LineNo = lineNo;
        // console.log("Pushing something....", Token1);
        Tokens.push(Token1);
      } else {
        Token1.CP = "Invalid Lexeone";
        Token1.VP = word;
        Token1.LineNo = lineNo;
        // console.log("Pushing something....", Token1);

        Tokens.push(Token1);
      }
    }

    if (isAlpha(word[0])) {
      // console.log(regex.isIdentifier(word));
      if (regex.isIdentifier(word)) {
        let temp = regex.isKw(word);
        // console.log("pppppppppppppppp", temp);
        if (temp == "") {
          Token1.CP = "ID";
          Token1.VP = word;
          Token1.LineNo = lineNo;
          // console.log("Pushing----->", Token1.VP);
          Tokens.push(Token1);

          // Call class
        } else {
          // something remain
          Token1.VP = temp;
          let = Token1.VP = temp;
          if (DT.includes(temp)) {
            Token1.VP = temp;
          } else if (AM.includes(temp)) {
            Token1.CP = temp;
          } else if (VO.includes(temp)) {
            Token1.CP = "VO";
          } else {
            Token1.CP = temp;
          }

          Token1.LineNo = lineNo;
          console.log("Pushing something...here.", Token1.VP);
          Tokens.push(Token1);
        }
      } else {
        Token1.CP = "Invalid Lexeone";
        Token1.VP = word;
        Token1.LineNo = lineNo;
        // console.log("--------->", word);
        console.log("Pushing something....", Token1);
        Tokens.push(Token1);
      }
    }
    // if(word in WordSplitter.seperators):
    if (seperators.includes(word)) {
      if (word == "\n") {
      } else {
        // console.log();
        Token1.VP = word;
        if (assignments.includes(word)) {
          Token1.CP = "AOP";
        } else if (MDM.includes(word)) {
          Token1.CP = "MDM";
        } else if (PM.includes(word)) {
          Token1.CP = "PM";
        } else if (ROP.includes(word)) {
          Token1.CP = "ROP";
        } else {
          Token1.CP = word;
        }
        Token1.LineNo = lineNo;
        // console.log("here is s....", Token1.VP);
        Tokens.push(Token1);
      }
    }

    if (
      isDigit(word[0]) ||
      ((word[0] == "+" || word[0] == "-") && !seperators.includes(word))
    ) {
      if (regex.isIntConstant(word)) {
        Token1.CP = "int";
        Token1.VP = word;
        Token1.LineNo = lineNo;
        // console.log("pushing int...", Token1.VP);
        Tokens.push(Token1);
      } else if (regex.isFloatConstant(word)) {
        Token1.CP = "float";
        Token1.VP = word;
        Token1.LineNo = lineNo;
        // console.log("pushing int...", Token1.VP);

        Tokens.push(Token1);
      }
    } else {
      console.log("Pushing something....", Token1);
      Token1.CP = "Invalid Lexeone";
      Token1.VP = word;
      Token1.LineNo = lineNo;
      Tokens.push(Token1);
    }
    if (quotes.includes(word[0])) {
      if (regex.isStringConstant(word.slice(1, -1))) {
        if (word.length == 3 || word.length == 4) {
          if (regex.isCharConstant(word.slice(1, -1))) {
            // if(regex.isCharConstant(word[1:-1])) {
            Token1.CP = "char";
            Token1.VP = word.slice(1, -1);
            Token1.LineNo = lineNo;
            Tokens.push(Token1);
          }
        } else {
          Token1.CP = "string";
          Token1.VP = word.slice(1, -1);
          Token1.LineNo = lineNo;
          Tokens.push(Token1);
        }
      }
    }
  }
  let Token11 = new Token();
  Token11.CP = "$";
  Token11.VP = "$";
  Token11.LineNo = lineNo;
  Tokens.push(Token11);
  return Tokens;
};

const result = lexer();
console.log("--->", result);
module.exports = { isAlpha, isDigit };
