/**
 * 
 * Problem Statement

    Given a string, find the length of the longest substring in it with no more than K distinct characters.

    You can assume that K is less than or equal to the length of the given string.

    Example 1:

    Input: String="araaci", K=2  
    Output: 4  
    Explanation: The longest substring with no more than '2' distinct characters is "araa".
    Example 2:

    Input: String="araaci", K=1  
    Output: 2  
    Explanation: The longest substring with no more than '1' distinct characters is "aa".
    Example 3:

    Input: String="cbbebi", K=3  
    Output: 5

 */

function longestSubStringWithKDistinctCharacters(str, k) {
    let windowStart = 0;
    let maxLength = 0;
    let characterFrequencyMap = {};

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];

        // Add the current character to the frequency map
        if (!(rightChar in characterFrequencyMap)) {
            characterFrequencyMap[rightChar] = 0;
        }
        characterFrequencyMap[rightChar]++;

        // Shrink the window if the number of distinct characters exceeds k
        while (Object.keys(characterFrequencyMap).length > k) {
            const leftChar = str[windowStart];
            characterFrequencyMap[leftChar]--;

            // Remove the character from the map if its count drops to 0
            if (characterFrequencyMap[leftChar] === 0) {
                delete characterFrequencyMap[leftChar];
            }
            windowStart++;  // Move the window forward
        }

        // Update the maximum length of substring found so far
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;

}


console.log(longestSubStringWithKDistinctCharacters("araaci", 2));
