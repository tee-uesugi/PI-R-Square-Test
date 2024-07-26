const customSortFunction = (arr) => {
    if (arr.length === 0) {
        return "empty";
    }
    if (arr.some(item => typeof item !== 'number' || isNaN(item))) {
        return "Array should contain only number"
    }
    return arr.sort((a, b) => {
        if ( a%2 !== 0 && b%2 === 0 ) {
            return -1 ;
        } 
        if ( a%2 === 0 && b%2 !== 0 ) {
            return 1 ;
        } 
        return a - b ;
    });
}



// Example:
// Input: [4, 2, 5, 7, 1, 6], Output: [1, 5, 7, 2, 4, 6].
// Input: [25, 40, 14, 91, 31, 22, 49, 13, 6], Output: [13, 25, 31, 49, 91, 6, 14, 22, 40].
console.log(customSortFunction([4, 2, 5, 7, 1, 6]));
console.log(customSortFunction([25, 40, 14, 91, 31, 22, 49, 13, 6]));
