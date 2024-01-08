// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

  

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.



var isIsomorphic = function(s, t) {

    if(s.length!==t.length){
        return false;
    }
    const map = new Map();
    const set = new Set();

    for (let i = 0; i < s.length; i++) {
        char1 = s.charAt(i);
        char2 = t.charAt(i);
 
        // If char1 has already been mapped
        if (map.has(char1) == true) {
 
            // Then we have to check that 
            // mapped char should be same
            if (map.get(char1) !== char2) {
                return false;
            }
        }
 
        // If char1 is appearing for the first time
        else {
 
            // Check in the set that the char2
            // is already there or not
            if (set.has(char2)) {
                return false;
            }
 
            // If none of above condition is true
            // it means both char1 and char2 are 
            // appearing for the first time
            // insert them into the map
            map.set(char1, char2);
            set.add(char2); 
        }
    }
    return true;


    
};



console.log("**isIsomorphic",isIsomorphic("egg","add"));

console.log("**isIsomorphic",isIsomorphic("foo","bar"));

console.log("**isIsomorphic",isIsomorphic("paper","title"));

console.log("**isIsomorphic",isIsomorphic("bbbaaaba","aaabbbba"));