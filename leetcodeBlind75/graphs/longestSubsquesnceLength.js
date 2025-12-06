/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
Example 3:

Input: nums = [1,0,1,2]
Output: 3
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
 */





/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    console.log("**Running this");
    
    const set = new Set(nums);
    let longestStreak = 0;

    for (const number of set) {
        let previousNeighbours = number - 1;
        // start of sequence
        if (!set.has(previousNeighbours)) {
            let currentNum = number;
            let currentStreak = 1;
            // Count upward as long as the chain continues
            while (set.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }
            longestStreak = Math.max(currentStreak, longestStreak);
        }
    }

    return longestStreak;
};



console.log(longestConsecutive([100,4,200,1,3,2])); //4
