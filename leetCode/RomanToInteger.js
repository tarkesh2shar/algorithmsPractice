// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.



// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

var romanToInt = function (s) {
    let stringToNumberMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let number = 0;

    // function resolveEdgeCase(letter, proceedingLetter) {
    //     if (letter === "I" || letter === "X" || letter === "C") {
    //         if (proceedingLetter === "V" || proceedingLetter === "L", proceedingLetter === "D") {
    //             return { num: stringToNumberMap[proceedingLetter] - stringToNumberMap[letter], shouldSkipNext: true }
    //         }
    //         if (proceedingLetter === "X" || proceedingLetter === "C" || proceedingLetter === "M") {
    //             return { num: stringToNumberMap[proceedingLetter] - stringToNumberMap[letter], shouldSkipNext: true }
    //         } else {
    //             return { num: stringToNumberMap[letter], shouldSkipNext: false }
    //         }
    //     } else {
    //         return { num: stringToNumberMap[letter], shouldSkipNext: false }
    //     }

    // }


    for (let i = 0; i < s.length; i++) {
        const romanNumber = s[i];
        const romanNumberFollowing = s[i + 1];

        // let object = resolveEdgeCase(romanNumber, romanNumberFollowing)
        // number += object.num
        // if (object.shouldSkipNext) {
        //     i++;
        // }

        if (romanNumber === "I") {
            if (romanNumberFollowing === "V") {
                number += stringToNumberMap["V"] - stringToNumberMap["I"];
                i++
            }
            else if (romanNumberFollowing === "X") {
                number += stringToNumberMap["X"] - stringToNumberMap["I"];
                i++
            }
            else {
                number += stringToNumberMap[romanNumber];
            }
        } 

        else if (romanNumber === "X") {
            if (romanNumberFollowing === "L") {
                number += stringToNumberMap["L"] - stringToNumberMap["X"];
                i++
            }
            else if (romanNumberFollowing === "C") {
                number += stringToNumberMap["C"] - stringToNumberMap["X"];
                i++
            }
            else {
                number += stringToNumberMap[romanNumber];
            }
        }

         else if (romanNumber === "C") {
            if (romanNumberFollowing === "D") {
                number += stringToNumberMap["D"] - stringToNumberMap["C"];
                i++
            }
            else if (romanNumberFollowing === "M") {
                number += stringToNumberMap["M"] - stringToNumberMap["C"];
                i++
            }
            else {
                number += stringToNumberMap[romanNumber];
            }
        }
        else{
            number += stringToNumberMap[romanNumber];
        }
    }
    return number;

};

//better solution 


// var romanToInt = function (s) {
//     let stringToNumberMap = {
//         "I": 1,
//         "V": 5,
//         "X": 10,
//         "L": 50,
//         "C": 100,
//         "D": 500,
//         "M": 1000
//     }

//     let number = 0;

//     for (let i = 0; i < s.length; i++) {
//         const currentNumber = stringToNumberMap[s[i]];
//         const nextNumber = stringToNumberMap[s[i + 1]];

//         if (nextNumber > currentNumber) {
//             number += nextNumber - currentNumber;
//             i++; // Skip the next Roman numeral, as it has been accounted for
//         } else {
//             number += currentNumber;
//         }
//     }

//     return number;
// };



console.log("**romanToInt", romanToInt("IV"));
console.log("**romanToInt", romanToInt("IX"));
console.log("**romanToInt", romanToInt("XL"));
console.log("**romanToInt", romanToInt("XC"));
console.log("**romanToInt", romanToInt("CD"));
console.log("**romanToInt", romanToInt("CM"));
console.log("**romanToInt",romanToInt("III"));
console.log("**romanToInt", romanToInt("LVIII"));
console.log("**romanToInt",romanToInt("MCMXCIV"));



