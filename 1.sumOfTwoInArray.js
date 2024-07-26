const sumOfTwoInArray = (arr, target) => {
    if (arr.length === 0) {
        return "Array is empty";
    }
    if (arr.length < 2) {
        return "Array should have at least two elements";
    }
    if (arr.some(Number.isNaN)) {
        return "Array should contain only numbers";
    }
    if (target <= 0 || isNaN(target)) {
        return "Target should be a positive number and apply";
    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return true;
            }
        }
    }
    return false;
};


//Example:
// Input: [1, 3, 5, 7, 16, 4], Target: 8, Output: true.
// Input: [1, 3, 5, 7, 16, 4], Target: 12, Output: true.
// Input: [1, 3, 5, 7, 16, 4], Target: 18, Output: false.
// Input: [12, 17, 14, 11, 19, 8], Target: 20 Output: true
console.log(sumOfTwoInArray([1, 3, 5, 7, 16, 4], 8));
console.log(sumOfTwoInArray([1, 3, 5, 7, 16, 4], 12));
console.log(sumOfTwoInArray([1, 3, 5, 7, 16, 4], 18));
console.log(sumOfTwoInArray([12, 17, 14, 11, 19, 8], 20));

