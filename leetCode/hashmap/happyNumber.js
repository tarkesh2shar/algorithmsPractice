// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.



// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false

function checkSum(stringifiedNumber){
    let sum = 0;

    for (let i = 0; i < stringifiedNumber.length; i++) {
        const element = parseInt(stringifiedNumber[i]);
        sum+= element*element;
    }
    return sum;
}
var isHappy = function (n) {
    if(n===1){
        return true
    }
    let stringifiedNumber = new String(n);
    let sum= checkSum(stringifiedNumber)
    const hashMap={};

    while(sum!==1 && !hashMap[sum]){
        sum=checkSum(new String(sum))
        hashMap[sum]= true
    }
    return sum===1;

};

// console.log("**isHappy", isHappy(19));
console.log("**isHappy",isHappy(2));