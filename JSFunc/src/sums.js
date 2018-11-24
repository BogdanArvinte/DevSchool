function simpleSum(a, b) {
  return a + b;
}

function variableSum(a, b, ...others) {
  const o = others.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  return a + b + o;
}

function currySum(a) {
  return function(b) {
    return isNaN(a) || isNaN(b) ? null : a + b;
  }
}

module.exports = {
  simpleSum,
  variableSum,
  currySum
};

// console.debug(variableSum(1, 2, 3, 4));

// const partSum = currySum(2);
// const sum = partSum(3);
// const finalSum = currySum(2)(3);

// console.debug(sum, finalSum);