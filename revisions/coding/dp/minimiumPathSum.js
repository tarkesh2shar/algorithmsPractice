/**
 * Problem

    Given a grid of non-negative numbers, find a path from top-left to bottom-right with minimum sum.

    You can only move right or down.

    Example

    grid = [
        [1,3,1],
        [1,5,1],
        [4,2,1]
        ]

        Output: 7
        Path: 1 → 3 → 1 → 1 → 1


        DP Meaning (very important)

        dp[i][j] = minimum cost to reach cell (i, j)

        ⸻

        Base Case
            •	dp[0][0] = grid[0][0]

        ⸻

        Transition

        To reach (i, j):
            •	from top (i-1, j)
            •	from left (i, j-1)


        dp[i][j] = grid[i][j] + Math.min(
            dp[i - 1][j],
            dp[i][j - 1]
            );

 */