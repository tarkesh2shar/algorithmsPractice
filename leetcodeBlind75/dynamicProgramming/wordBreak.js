/**
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
 

Constraints:

1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s and wordDict[i] consist of only lowercase English letters.
All the strings of wordDict are unique.
 */


function wordBreak(s, wordDict) {
    const wordSet = new Set(wordDict);
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true; // Empty string can be segmented

    for (let i = 1; i <= s.length; i++) {
       console.log("i:", i, "s[i-1]:", s[i-1]);
    //     let currentWord = "";

       console.log("  dp:", dp);

         for (let j = 0; j < i; j++) {
            let suffix= s.substring(j, i);
            console.log(`    j: ${j}, suffix: "${suffix}" from s[${j}:${i}]`);
            
            if(dp[j] && wordSet.has(suffix)){
                dp[i] = true;
                console.log(`    Found word: "${suffix}" from s[${j}:${i}]`);
                break;
            }
         }
       console.log("----------------------");
  
       
    }
     return dp[s.length];
}



console.log(wordBreak("leetcode", ["leet", "code"])); // true
// console.log(wordBreak("applepenapple", ["apple", "pen"])); // true
// console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false
// console.log(wordBreak("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"])); // true
// console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false    
