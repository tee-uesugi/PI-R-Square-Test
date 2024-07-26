const largestNumber = (arr) => {
    if (arr.length === 0) {
        return "empty";
    }

    const strNums = arr.map(num => num.toString());

    strNums.sort((a, b) => (b + a).localeCompare(a+b));

    const result = strNums.join('');

    return result[0] === "0"? "0" : result;
}

// Example
// Input: [10, 2, 13, 7], Output: "721310".
// Input: [21, 36, 8, 45], Output: “8453621”
const input1 = [10, 2, 13, 7];
console.log(largestNumber(input1));

const input2 = [21, 36, 8, 45];
console.log(largestNumber(input2));




