/**
 *  Given two strings s and p, return an array of all the start indices of p's 
    anagrams
    in s. You may return the answer in any order.

    

    Example 1:

    Input: s = "cbaebabacd", p = "abc"
    Output: [0,6]
    Explanation:
    The substring with start index = 0 is "cba", which is an anagram of "abc".
    The substring with start index = 6 is "bac", which is an anagram of "abc".
    Example 2:

    Input: s = "abab", p = "ab"
    Output: [0,1,2]
    Explanation:
    The substring with start index = 0 is "ab", which is an anagram of "ab".
    The substring with start index = 1 is "ba", which is an anagram of "ab".
    The substring with start index = 2 is "ab", which is an anagram of "ab".
 */



/**
* @param {string} s
* @param {string} p
* @return {number[]}
*/
var findAnagrams = function (s, p) {

    const resultIndicesArr = [];

    let windowStart = 0;
    let charFrequency = {};
    let matched = 0;

    // Step 1: Create frequency map for pattern
    for (let i = 0; i < p.length; i++) {
        if (!charFrequency[p[i]]) {
            charFrequency[p[i]] = 1;
        } else {
            charFrequency[p[i]] += 1;
        }
    }

    console.log("charFrequency", charFrequency);

    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {

        let char = s[windowEnd];

        if (char in charFrequency) {
            charFrequency[char]--;
            if (charFrequency[char] === 0) {
                matched++;  // Fully matched one character from pattern
            }
        }

        // Step 3: If window size exceeds pattern length, shrink from left
        if (windowEnd >= p.length - 1) {

            if (matched === Object.keys(charFrequency).length) {
                resultIndicesArr.push(windowStart);
            }

            let leftChar = s[windowStart];
            windowStart++; // Shrink window

            if (leftChar in charFrequency) {
                if (charFrequency[leftChar] === 0) {
                    matched--; // Decrease matched count
                }
                charFrequency[leftChar]++; // Put back leftChar
            }

        }

    }
    return resultIndicesArr


};



console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));

