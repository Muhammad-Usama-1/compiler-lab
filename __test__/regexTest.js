const {
  isCharConstant,
  isStringConstant,
  isIdentifier,
  isReservedKeyword,
  isIntConstant,
  isFloatConstant,
} = require("../regexFunction");

isCharConstant("a");
isStringConstant("string");
isIdentifier("myvar");
isReservedKeyword("suppose");
isIntConstant("usama");
isFloatConstant("0.9");
