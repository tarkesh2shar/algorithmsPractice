/**
     * You are given an integer array cost where cost[i] is the cost of the i-th step
    on a staircase.

    Once you pay the cost, you can either climb one or two steps.

    You can either start from step 0 or step 1.

    Return the minimum cost to reach the top of the floor.


    Input: cost = [10,15,20]
    Output: 15
    Explanation:
    Start at step 1, pay 15, and climb two steps to reach the top.
 */


function minCostClimbingStairs(cost) {
    const n = cost.length;
    const dp = new Array(n + 1).fill(0);

    dp[0] = 0; // start at step 0, no cost yet
    dp[1] = 0; // OR start at step 1, no cost yet

    for (let i = 2; i <= n; i++) {
        //we need to put minimum cost to reach step i 
        //that means we need to compare cost of reaching step i-1 and i-2
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], // cost to reach i from i-1 (taking 1 step)
                         dp[i - 2] + cost[i - 2]); // cost to reach i from i-2 (taking 2 steps)
    }

    return dp[n];

}





// console.log(minCostClimbingStairs([10,15,20])); // 15
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])); // 6
