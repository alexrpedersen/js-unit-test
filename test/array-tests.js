var assert = require('assert');
var arrayQuestions = require("../array-questions");

describe('Array', function() {
  describe('#missingIntegers()', function() {
    it('should return array with single value of 50 ', function() {
      let input = [...Array(100).keys()];
      input.splice(50, 1);

      let results = arrayQuestions.findMissingIntegers(input)

      assert.strictEqual(results.length, 1);
    });
    
    it('should return array with values of 50 and 51', function() {
      let input = [...Array(100).keys()];
      input.splice(50, 2);

      let results = arrayQuestions.findMissingIntegers(input)

      assert.strictEqual(results.length, 2);
    });

    it('should return array with values of 2 through 99', function() {
      let input = [1,100];

      let results = arrayQuestions.findMissingIntegers(input)

      assert.strictEqual(results.length, 98);
    });

    it('should return empty array, null input', function() {
      let input = null;

      let results = arrayQuestions.findMissingIntegers(input)

      assert.strictEqual(results.length, 0);
    });

    it('should return empty array, nothing missing', function() {
      let input = [...Array(10).keys()];

      let results = arrayQuestions.findMissingIntegers(input)

      assert.strictEqual(results.length, 0);
    });

    it('should return array with 3', function() {
      let input = [5, 4, 1, 2];

      let results = arrayQuestions.findMissingIntegers(input)

      assert.strictEqual(results.length, 1);
      assert.strictEqual(results[0], 3);
    });
  });
});