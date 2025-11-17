/**
 * There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

Example 1:


Input: m = 3, n = 7
Output: 28
Example 2:

Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

 */

var uniquePaths = function(m, n) {
    const dp = Array.from({ length: m }, () => Array(n).fill(0));
    console.log("initial dp:", dp);
    
    // Fill from bottom-right to top-left
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (i === m - 1 && j === n - 1) {
                // Bottom-right cell: only 1 way (already there)
                dp[i][j] = 1;
            } else {
                const down = i + 1 < m ? dp[i + 1][j] : 0;
                const right = j + 1 < n ? dp[i][j + 1] : 0;
                dp[i][j] = down + right;
            }
            console.log(`i=${i}, j=${j}, dp[i][j]=${dp[i][j]}`);
        }
        console.log(`After filling row ${i}:`, dp);
        
    }

    console.log("final dp:", dp);
    return dp[0][0]; // number of ways from top-left
};




// console.log(uniquePaths(3, 7)) // 28
console.log(uniquePaths(3, 2)) // 3;
