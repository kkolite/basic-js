const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let result = [];
  let temp = [];
  arr.forEach(el => {
    if (el != -1) {temp.push(el)}
  })
  temp.sort((a,b) => a-b);

  let k = 0;
  arr.forEach(el => {
    if (el == -1) {result.push(-1)}
    else {
      result.push(temp[k]);
      k++
    }
  })

  return result
}

module.exports = {
  sortByHeight
};
