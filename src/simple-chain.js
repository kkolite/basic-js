const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length
  },

  addLink(value) {
    if(value !== '' ) {
      this.chain.push(`( ${value} )`);
    }
    else {this.chain.push('()')}
    return this
  },

  removeLink(position) {
    if (isFinite(position) == true && position <= this.chain.length && position > 0) {
      this.chain.splice(position-1, 1)
    }
    else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!")
    }
    return this;
  },

  reverseChain() {
   this.chain = this.chain.reverse();
   return this
  },

  finishChain() {
    let result = [];
    this.chain.forEach(el => {
      result.push(el);
    });
    this.chain = []; 
    return result.join('~~');
    
  }
};

module.exports = {
  chainMaker
};
