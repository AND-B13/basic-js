const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    result.push([]);
    for (let j = 0; j < cols; j++) {
      let num = 0;

      for (let k = -1; k <= 1; k++) {
        for (let m = -1; m <= 1; m++) {
          if (k === 0 && m === 0) continue;
          const row = i + k;
          const col = j + m;
          if (
            row >= 0 &&
            row < rows &&
            col >= 0 &&
            col < cols &&
            matrix[row][col]
          ) {
            num++;
          }
        }
      }

      result[i].push(num);
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
