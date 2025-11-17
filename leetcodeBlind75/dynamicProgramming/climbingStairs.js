/**
 * Difficulty: Easy
Summary:
You are climbing a staircase with n steps. Each time you can climb 1 or 2 steps.
Return the number of distinct ways to reach the top.
👉 Classic Fibonacci DP.
DP Formula: dp[i] = dp[i-1] + dp[i-2]
 */



var climbStairs = function(n) {
    if (n <= 2) return n;
    dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];

}

var clinbStairsEfficient = function(n) {
    if (n <= 2) return n;
    let first = 1;
    let second = 2;
    let current;
    for (let i = 3; i <= n; i++) {
        current = first + second;
        first = second;
        second = current;
    }
    return current;
}

console.log(climbStairs(5)); // 8
console.log(clinbStairsEfficient(5)); // 8

