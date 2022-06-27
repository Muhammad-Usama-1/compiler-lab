function validator(str) {
  //Char Conatant
  const regCharConstant = /[\w\W]/;
  var validationCharConstant = regCharConstant.test(str);
  console.log(str, "is a valid character constant:", validationCharConstant);

  //String Constant
  const regStringConstant = /[\w\W]*/;
  var validationStringConstant = regStringConstant.test(str);
  console.log(str, "is a valid string constant:", validationStringConstant);

  //Identifier
  const regIdentifier =
    /^(?!(?:awt|brk|case|catch|class|const|cont|dbg|def|del|do|else|enum|expt|ext|false|fnl|for|fctn|if|impl|impt|in|instof|itf|let|new|null|pkg|pvt|ptd|pbc|rtn|spr|swi|stc|this|throw|try|true|typof|var|void|while|with|yield)$)[$A-Z_][0-9A-Z_$]*$/i;
  var validationIdentifier = regIdentifier.test(str);
  console.log(str, "is a valid identifier:", validationIdentifier);

  //Reserved Keyword
  const regReservedKeyword =
    /awt|brk|case|catch|class|const|cont|dbg|def|del|do|else|enum|expt|ext|false|fnl|for|fctn|if|impl|impt|in|instof|itf|let|new|null|pkg|pvt|ptd|pbc|rtn|spr|swi|stc|this|throw|try|true|typof|var|void|while|with|yield/;
  var validationReservedKeyword = regReservedKeyword.test(str);
  console.log(str, "is a valid reserved keyword:", validationReservedKeyword);

  //Int Constant
  const regIntConstant = /([+|-][0-9]+)|([0-9]+)/;
  var validationIntConstant = regIntConstant.test(str);
  console.log(str, "is a valid integer constant:", validationIntConstant);

  //Float Constant
  const regFloatConstant = /([+|-][0-9][.][0-9]+)|([0-9][.][0-9]+)/;
  var validationFloatConstant = regFloatConstant.test(str);
  console.log(str, "is a valid float constant:", validationFloatConstant);
}
