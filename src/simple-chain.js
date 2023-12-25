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
    const link = value !== undefined ? `( ${value} )` : '(  )';
    this.chainArr.push(link);
    return this;
  },

  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position < 1 ||
      position > this.chainArr.length ||
      !Number.isInteger(position)
    ) {
      this.chainArr = [];
      throw new Error("You can't remove incorrect link!");
    }
    
    this.chainArr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chainArr.reverse();
    return this;
  },

  finishChain() {
    const chainString = this.chainArr.join('~~');
    this.chainArr = [];
    return chainString;
  },
};

module.exports = {
  chainMaker
};
