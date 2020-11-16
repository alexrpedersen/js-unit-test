// given input as a string, find the duplicate characters in the string
// example: abccdefg has has a duplicate character of c
function findDuplicateCharacters(input) {

    let dupChar = [];

    if (input) {

        for (i = 1; i < input.length; i++) {

            let nextChar = input[i - 1];

            if (input[i] === nextChar){
                dupChar.push(input[i]);
            }
        }

    }

    return dupChar;
}

module.exports.findDuplicateCharacters = findDuplicateCharacters;
