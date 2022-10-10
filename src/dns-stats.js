const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  let check = [];
  let obj = {};
  domains.forEach(el => {
    arr.push(el.split('.').reverse());
  })
  arr.forEach(el => {
    let str = '';
    el.forEach(el => {
    str += `.${el}`;
    if (check.includes(str)) {
      obj[str] += 1;
    } 
    else {
      obj[str] = 1;
      check.push(str);
    }
  });
  })
  return obj;
}

module.exports = {
  getDNSStats
};
