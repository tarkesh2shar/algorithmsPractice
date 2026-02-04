/**
 * Unique Paths with Obstacles

Problem

You are given an m x n grid.
	•	0 → free cell
	•	1 → obstacle

You start at top-left (0,0)
You want to reach bottom-right (m-1, n-1)

You can only move:
	•	right
	•	down

Return the number of unique paths.

grid = [
  [0,0,0],
  [0,1,0],
  [0,0,0]
]

Output: 2


Why?
	•	One path goes around the obstacle from the top
	•	One from the left

⸻

Why this is a GREAT next 2D DP
	•	No strings
	•	No insert/delete/replace
	•	Still 2D DP
	•	Still base cases + transitions
	•	Much more visual

⸻

DP Definition (very important)

dp[i][j] = number of ways to reach cell (i, j)
 */




function uniquePathsWithObstacles(grid) {
  const m = grid.length;
  const n = grid[0].length;

  const dp = Array.from({ length: m }, () =>
    new Array(n).fill(0)
  );

  // start blocked
  if (grid[0][0] === 1) return 0;

  dp[0][0] = 1;

  /**
   * 1) What DP cell means

    Let:

    dp[r][c] = number of ways to reach cell (r,c) from (0,0)
    (only moves: right, down)

    If a cell is an obstacle → 0 ways.
   */

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        //“If this cell is blocked, there are ZERO ways to stand here.”
        dp[i][j] = 0;
      } else {
        if (i > 0) dp[i][j] += dp[i - 1][j];
        if (j > 0) dp[i][j] += dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
}


// console.log(uniquePathsWithObstacles([
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ])); // 2

console.log(uniquePathsWithObstacles([
  [0,1],
  [0,0]
])); // 1
