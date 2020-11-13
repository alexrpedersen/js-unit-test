// given input as a string, find the duplicate characters in the string
// example: abccdefg has has a duplicate character of c
function findDuplicateCharacters(input) {


    let sameChar = [];

    if (input && input.length > 0) {

        input.sort((a,b) => a - b);

        for (i = 0; i < input.lenth; i++) {


            if (input[i] === input[i + 1]) {
                sameChar.push(input[i]);
            }

        }


    }

    return sameChar;
}

module.exports.findDuplicateCharacters = findDuplicateCharacters;
