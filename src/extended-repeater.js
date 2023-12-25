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
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  const repeatedArr = [];

  for (let i = 0; i < repeatTimes; i++) {
    const repeatedAdditions = [];
    for (let j = 0; j < additionRepeatTimes; j++) {
      repeatedAdditions.push(String(addition));
    }
    repeatedArr.push(str + repeatedAdditions.join(additionSeparator));
  }

  return repeatedArr.join(separator);
}

module.exports = {
  repeater
};
