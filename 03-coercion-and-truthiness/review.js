function howEqual (argA, argB) { // 10, 10
  if (argA === argB) { 
    return "strictly"; 
  } else if (argA == argB) {
    return "loosely";
  } else {
    return "not equal";
  }
}

function isTruthy(arg) {
  if(arg) { // if arg is truthy
    return true;
  } else {
    if (arg === false) {
      return 'The boolean value false is falsey'
    } else if (arg === null) {
      return 'The null value is falsey'
    } else if (arg === undefined) {
      return 'undefined is falsey'
    } else if (arg === 0) {
      return 'The number 0 is falsey (the only falsey number)'
    } else {
      return 'The empty string is falsey (the only falsey string)'
    }
  }
}

// || returns the first truthy value of the last value if all are falsey

function myOr (argA, argB, argC) {
  
  if (argA) {
    return argA;
  }
  
  if (argB) {
    return argB;
  }
  
  if (argC) {
    return argC;
  }
  
  return argC
  
}

// && returns the first falsey value or the last value if all are truthy


function myAnd(argA, argB, argC) {
  if (!argA) { 
    return argA
  }
  
  if (!argB) {
    return argB
  }
  
  if (!argC) {
    return argC
  }
  
  return argC;
}

function onlyOne(argA, argB, argC) {
  if (argA && !argB && !argC) {
    return true;
  } else if (!argA && argB && !argC) {
    return true;
  } else if (!argA && !argB && argC) {
    return true;
  } else {
    return false;
  }
}

function zeroDarkThirty(num) { // num 23
  
  if (num === 0) return NaN;
  
  num = String(num);
  let zerosRemoved = "";
   
  for (let i = 0; i < num.length; i++) { // len = 2
    let char = num[i];
    if (char === "0") {
      continue;
    } else {
      zerosRemoved += char;
    }
  }

  return Number(zerosRemoved);
  
}