/**
 * You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

Constraints:

1 <= nums.length <= 104
0 <= nums[i] <= 105
 */


var canJump = function(nums) {
    const n = nums.length;
    const dp = new Array(n).fill(false);
    dp[n - 1] = true; // Last index is always reachable from itself

    for (let i = n - 2; i >= 0; i--) {
         const maxJump = Math.min(i + nums[i], n - 1); // furthest we can go from i
  
       console.log("  maxJump:", maxJump);

  // Check if any reachable index from i can reach the end
        for (let j = i + 1; j <= maxJump; j++) {
            if (dp[j]) {
                dp[i] = true;
                break;
            }
        }
        console.log("i:", i, "nums[i]:", nums[i], "dp[i]:", dp[i], "dp:", dp);
       
       
    }
     return dp[0]; // can we reach last index from start?

    
};



console.log(canJump([2,3,1,1,4])) // true
console.log("-------------------");

console.log(canJump([3,2,1,0,4])) // false   ;
