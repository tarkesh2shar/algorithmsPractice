/**
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.

 

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1
 

Constraints:

1 <= nums.length <= 2500
-104 <= nums[i] <= 104
 

Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?
 */


function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;
    let dp = new Array(nums.length).fill(0);
    dp[0] = 1;
    let maxLen = 1;

    for (let i = 1; i < nums.length; i++) {
        dp[i] = 1; // ✅ each element is at least a subsequence of length 1
        console.log("i:", i, "nums[i]:", nums[i]);
        for (let j = 0; j < i; j++) {
            console.log("  j:", j, "nums[j]:", nums[j]);
            console.log("****************");
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
                console.log("    nums[i] > nums[j] --> dp[i]:", dp[i]);
            }

            
            
        }
        console.log("dp array at i =", i, "is:", dp);
        maxLen = Math.max(maxLen, dp[i]);
        console.log("-----------------------------------");
    
        
    }
    return maxLen;
}


console.log("final answer",lengthOfLIS([10,9,2,5,3,7,101,18])); // 4
// console.log(lengthOfLIS([0,1,0,3,2,3])); // 4
// console.log(lengthOfLIS([7,7,7,7,7,7,7])); // 1
