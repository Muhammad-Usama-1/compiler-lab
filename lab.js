function isIdentifier(str) {
  const pattern = new RegExp("(^[^dW]w*z)");
  if (pattern.test(str)) {
    return true;
  }
}

function isIntConstant(str) {
  // const pattern = new RegExp("([+|-][0-9]+)|([0-9]+)");
  const pattern = new RegExp("^d+$");
  if (pattern.test(str)) {
    return true;
  } else return false;
}

function isFloatConstant(str) {
  const pattern = new RegExp("([+|-][0-9]*[.][0-9]+)|([0-9]*[.][0-9]+)");
  if (pattern.test(str)) {
    return true;
  } else return false;
}

function isCharConstant(str) {
  const pattern = new RegExp("[wW]");
  if (pattern.test(str)) {
    return true;
  } else return false;
}
function isStringConstant(str) {
  const pattern = new RegExp("[wW]*");
  if (pattern.test(str)) {
    return true;
  } else return false;
}

const test3 = isIntConstant("qw");
