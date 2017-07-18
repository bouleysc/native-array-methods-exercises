function onlyEven (array) {
  return array.filter(number => number % 2 === 0);
};

function onlyOneWord (array) {
  return array.filter(string => !string.includes(' '));
};

function positiveRowsOnly (array) {
  return array.filter(function(array2){
    return array2.filter(function(number){
      return !array2.number.includes('-');
    });
  });
};

function allSameVowels (array) {
  return array.filter(function(word){
    if (word.includes('a') && !word.includes('e','i','o','u')) {
      return word;
    } else if (word.includes('e') && !word.includes('a','i','o','u')) {
      return word;
    } else if (word.includes('i') && !word.includes('a','e','o','u')) {
      return word;
    } else if (word.includes('o') && !word.includes('a','e','i','u')) {
      return word;
    } else if (word.includes('u') && !word.includes('a','e','i','o')) {
      return word;
    }
  });
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
