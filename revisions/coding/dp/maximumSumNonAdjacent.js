/**
 * You are given an integer array nums.

You need to find the maximum sum of elements such that
no two chosen elements are adjacent in the array.

Return the maximum possible sum.

Input: nums = [3, 2, 5, 10, 7]
Output: 15
Explanation: Choose 3 + 5 + 7


Input: nums = [3, 2, 5, 10, 7]
Output: 15
Explanation: Choose 3 + 5 + 7

Input: nums = [2, 1, 4, 9]
Output: 11
Explanation: Choose 2 + 9

Input: nums = [5, 5, 10, 100, 10, 5]
Output: 110
Explanation: Choose 5 + 100 + 5

1 <= nums.length <= 100
-1000 <= nums[i] <= 1000


 */

function maximumSumNonAdjacent(nums) {

    //base cases
    if (nums.length === 0) return 0;
    if (nums.length === 1) return Math.max(0, nums[0]);

 // this represents the maximum sum at any given index i,
    const dp= new Array(nums.length).fill(0);

    dp[0] = Math.max(0, nums[0]); // max sum at index 0 , so we can not take if it's negative
    dp[1] = Math.max(dp[0], nums[1]); // max sum at index 1, either take first or second element


    for (let i = 2; i < nums.length; i++) {
        //hmmm what to put at index 2 ?  we need the best sum possible at index 2
        //either we will not select the current one , or select the current one based on what is max 
        const notIncludeCurrent= dp[i - 1]; // not include current element
        const includeCurrent = nums[i] + dp[i - 2]; // include current element
        dp[i] = Math.max(notIncludeCurrent, includeCurrent);
    }

    return dp[nums.length - 1];
};




console.log(maximumSumNonAdjacent([3, 2, 5, 10, 7]));