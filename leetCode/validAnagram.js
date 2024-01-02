// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

var isAnagram = function(s, t) {
    if(s.length!==t.length){
        return false;
    }
    let hashMap={};
    let hashMap2={};
    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        if(!hashMap[letter]){
            hashMap[letter]=1;
        }else{
            hashMap[letter]+=1;
        }
    }
    for (let i = 0; i < t.length; i++) {
        const letter = t[i];
        if(!hashMap2[letter]){
            hashMap2[letter]=1;
        }else{
            hashMap2[letter]+=1;
        }
    }
    for (const key in hashMap) {
        if(!hashMap2[key]){
            return false;
        }
        if(hashMap[key]!==hashMap2[key]){
            return false;
        }
    }
    return true;
};


console.log("isAnagram",isAnagram("anagram","nagaram"));
console.log("isAnagram",isAnagram("rat","car"));
console.log("isAnagram",isAnagram("a","ab"));