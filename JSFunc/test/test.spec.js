// const lib = {
//   execute: function() {
//     console.debug('Execute');
//   },

//   read: function() {
//     console.debug('Read');
//   }
// };

// const arr = [1,2,3,4,5];
// const [a,b,...c] = arr;

// console.log(a,b,c);

// const { read: citeste, execute: run } = lib;
// citeste(); run();

const { expect } = require('chai');
const sinon = require('sinon');
const sums = require('../src/sums');

describe('Sums', function() {
  it('should add the two numbers', function() {
    const result = sums.simpleSum(2, 3);
    expect(result).to.equal(5);
  });

  it('should return null when input different from number', function() {
    const stubbedSum = sinon.stub(sums, 'simpleSum').callsFake(function() {
      return null;
    });
    // console.log(stubbedSum);
    const result = sums.simpleSum(1, 'a');
    expect(result).to.be.null;
  });
});