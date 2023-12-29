// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.


var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) {
        return "";
      }

    const firstString=strs[0];

    for (let i = 0; i < firstString.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if(i>=strs[j].length || strs[j][i] !==strs[0][i]){
                return strs[0].substring(0,i)
            }
        }
        
    }

    // for (let i = 0; i < strs.length; i++) {
    //     const word = strs[i];
    //     for (let j = 0; j < word.length; j++) {
    //        const letter=word[j];
            

    //     }

        
    // }
    return strs[0];
};



console.log("**longestCommonPrefix",longestCommonPrefix(["flower","flow","flight"]));
console.log("**longestCommonPrefix",longestCommonPrefix(["dog","racecar","car"]));