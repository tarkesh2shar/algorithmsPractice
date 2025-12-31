/**
 *  * Difficulty: Easy
Summary:
You are climbing a staircase with n steps. Each time you can climb 1 or 2 steps.
Return the number of distinct ways to reach the top.
👉 Classic Fibonacci DP.
 */




var climbStairs = function(n) {
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1; // 1 way to stay at the ground (do nothing)
    dp[1] = 1; // 1 way to reach the first step

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]; // sum of ways to reach the last step and the one before it
    }

    return dp[n];
}





console.log("**climbStairs**",climbStairs(10));
