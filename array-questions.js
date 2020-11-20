// given input as an array of integers, find the missing integers in the array
// example: 1,2,100 has missing integers 3 through 99.
function findMissingIntegers(input) {

    let missingNums = [];

    if (input) {

        input.sort((a, b) => a - b);

        for (i = 1; i < input.length; i++) {
            let start = input[i - 1];
            while (input[i] - start !== 1) {
                missingNums.push(++start);
            }
        }
    }

    return missingNums;
}

// given input as an array of integers, find the duplicate integers in the array
// example: 5,5,8 has duplicate 5.
function findDuplicateIntegers(input) {

    let sameNums = [];

    if (input) {

        input.sort((a, b) => a - b);

        for (i = 1; i < input.length; i++) {
            if (input[i] === input[i - 1]) {
                sameNums.push(input[i]);
            }
        }
    }

    return sameNums;
}

// given input as an unsorted array of integers, find the smallest and largest integers in the array
// example: 5,5,8,32,20,10 has smallest as 5 and largest as 32.
function findSmallestAndLargestIntegers(input) {

    let smallAndLarge = [];

    if (input && input.length > 0) {

        input.sort((a, b) => a - b);
        smallAndLarge.push(input[0]);
        smallAndLarge.push(input[input.length - 1]);

    }

    return smallAndLarge;
}

// given input as an array of integers, find all pairs of integers that add up to the targetSum value
// example: 1,2,3,4,5,6,7,8,9 with targetSum of 8 has pairs 1:7, 2:6, and 3:5 
function findSum(input, targetSum) {

    let pairs = [];

    if (input) {

        for (i = 0; i < input.length; i++) {

            for (j = i + 1; j < input.length; j++) {
                if (input[i] + input[j] === targetSum) {
                    pairs.push([input[i], input[j]]);
                }
            }
        }
    }

    return pairs;
}

module.exports.findMissingIntegers = findMissingIntegers;
module.exports.findDuplicateIntegers = findDuplicateIntegers;
module.exports.findSmallestAndLargestIntegers = findSmallestAndLargestIntegers;
module.exports.findSum = findSum;
