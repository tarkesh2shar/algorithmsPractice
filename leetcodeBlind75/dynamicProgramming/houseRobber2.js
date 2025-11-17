/**
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
Example 2:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 3:

Input: nums = [1,2,3]
Output: 3
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 1000
 */

function houseRobber(nums) {
    const n = nums.length;
    
    //base case 
    if (n === 0) return 0;
    if (n === 1) return nums[0];

    const db = new Array(n).fill(0); //make a dynamic table , whose index corresponds to house max value as we expand our search,
    db[0] = nums[0]; //first house max value is the value itself
    db[1] = Math.max(nums[0], nums[1]); //second house max value is the max of first two houses
    //iterate through the rest of the houses
        for (let i = 2; i < n; i++) {
            console.log("i:", i, "nums[i]:", nums[i]); 
            //max value if we take current house value , plus the previous max adjacent house value
            const takeCurrent = nums[i] + db[i - 2];
            //max value if we skip current house value , take previous house max value
            const skipCurrent = db[i - 1];

            //store the max of both scenarios in the dynamic table at current house index
            db[i] = Math.max(takeCurrent, skipCurrent);
             console.log("db before filling:", db);
            
        }
        return db[n - 1]; //return the last element which contains the max value for all houses

}


function houseRobber2(nums) {
    //we cannot rob first and last house together, so we will do two scenarios
    //scenario 1: rob from house 0 to n-2 (exclude last house)
    //scenario 2: rob from house 1 to n-1 (exclude first house)
    //calculate max for both scenarios and return the max of both
    
    if (nums.length === 1) return nums[0]; //if only one house, return its value
    
    const maxExcludingLast = houseRobber(nums.slice(0, nums.length - 1)); //rob from house 0 to n-2
    const maxExcludingFirst = houseRobber(nums.slice(1)); //rob from house 1 to n-1
    
    return Math.max(maxExcludingLast, maxExcludingFirst); //return the max of both scenarios
}



console.log(houseRobber2([2, 3, 2])); // Expected output: 3
console.log(houseRobber2([1, 2, 3, 1])); // Expected output: 4
console.log(houseRobber2([1, 2, 3])); // Expected output: 3
