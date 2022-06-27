function isCharConstant(str) {
  const pattern = /[\w\W]/;
  const result = pattern.test(str);
  return result;
  //   console.log(str, "Is a valid character constant:", result);
}

function isStringConstant(str) {
  const pattern = /[\w\W]*/;
  const result = pattern.test(str);
  return result;

  //   console.log(str, "is a valid string constant:", result);
}

function isIdentifier(str) {
  // const pattern =
  //   /^(?!(?:awt|brk|case|catch|class|const|cont|dbg|def|del|do|else|enum|expt|ext|false|fnl|for|fctn|if|impl|impt|in|instof|itf|let|new|null|pkg|pvt|ptd|pbc|rtn|spr|swi|stc|this|throw|try|true|typof|var|void|while|with|yield)$)[$A-Z_][0-9A-Z_$]*$/i;
  const pattern =
    /^(?!(?:var|suppose|stable|add|sub|mul|div|pow|mod|now|peroid|do|stop|continue|and|or|not|weather|otherwise|true|false|fn|return|level|try|except|pass|null)$)[$A-Z_][0-9A-Z_$]*$/i;
  const result = pattern.test(str);
  return result;

  //   console.log(str, "is a valid identifier:", result);
}

function isReservedKeyword(str) {
  // const pattern =
  //   /awt|brk|case|catch|class|const|cont|dbg|def|del|do|else|enum|expt|ext|false|fnl|for|fctn|if|impl|impt|in|instof|itf|let|new|null|pkg|pvt|ptd|pbc|rtn|spr|swi|stc|this|throw|try|true|typof|var|void|while|with|yield/;
  const pattern =
    /var|suppose|stable|add|sub|mul|div|pow|mod|now|peroid|do|stop|continue|and|or|not|weather|otherwise|true|false|fn|return|level|try|except|pass|null/;
  const result = pattern.test(str);
  return result;

  //   console.log(str, "is a valid reserved keyword:", result);
}

function isIntConstant(str) {
  // const pattern = /([+|-][0-9]+)|([0-9]+)/;
  // const pattern = /^d+$/;
  const pattern = /^[0-9]+$/;
  const result = pattern.test(str);
  //   console.log(str, "is a valid integer constant:", result);
  return result;
}

function isFloatConstant(str) {
  const pattern = /([+|-][0-9][.][0-9]+)|([0-9][.][0-9]+)/;
  const result = pattern.test(str);
  //   console.log(str, "is a valid float constant:", result);
  return result;
}
// isCharConstant("\n");
// isStringConstant("90");
// isIdentifier("\n");
// isReservedKeyword("\n");
// isIntConstant("\n");
// isFloatConstant("\n");
const KW = [
  "for",
  "while",
  "in",
  "if",
  "else",
  "elif",
  "break",
  "cont",
  "true",
  "false",
  "class",
  "public",
  "private",
  "protected",
  "sealed",
  "virtual",
  "override",
  "overload",
  "def",
  "mul",
  "dict",
  "void",
  "return",
  "var",
  "int",
  "float",
  "char",
  "string",
  "bool",
  "main",
  "tuple",
  "and",
  "or",
  "not",
  "band",
  "bor",
  "bnot",
  "bxor",
  "suppose",
];

const isKw = (str1) => {
  // if str1 in KW:
  if (KW.includes(str1)) {
    return str1;
  }
  return "";
};

const regex = {
  isCharConstant,
  isIdentifier,
  isReservedKeyword,
  isIntConstant,
  isFloatConstant,
  isStringConstant,
  isKw,
};
module.exports = regex;
