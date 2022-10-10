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
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    result.push([]);
  }

  for (let k = 0; k < matrix.length; k++) {
    for (let n = 0; n < matrix[k].length; n++) {
      let count = 0;
      try {if (matrix[k][n-1] == true) count++}
      catch {}
      try {if (matrix[k][n+1] == true) count++}
      catch {}
      try {if (matrix[k-1][n] == true) count++}
      catch {}
      try {if (matrix[k+1][n] == true) count++}
      catch {}
      try {if (matrix[k-1][n-1] == true) count++}
      catch {}
      try {if (matrix[k-1][n+1] == true) count++}
      catch {}
      try {if (matrix[k+1][n-1] == true) count++}
      catch {}
      try {if (matrix[k+1][n+1] == true) count++}
      catch {}
      result[k].push(count);
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
