var assert = require('assert');
var arrayQuestions = require("../array-questions");

describe('Array', function() {
  describe('#missingIntegers()', function() {
    it('should return array with single value of 50 ', function() {
      let input = [...Array(100).keys()];
      input.splice(50, 1);

      let results = arrayQuestions.findMissingIntegers(input)

      assert.strictEqual(results.length, 1);
      assert.strictEqual(results[0], 50);
    });
    
    it('should return array with values of 50 and 51', function() {
      let input = [...Array(100).keys()];
      input.splice(50, 2);

      let results = arrayQuestions.findMissingIntegers(input)

      assert.strictEqual(results.length, 2);
      assert.strictEqual(results[0], 50);
      assert.strictEqual(results[1], 51);
    });

    it('should return array with values of 2 through 99', function() {
      let input = [0,99];

      let results = arrayQuestions.findMissingIntegers(input)

      let target = [...Array(100).keys()];
      target.splice(99, 1);
      target.splice(0, 1);
     
      assert.deepStrictEqual(results, target);
    });

    it('should return empty array, one element in input', function() {
      let input = [10];

      let results = arrayQuestions.findMissingIntegers(input)

      assert.strictEqual(results.length, 0);
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

  describe('#duplicateIntegers()', function() {
    it('should return array with single value of 5', function() {
      let input = [5, 5, 8];

      let results = arrayQuestions.findDuplicateIntegers(input)

      assert.strictEqual(results.length, 1);
      assert.strictEqual(results[0], 5);
    });

    it('should return array with values 5 and 8', function() {
      let input = [5, 5, 8, 10, 8, 8];

      let results = arrayQuestions.findDuplicateIntegers(input)

      assert.strictEqual(results.length, 2);
      assert.strictEqual(results[0], 5);
      assert.strictEqual(results[1], 8);
    });
    
    it('should return empty array, null input', function() {
      let input = null;

      let results = arrayQuestions.findDuplicateIntegers(input)

      assert.strictEqual(results.length, 0);
    });
    
    it('should return empty array, one element in input', function() {
      let input = null;

      let results = arrayQuestions.findDuplicateIntegers(input)

      assert.strictEqual(results.length, 0);
    });
    
    it('should return empty array, no duplicates', function() {
      let input = null;

      let results = arrayQuestions.findDuplicateIntegers(input)

      assert.strictEqual(results.length, 0);
    });
  });
  
  describe('#smallestLargestIntegers()', function() {
    it('should return array with two values 1 and 10', function() {
      let input = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10];

      let results = arrayQuestions.findSmallestAndLargestIntegers(input)

      assert.strictEqual(results.length, 2);
      assert.strictEqual(results[0], 1);
      assert.strictEqual(results[1], 10);
    });

    it('should return array with values 5 and 32', function() {
      let input = [32, 5, 5, 8, 10, 8, 8];

      let results = arrayQuestions.findSmallestAndLargestIntegers(input)

      assert.strictEqual(results.length, 2);
      assert.strictEqual(results[0], 5);
      assert.strictEqual(results[1], 32);
    });
    
    it('should return array with values 42 and 42', function() {
      let input = [42];

      let results = arrayQuestions.findSmallestAndLargestIntegers(input)

      assert.strictEqual(results.length, 2);
      assert.strictEqual(results[0], 42);
      assert.strictEqual(results[1], 42);
    });
    
    it('should return empty array, null input', function() {
      let input = null;

      let results = arrayQuestions.findSmallestAndLargestIntegers(input)

      assert.strictEqual(results.length, 0);
    });
    
    it('should return empty array, no duplicates', function() {
      let input = new Array();

      let results = arrayQuestions.findSmallestAndLargestIntegers(input)

      assert.strictEqual(results.length, 0);
    });
  });
});