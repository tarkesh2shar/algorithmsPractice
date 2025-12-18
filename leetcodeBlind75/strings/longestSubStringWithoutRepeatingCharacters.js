/**
 * Given a string s, find the length of the longest substring without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
 */


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const lastIndex = new Map();
    let left = 0;
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        // 1️⃣ Check if the character was seen inside the current window
        if (lastIndex.has(ch) && lastIndex.get(ch) >= left) {
            left = lastIndex.get(ch) + 1;
        }

        // 2️⃣ Now safely update the last seen index
        lastIndex.set(ch, i);

        // 3️⃣ Calculate window length
        maxLen = Math.max(maxLen, i - left + 1);

        console.log("lasIndex",lastIndex);
        
    }


    return maxLen;
    
};



console.log(lengthOfLongestSubstring("pwwkew"));
