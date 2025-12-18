/**
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
 
 */



/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

    if (t.length === 0 || s.length < t.length) return "";

    const need = new Map();
    for (const ch of t) {
        need.set(ch, (need.get(ch) || 0) + 1);
    }

    const window = new Map();
    const required = need.size; // unique chars needed
    let formed = 0;             // how many unique chars meet required count

    let left = 0;
    let bestLen = Infinity;
    let bestL = 0;

    for (let right = 0; right < s.length; right++) {
        const ch = s[right];
        window.set(ch, (window.get(ch) || 0) + 1);

        // if this char is required and we just met its needed count, formed++
        if (need.has(ch) && window.get(ch) === need.get(ch)) {
            formed++;
        }

        // try shrink while window is valid when formed and required are of same length do this ok !
        while (left <= right && formed === required) {
            const windowLen = right - left + 1;
            if (windowLen < bestLen) {
                bestLen = windowLen;
                bestL = left;
            }

            const leftChar = s[left];
            window.set(leftChar, window.get(leftChar) - 1);

            // if we broke a requirement, formed--
            if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)) {
                formed--;
            }

            left++;
        }
    }

    return bestLen === Infinity ? "" : s.substring(bestL, bestL + bestLen);
    
    
};


console.log(minWindow("ADOBECODEBANC","ABC"));


