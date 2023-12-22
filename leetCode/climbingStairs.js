// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 

// Constraints:

// 1 <= n <= 45



// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

// var climbStairs = function(n) {
//     if (n === 1) {
//         return 1;  // If there's only 1 step, there's 1 way to climb it.
//     } else if (n === 2) {
//         return 2;  // If there are 2 steps, there are 2 ways: (1, 1) or (2).
//     }
//     return climbStairs(n - 1) + climbStairs(n - 2);
//         }


// var climbStairs= function(n){
//     if (n === 0 || n === 1) {
//         return 1;
//     }

//     let dp = new Array(n + 1).fill(0);
//     dp[0] = dp[1] = 1;

//     for (let i = 2; i <= n; i++) {
//         dp[i] = dp[i - 1] + dp[i - 2];
//     }

//     return dp[n];
// }
  
const memo={}
var climbStairs= function(n,memo){
    let result;
    if(memo[n]){
     return memo[n];
   }
     if(n===0||n===1){
         result = 1
     }else{
       result= climbStairs(n-1,memo) + climbStairs(n-2,memo)
     }
       memo[n]=result;
      return result;

}


console.log(climbStairs(5,memo));
// climbStairs(2)
// console.log(climbStairs(3));
// console.log(climbStairs(4));
// console.log(climbStairs(5));
// climbStairs(6)

// climbStairs(10)

// console.log(cheater(3));