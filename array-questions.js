// given input as an array of integers, find the missing integers in the array
// example: 1,2,100 has missing integers 3 through 99.
function findMissingIntegers(input) {

    // add logic to find missing integers in input
    let missingNums = [];

    if(input && input.length > 1) {
        
        input.sort((a , b) => a - b);
        
        for (i = 1; i < input.length; i++) {

            let low = input[i - 1];

            while (input[i] - low !== 1) {
                missingNums.push(++low);
            }

        }
    }
    return missingNums;
}

// given input as an array of integers, find the duplicate integers in the array
// example: 5,5,8 has duplicate 5.
function findDuplicateIntegers(input) {

    // add logic to find missing integers in input
    let duplicate = [];

    if (input && input.length > 1) {
        
        input.sort((a, b) => a - b);

        for (i =1; i < input.length; i++) {
            if (input[i] === input[i - 1]){
                duplicate.push(input[i]);
            }

        }
    }
    return duplicate;
}

// given input as an unsorted array of integers, find the smallest and largest integers in the array
// example: 5,5,8,32,20,10 has smallest as 5 and largest as 32.
function findSmallestAndLargestIntegers(input) {

    // add logic to find missing integers in input
    let smallAndLarge = [];

    if (input && input.length >= 1) {

        input.sort((a, b) => a - b);
        smallAndLarge.push(input[0]);
        smallAndLarge.push(input[input.length - 1]);
    }

    return smallAndLarge;
}


module.exports.findMissingIntegers = findMissingIntegers;
module.exports.findDuplicateIntegers = findDuplicateIntegers;
module.exports.findSmallestAndLargestIntegers = findSmallestAndLargestIntegers;
