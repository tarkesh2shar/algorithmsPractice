// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]
 

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].


/**
 * @param {string} digits
 * @return {string[]}
 */

 const numberMapping={
    "2":["a","b","c"],
    "3":["d","e","f"],
    "4":["g","h","i"],
    "5":["j","k","l"],
    "6":["m","n","o"],
    "7":["p","q","r","s"],
    "8":["t","u","v"],
    "9":["w","x","y","z"]
}

const helper=(a,b)=>{
    const allPossibleCombinations= [];
    for (let i = 0; i < a.length; i++) {
        const firstDigit = a[i];
        for (let j = 0; j < b.length; j++) {
            const secondDigit = b[j];
                allPossibleCombinations.push(firstDigit+secondDigit)
        }
    }
    return allPossibleCombinations;
}

// const letterCombinations = function(digits) {
//     if (digits.length === 0) {
//         return [];
//     }

//     let allCombination = numberMapping[digits[0]];
//     for (let i = 1; i < digits.length; i++) {
//         const nextDigit = digits[i];
//         const allCombo = helper(allCombination, numberMapping[nextDigit]);
//         allCombination = allCombo;
//     }

//     return allCombination;
// };



const letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }

    const result = [];

    const backtrack = (index, currentCombination) => {
        if (index === digits.length) {
            result.push(currentCombination);
            return;
        }

        const currentDigit = digits[index];
        const letters = numberMapping[currentDigit];

        for (let i = 0; i < letters.length; i++) {
            backtrack(index + 1, currentCombination + letters[i]);
        }
    };

    backtrack(0, "");

    return result;
};


console.log("**letterCombinations",letterCombinations("235"));
// console.log("**letterCombinations",letterCombinations("23"));
// console.log("**letterCombinations",letterCombinations(""));
// console.log("**letterCombinations",letterCombinations("2"));