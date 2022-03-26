function wordBreaker(input) {
  const operators = ["+", "-", "/", "*"];
  const words = [];
  const punctuations = [",", ";", "="];

  let lexeme = "";
  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      if (lexeme) {
        words.push(lexeme);
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
        words.push(lexeme);
        lexeme = "";
      }
    }
  }
  return words;
}

module.exports = wordBreaker;
