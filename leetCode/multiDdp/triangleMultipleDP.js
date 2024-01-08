// Given a triangle array, return the minimum path sum from top to bottom.

// For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

 

// Example 1:

// Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// Output: 11
// Explanation: The triangle looks like:
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
// Example 2:

// Input: triangle = [[-10]]
// Output: -10
 

// Constraints:

// 1 <= triangle.length <= 200
// triangle[0].length == 1
// triangle[i].length == triangle[i - 1].length + 1
// -104 <= triangle[i][j] <= 104
 

// Follow up: Could you do this using only O(n) extra space, where n is the total number of rows in the triangle?


let triangle = [[2],[3,4],[6,5,7],[4,1,8,3]];

var minimumTotal = function(triangle) {
    if (!triangle || triangle.length === 0) {
        return 0;
    }

    // Create a 2D array to store the minimum path sums
    let dp = [...triangle];

    // Start from the second-to-last row and update the minimum path sums
    for (let i = triangle.length - 2; i >= 0; i--) {
        let arr=triangle[i];
        for (let j = 0; j < triangle[i].length; j++) {
            let number = triangle[i][j];
            dp[i][j] += Math.min(dp[i + 1][j], dp[i + 1][j + 1]);
        }
    }

    return dp[0][0];
};


console.log("**minimumTotal",minimumTotal(triangle));
