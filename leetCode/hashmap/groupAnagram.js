// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.



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
    console.log("**hashMapAnagram",hashMapAnagram);

    const result = [];
    for (const key in hashMapAnagram) {
        result.push(hashMapAnagram[key]);
    }

    return result;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// console.log(groupAnagrams(["a"]));
// console.log(groupAnagrams([""]));
// console.log(groupAnagrams(["",""]));



