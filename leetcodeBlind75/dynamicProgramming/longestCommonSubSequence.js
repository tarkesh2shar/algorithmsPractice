/**
 * 1143. Longest Common Subsequence
Medium

Topics
premium lock icon
Companies

Hint
Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

 

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
 

Constraints:

1 <= text1.length, text2.length <= 1000
text1 and text2 consist of only lowercase English characters.
 */


var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    
    // Create a 2D array to store lengths of longest common subsequence.
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    console.log("dp",dp);

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            
            console.log(`Comparing text1[${i - 1}] = ${text1[i - 1]} and text2[${j - 1}] = ${text2[j - 1]}`);

            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1; //diagonal move
                console.log(`  Characters match. dp[${i}][${j}] = dp[${i - 1}][${j - 1}] + 1 = ${dp[i][j]}` );
            }
            else{
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); //top or left
                console.log(`  Characters do not match. dp[${i}][${j}] = max(dp[${i - 1}][${j}], dp[${i}][${j - 1}]) = ${dp[i][j]}`);
            }
            
        }
        console.log("dp after i =", i, "is:", dp);
        console.log("-----------------------------------");
    }
    return dp[m][n];
    

}

console.log(longestCommonSubsequence("abcde", "ace")); // 3);
// console.log(longestCommonSubsequence("abc", "abc")); // 3 );
// console.log(longestCommonSubsequence("abc", "def")); // 0 );






