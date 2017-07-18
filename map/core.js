function multiplyBy10 (array) {
  return array.map(number => number * 10);
};

function shiftRight (array) {
  return array.map(function () {
    return (array.unshift(array.pop()) + array)
  });
};

function onlyVowels (array) {
  return array.map(string => string.replace(/[bcdfghjklmnpqrstvwxyz]/ig,''));
};

function doubleMatrix (array) {
  return array.map(array2 => array2.map(number => number * 2));
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
