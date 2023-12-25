const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr: [],

  getLength() {
    return this.chainArr.length;
  },

  addLink(value) {
    this.chainArr.push(value);
    return this;
  },

  removeLink(position) {
    if (
      position < 1 ||
      position > this.chainArr.length ||
      !Number.isInteger(position)
    ) {
      this.chainArr = [];
    }
    this.chainArr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chainArr.reverse();
    return this;
  },

  finishChain() {
    const result = this.chainArr
      .map((link) => `( ${link} )`)
      .join("~~");
    this.chainArr = [];
    return result;
  },
};

module.exports = {
  chainMaker
};
