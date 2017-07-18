// Check to see if all elements in an array
// are even numbers.

function allEven (input) {
  return input.every(number => number % 2 === 0);
};

// Check to see if all elements in an array
// are of the same type.

function allSameType (input) {
  return input.every(type => typeof type === 'number');
};

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix (input) {
  return input.every(matrix => matrix.every(number => number > 0));
};

// Check that all items in an array are strings
// and that they all only contain the same vowels.

// function allSameVowels (input) {
//   return input.every(function(word){
//     if (typeof word === 'string'){
//       return word.includes('a') && (!word.includes('e','i','o','u')) ||
//        word.includes('e') && (!word.includes('a','i','o','u')) ||
//        word.includes('i') && (!word.includes('a','e','o','u')) ||
//        word.includes('o') && (!word.includes('a','e','i','u')) ||
//        word.includes('u') && (!word.includes('a','e','i','o'));
//     };
//   });
// };

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
