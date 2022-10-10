const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let additional = [];
  let k = 0;
  if (!options.additionRepeatTimes) {
    additional.push(options.addition);
  };
  while (k < options.additionRepeatTimes) {
    if (options.addition == null) {
      additional.push('null');
    }
    else {
      additional.push(options.addition);
    }
    k++;
  }
  
  let add ='';
  if (options.additionSeparator) {
    add = additional.join(`${options.additionSeparator}`)
  }
  else {add = additional.join('|')}
  let result = [];
  let newStr = str + add;
  let i=0;
  if (!options.repeatTimes) {
    result.push(newStr);
  };
  while (i<options.repeatTimes) {
    result.push(newStr);
    i++
  }
  if (options.separator) {
    return result.join(`${options.separator}` || '+')
  }
  else {return result.join('+')}
}

module.exports = {
  repeater
};
