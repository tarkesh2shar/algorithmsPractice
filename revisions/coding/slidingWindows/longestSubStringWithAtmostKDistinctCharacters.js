/**
 *  Given a string s and an integer k,
    return the length of the longest substring
    that contains at most k distinct characters.

    Input: s = "eceba", k = 2
    Output: 3
    Explanation: "ece"

 */



    function longestSubStringWithAtmostKDistinctCharacters(s, k) {
        
        if (k === 0 || s.length === 0) return 0;

        let left = 0;
        let countFrequency = new Map();
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            let rightChar = s[right];
            countFrequency.set(rightChar, (countFrequency.get(rightChar) || 0) + 1);

            while (countFrequency.size > k) {
            let leftChar = s[left];
            countFrequency.set(leftChar, countFrequency.get(leftChar) - 1);
            if (countFrequency.get(leftChar) === 0) {
                countFrequency.delete(leftChar);
            }
            left++;
            }

            // ✅ update after window becomes valid
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }






    console.log(longestSubStringWithAtmostKDistinctCharacters("eceba",2));