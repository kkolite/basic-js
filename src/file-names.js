const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = [];
  let tempArr = [];
  let k = 0;
  /*let set = new Set;
  names.forEach(el => {
    set.add(el);
  })*/
  function addK (el) {
    if (result.includes(el)) {
      k = tempArr.filter(e => e==el).length;
      if (k < 1) {k = 1}
      tempArr.push(el);
      return `${el}(${k})`;
    }
    else {
      tempArr.push(el);
      return el;
    }
  }
  names.forEach(el => {
    result.push(addK(el))
  })
  return result
}

module.exports = {
  renameFiles
};
