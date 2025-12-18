/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
 */



/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
      const hashMapAnagram = {};
  for (let i = 0; i < strs.length; i++) {
        const word = strs[i];
        const sortedWord = word.split("").sort().join(""); // Sort the word to use it as a key
        if (!hashMapAnagram[sortedWord]) {
            hashMapAnagram[sortedWord] = [];
        }
        hashMapAnagram[sortedWord].push(word);
    }



    const result = [];
    for (const key in hashMapAnagram) {
        result.push(hashMapAnagram[key]);
    }

        return result;
};



console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

