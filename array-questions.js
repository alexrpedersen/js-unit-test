// given input as an array of integers, find the missing integers in the array
// example: 1,2,100 has missing integers 3 through 99.
function findMissingIntegers(input) {

    let missingNums = [];

    if(input) {

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

    let sameNum = []; 

    if (input) {

        input.sort((a, b) => a - b);

        for (i = 1; i < input.length; i++) {
            if (input[i] === input[i - 1]) {
                sameNum.push(input[i]);
            }
        }
    }

    return sameNum;
}

// given input as an unsorted array of integers, find the smallest and largest integers in the array
// example: 5,5,8,32,20,10 has smallest as 5 and largest as 32.
function findSmallestAndLargestIntegers(input) {

    let smallAndLarge = [];

    if(input && input.length > 0) {

        input.sort((a, b) => a - b);
        smallAndLarge.push(input[0]);
        smallAndLarge.push(input[input.length - 1]);

    }

    return smallAndLarge;
}

// given input as an array of integers, find all pairs of integers that add up to the targetSum value
// example: 1,2,3,4,5,6,7,8,9 with targetSum of 8 has pairs 1:7, 2:6, and 3:5 
function findSum(input, targetSum) {
   
   let pair = [];

    if (input) {

        for (i = 0; i < input.length; i++) {

            for (j = i + 1; j < input.length; j++) {
                if (input[i] + input[j] === targetSum) {
                    pair.push([input[i], input[j]]);
                }
            }
        }
    } 

    return pair;
}



// given input as an array of integers, find all duplicates of integers and remove them from the array
// example: 1, 2, 3, 3, 5, 6, 7, 7, 9, 9 result should be 1, 2, 3, 5, 6, 7, 9
function removeDuplicateIntegers(input) {

    let result = [];

    let duplicate = [];

    if (input && input.length > 0) {

        for (i = 1; i < input.length; i++) {
            if (input[i] === input[i - 1]) {
                duplicate.push(input[i]);
                results.push([input.length])
            }
        }

    }

    return result;
}

module.exports.findMissingIntegers = findMissingIntegers;
module.exports.findDuplicateIntegers = findDuplicateIntegers;
module.exports.findSmallestAndLargestIntegers = findSmallestAndLargestIntegers;
module.exports.findSum = findSum;
module.exports.removeDuplicateIntegers = removeDuplicateIntegers;
