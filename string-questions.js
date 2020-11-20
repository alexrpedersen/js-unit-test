// given input as a string, find the duplicate characters in the string
// example: abccdefg has has a duplicate character of c
function findDuplicateCharacters(input) {

    let sameChar = [];

    if (input) {

        for (i = 1; i < input.length; i++) {
            if (input[i] === input[i - 1]) {
                sameChar.push(input[i]);
            }
        }

    }
    
    return sameChar;
}

module.exports.findDuplicateCharacters = findDuplicateCharacters;
