// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.



// var isPalindrome = function(s:string) {
//     const stringLowerCase= s.toLocaleLowerCase();
//     const charCodeAtBeginning="a".charCodeAt(0);
//     const charCodeAtEnd="z".charCodeAt(0)
//     let strippedString="";
//     let reverseString="";
//     // console.log("a".charCodeAt(0));
//     // console.log("z".charCodeAt(0));
//     // console.log("**stringLowerCase ---> ",stringLowerCase);
//     for (let i = 0; i < stringLowerCase.length; i++) {
//         const letter = stringLowerCase[i];
//         // console.log(parseInt(letter));
//         // console.log(typeof parseInt(letter));
//         const isLetterANumber= ! Number.isNaN(parseInt(letter));
//         // console.log(Number.isNaN(parseInt(letter)));
//         // const isLetterANumber= typeof parseInt(letter)!= ""
//         const charCodeLetter= letter.charCodeAt(0);
//         if(charCodeLetter>=charCodeAtBeginning && charCodeLetter<=charCodeAtEnd || isLetterANumber ){
//             strippedString=strippedString+ letter;
//         }
//     }
//     // console.log("**strippedString",strippedString);
//     for (let i = strippedString.length-1; i >= 0; i--) {
//         const letter = strippedString[i];
//         reverseString= reverseString+ letter;
//     }

    
//     // console.log("**reverseString",reverseString);
//     return strippedString===reverseString;
    
// };

var isPalindrome = function(s:string) {
    const stringLowerCase= s.toLocaleLowerCase();
    const charCodeAtBeginning="a".charCodeAt(0);
    const charCodeAtEnd="z".charCodeAt(0)
    let testingForward="";
    let testingBackward="";
    for (let i = 0; i < stringLowerCase.length; i++) {
        const letterFromBeginning = stringLowerCase[i];
        const letterFromEnd = stringLowerCase[stringLowerCase.length-1-i]

        const isForwardLetterANumber= ! Number.isNaN(parseInt(letterFromBeginning));
        const isBackwardLetterANumber= ! Number.isNaN(parseInt(letterFromEnd));

        const charCodeForwardLetter= letterFromBeginning.charCodeAt(0);
        const charCodeBackwardLetter= letterFromEnd.charCodeAt(0);

        if(charCodeForwardLetter>=charCodeAtBeginning && charCodeForwardLetter<=charCodeAtEnd || isForwardLetterANumber ){
            testingForward+=letterFromBeginning;
        }

        if(charCodeBackwardLetter>=charCodeAtBeginning && charCodeBackwardLetter<=charCodeAtEnd || isBackwardLetterANumber ){
            testingBackward+=letterFromEnd;
        }
        
    }

    // console.log("**testingForward",testingForward);
    // console.log("**testingBackward",testingBackward);

    
    // console.log("**reverseString",reverseString);
    return testingForward===testingBackward;
    
};

console.log("**isPalindrome",isPalindrome("A man, a plan, a canal: Panama"));
console.log("**isPalindrome",isPalindrome("race a car"));
console.log("**isPalindrome",isPalindrome(" "));