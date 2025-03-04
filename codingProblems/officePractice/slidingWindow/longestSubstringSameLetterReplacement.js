/**
 * 
 * Longest Substring with Same Letters after Replacement (hard)
    Problem Statement

    Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

    Example 1:

    Input: str="aabccbb", k=2  
    Output: 5  
    Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
    Example 2:

    Input: str="abbcb", k=1  
    Output: 4  
    Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".
    Example 3:

    Input: str="abccde", k=1  
    Output: 3

 */

function longestSubStringSameLetterReplacement(str, k) {
    let windowStart = 0;
    let letterHashMap = {};
    let maxSameCharLength = 0;
    let maxRepeatLetterCount = 0; // Tracks the most frequent character in the window

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let char = str[windowEnd];

        // Store character count in hashmap
        if (!(char in letterHashMap)) {
            letterHashMap[char] = 0;
        }
        letterHashMap[char]++;

        // Update the max repeating character count
        maxRepeatLetterCount = Math.max(maxRepeatLetterCount, letterHashMap[char]);

        // If more replacements are needed than `k`, shrink the window
        while ((windowEnd - windowStart + 1) - maxRepeatLetterCount > k) {
            letterHashMap[str[windowStart]]--; // Remove from hashmap
            windowStart++; // Shrink window
        }

        // Update max length of valid substring
        maxSameCharLength = Math.max(maxSameCharLength, windowEnd - windowStart + 1);
    }

    return maxSameCharLength;
}

// Test cases
console.log(longestSubStringSameLetterReplacement("aabccbb", 2)); // Output: 5
console.log(longestSubStringSameLetterReplacement("abbcb", 1));   // Output: 4
console.log(longestSubStringSameLetterReplacement("abccde", 1));  // Output: 3

