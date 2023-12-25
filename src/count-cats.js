const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let numberEars = 0;
  // matrix.forEach(arr => {
  //   for(let i = 0; i < arr.length; i++ ) {
  //     if(arr[i] === '^^') {
  //       numberEars++;
  //     }
  //   }
  // })
  
  matrix.forEach(arr => {
    arr.forEach(el => {
      if(el === '^^') {
        numberEars++;
      }
    })
  })
  return numberEars;
}

module.exports = {
  countCats
};
