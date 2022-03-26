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

isCharConstant("\n");
isStringConstant("\n");
isIdentifier("\n");
isReservedKeyword("\n");
isIntConstant("\n");
isFloatConstant("\n");
module.exports = {
  isCharConstant,
  isStringConstant,
  isIdentifier,
  isReservedKeyword,
  isIntConstant,
  isFloatConstant,
};
