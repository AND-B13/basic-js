const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const transformArr = [];

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (el === '--discard-next') {
      i++;
    } else if (el === '--discard-prev') {
      if (transformArr.length > 0) {
        transformArr.pop();
      }
    } else if (el === '--double-next') {
      if (i + 1 < arr.length) {
        transformArr.push(arr[i + 1] * 2);
      }
    } else if (el === '--double-prev') {
      if (i - 1 >= 0) {
        transformArr.push(arr[i - 1] * 2);
      }
    } else {
      transformArr.push(el);
    }
  }

  return transformArr;
}

module.exports = {
  transform
};
