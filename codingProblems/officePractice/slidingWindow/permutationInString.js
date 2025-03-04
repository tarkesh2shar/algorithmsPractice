/**
 * Problem Challenge 1: Permutation in a String (hard)
    Problem Statement

    Given a string and a pattern, find out if the string contains any permutation of the pattern.

    Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

    abc
    acb
    bac
    bca
    cab
    cba
    If a string has ‘n’ distinct characters, it will have n! permutations.

    Example 1:

    Input: str="oidbcaf", pattern="abc"   
    Output: true   
    Explanation: The string contains "bca" which is a permutation of the given pattern.
    Example 2:

    Input: str="odicf", pattern="dc"
 */

//Brute force


function permutationInString(str, pattern) {
   let patternMap = {};

   // Step 1: Create frequency map for pattern
   for (let i = 0; i < pattern.length; i++) {
      if (!patternMap[pattern[i]]) {
         patternMap[pattern[i]] = 1;
      } else {
         patternMap[pattern[i]] += 1;
      }
   }

   console.log("**patternMap", patternMap);


   let windowStart = 0, matched = 0;

   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      let char = str[windowEnd];

      // Step 2: Check if char exists in patternMap
      if (char in patternMap) {
         patternMap[char]--;  // Use this character  -->
         if (patternMap[char] === 0) {
            matched++;  // Fully matched one character from pattern
         }
      }

      // Step 3: If window size exceeds pattern length, shrink from left
      if (windowEnd >= pattern.length - 1) {
         if (matched === Object.keys(patternMap).length) {
            return true; // Found permutation
         }

         let leftChar = str[windowStart];
         windowStart++; // Shrink window

         if (leftChar in patternMap) {
            if (patternMap[leftChar] === 0) {
               matched--; // Decrease matched count
            }
            patternMap[leftChar]++; // Put back leftChar
         }
      }
   }

   return false;
}

// Test Cases
console.log(permutationInString("oidbcaf", "abc")); // true
console.log(permutationInString("odicf", "dc"));    // false
console.log(permutationInString("bcdxabcdy", "bcdyabcdx")); // true
console.log(permutationInString("aaacb", "abc")); // true
