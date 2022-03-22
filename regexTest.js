const {
  isCharConstant,
  isFloatConstant,
  isIdentifier,
  isIntConstant,
  isReservedKeyword,
  isStringConstant,
} = require("./regexFunction");

isCharConstant("usama");
isFloatConstant("0.7");
isIdentifier("supposes");
isIntConstant("78");
isReservedKeyword("stable");
isStringConstant("hell");
