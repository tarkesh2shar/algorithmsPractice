/**
 * You are given an integer array nums.

You need to find the maximum sum of elements such that
no two chosen elements are adjacent in the array.

Return the maximum possible sum.


Input: nums = [3, 2, 5, 10, 7]
Output: 15
Explanation: Choose 3 + 5 + 7


Input: nums = [2, 1, 4, 9]
Output: 11
Explanation: Choose 2 + 9


Input: nums = [5, 5, 10, 100, 10, 5]
Output: 110
Explanation: Choose 5 + 100 + 5

 */



function maxSumNonAdjacent(nums) {
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];

    const dp = new Array(n).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], // not take nums[i]
                         dp[i - 2] + nums[i]); // take nums[i]
      
    }

   console.log(dp);
   return dp[n - 1];
}


 console.log(maxSumNonAdjacent([3, 2, 5, 10, 7])); // 15