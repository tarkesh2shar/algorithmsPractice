/**
 * You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
 

Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length
 */



/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {

    let leftPointer = 0;
    let map = new Map();
    let maxLength=0;
    let maxFrequency=0;


    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // if(!map.get(char)){
        //     map.set(char,1)
        // }
        // else{
        //    let  charLength = map.get(char);
        //    map.set(char,charLength+1);
        // }

        // 🔹 add right character
        map.set(char, (map.get(char) || 0) + 1);

        // 🔹 track max frequency in window
        maxFrequency = Math.max(maxFrequency, map.get(char));


        // 🔹 window size
        let windowSize = right - leftPointer + 1;


        //main logic here  (shrink the window)
        // 🔹 if more than k replacements needed → shrink window
        while (windowSize - maxFrequency > k) {

            /**
             * windowSize - maxFrequency
                → number of characters that are NOT the majority character
                → these are the characters we would need to replace
             */
            const leftChar = s[leftPointer];
            map.set(leftChar, map.get(leftChar) - 1);
            leftPointer++;
            windowSize = right - leftPointer + 1;
        }


              // 🔹 update answer
        maxLength = Math.max(maxLength, windowSize);


        
    }

    console.log("charMap",map);
    return maxLength;
    
};



console.log("characterReplacement",characterReplacement("AABABBA",1));
