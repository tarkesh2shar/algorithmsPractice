/**
 * Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
 */





/**
 * @param {string} s
 * @return {string}
 * 
 */




var longestPalindrome = function(s) {
    if (s.length <= 1) return s;

    let start = 0, end = 0;

    const expand = (l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        return r - l - 1;
    };

    for (let i = 0; i < s.length; i++) {
        const len1 = expand(i, i);       // odd
        const len2 = expand(i, i + 1);   // even
        const len = Math.max(len1, len2);

        if (len > end - start + 1) { // new length is greater than previous best
            start = i - Math.floor((len - 1) / 2); //handle odds 
            end = i + Math.floor(len / 2); //handle evens
        }
    }

    return s.substring(start, end +1);
};



console.log(longestPalindrome("babad"));
