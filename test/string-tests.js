var assert = require('assert');
var stringQuestions = require("../string-questions");

describe('String', function() {
    describe('#duplicateCharacters ()', function() {
        it('should return array with single value of "c" ', function() {
        let input = "abccdefghijk";

        let results = stringQuestions.findDuplicateCharacters(input);

        assert.strictEqual(results.length, 1);
        assert.strictEqual(results[0], "c");
        });
        
        it('should return empty array, null input', function() {
            let input = null;
    
            let results = stringQuestions.findDuplicateCharacters(input)
    
            assert.strictEqual(results.length, 0);
        });
        
        it('should return empty array, no characters', function() {
            let input = "";
    
            let results = stringQuestions.findDuplicateCharacters(input)
    
            assert.strictEqual(results.length, 0);
        });
        
        it('should return empty array, one characters', function() {
            let input = "x";
    
            let results = stringQuestions.findDuplicateCharacters(input)
    
            assert.strictEqual(results.length, 0);
        });
    });
});
