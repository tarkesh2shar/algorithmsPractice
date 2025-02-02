// Today's problem
//  
// Problem Challenge 2: Comparing Strings containing Backspaces (medium)
// Problem Statement
// Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.
// Example 1:
//  
//  
//  Input: str1="xy#z", str2="xzz#"
// Output: true
// Explanation: After applying backspaces the strings become "xz" and "xz" respectively.

//  
// Example 2:
//  
//  
//  Input: str1="xy#z", str2="xyz#"
// Output: false
// Explanation: After applying backspaces the strings become "xz" and "xy" respectively.

//  
// Example 3:
//  
//  
//  Input: str1="xp#", str2="xyz##"
// Output: true
// Explanation: After applying backspaces the strings become "x" and "x" respectively.
// In "xyz##", the first '#' removes the character 'z' and the second '#' removes the character 'y'.

//  
// Example 4:
//  
//  
//  Input: str1="xywrrmp", str2="xywrrmu#p"
// Output: true
// Explanation: After applying backspaces the strings become "xywrrmp" and "xywrrmp" respectively.

//  
// Constraints:
// 	•	1 <= str1.length, str2.length <= 200
// 	•	str1 and str2 only contain lowercase letters and '#' characters.



function compareStrings(str1, str2) {

    let simplifiedFirstString = "";
    let simplifiedSecondString = "";
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === "#") {
            simplifiedFirstString = simplifiedFirstString.slice(0, simplifiedFirstString.length - 1);
        } else {

            simplifiedFirstString = simplifiedFirstString.concat(str1[i]);

        }
        console.log(simplifiedFirstString);
    }
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] === "#") {
            simplifiedSecondString = simplifiedSecondString.slice(0, simplifiedSecondString.length - 1);
        } else {
            simplifiedSecondString = simplifiedSecondString.concat(str2[i]);
        }
    }
    return simplifiedFirstString === simplifiedSecondString;

}

function compareStringsUsingStack(str1, str2) {
    let stack1 = [];
    let stack2 = [];
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === "#") {
            stack1.pop();
        } else {
            stack1.push(str1[i]);
        }
    }
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] === "#") {
            stack2.pop();
        } else {
            stack2.push(str2[i]);
        }
    }
    return stack1.join("") === stack2.join("");
}



function nextValidChar(str, index) {
    let backspaces = 0;
    while (index >= 0) {
        if (str[index] === "#") {
            backspaces++;
        } else if (backspaces > 0) {
            backspaces--;
        } else {
            break;
        }
        index--;
    }
    return index;
}
function compareStringUsingPointer(str1, str2) {
    let index1 = str1.length - 1;
    let index2 = str2.length - 1;

    while (index1 >= 0 || index2 >= 0) {
        // Get the next valid character for each string
        index1 = nextValidChar(str1, index1);
        index2 = nextValidChar(str2, index2);

        // Compare characters
        const char1 = index1 >= 0 ? str1[index1] : "";
        const char2 = index2 >= 0 ? str2[index2] : "";

        if (char1 !== char2) {
            return false; // Mismatch found
        }

        // Move to the previous character
        index1--;
        index2--;
    }

    return true; // All characters match
}




console.log(compareStrings("xy#z", "xzz#"));
console.log(compareStrings("xy#z", "xyz#"));