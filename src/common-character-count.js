const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commonNumber = 0;
  const stringOne = s1.split('');
  const stringTwo = s2.split('');
  
  for(let i = 0; i < Math.max(stringOne.length, stringTwo.length); ++i) {
    const index = stringOne.indexOf(stringTwo[i]);
    if (index !== -1) {
      commonNumber++;
      stringOne.splice(index, 1);
    }
  }

  return commonNumber;
}

module.exports = {
  getCommonCharacterCount
};
