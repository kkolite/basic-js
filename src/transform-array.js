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
  if (Array.isArray(arr)) {
    let answer = [];
    let i = 0;
    while (i < arr.length) {
      if (arr[i] == '--discard-next') {
        i+=2;
      }
      else if (arr[i] == '--discard-prev') {
        if (i>0 && arr[i-2] != '--discard-next') {
          answer.pop();
        }
        i++
      }
      else if (arr[i] == '--double-next') {
        if (i+1 < arr.length) {
          answer.push(arr[i+1]);
        }
        i++;
      }
      else if (arr[i] == '--double-prev') {
        if (i>0 && arr[i-2] != '--discard-next') {
          answer.push(arr[i-1]);
        }
        i++;
      }
      else {
        answer.push(arr[i]);
        i++;
      }
    }
    return answer
  }
  else {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
}

module.exports = {
  transform
};
