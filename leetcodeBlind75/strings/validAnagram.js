/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
        if (s.length !== t.length) return false;

    const m1 = new Map();
    const m2 = new Map();

    for (const ch of s) {
        m1.set(ch, (m1.get(ch) || 0) + 1);
    }

    for (const ch of t) {
        m2.set(ch, (m2.get(ch) || 0) + 1);
    }


       for (const [key, val] of m1) {
        if (m2.get(key) !== val) return false;
    }

    return true;
};


console.log(isAnagram("anagram","nagaram"));
