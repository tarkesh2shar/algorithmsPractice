/**
 * 🧩 Longest Substring with At Most Two Distinct Characters
📘 Problem Statement

Given a string s, return the length of the longest substring that contains at most two distinct characters.

✨ Examples

Example 1

Input: s = "eceba"
Output: 3
Explanation: The substring "ece" has at most two distinct characters.


Example 2

Input: s = "ccaabbb"
Output: 5
Explanation: The substring "aabbb" has at most two distinct characters.

🧠 Constraints
1 <= s.length <= 10^5
s consists of English letters.

🔍 What this is testing

Sliding Window

HashMap / frequency count

Expanding & shrinking window logic

🧠 Hint (read only if needed)

Use two pointers (left, right)

Keep a map of character counts

If distinct characters > 2 → shrink from the left

Track maximum window size
 */



function longestSubStringWithAtmost2DisctintCharacters(s) {
    const charMap= new Map();
    let left=0;
    let maxLen=0;
    for(let right=0; right<s.length; right++) {
        const rightChar= s[right];
        console.log("**rightChar",rightChar);
        // add rightChar to map
        charMap.set(rightChar, (charMap.get(rightChar) || 0) + 1);
        console.log("**charMap after adding rightChar", charMap);

        while(charMap.size > 2) {
            const leftChar= s[left];
            console.log("**leftChar", leftChar);
            charMap.set(leftChar, charMap.get(leftChar) - 1);
            if(charMap.get(leftChar) === 0) {
                charMap.delete(leftChar);
            }
            left++;
        }
        maxLen= Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}





console.log(longestSubStringWithAtmost2DisctintCharacters("eceba")); // 32134