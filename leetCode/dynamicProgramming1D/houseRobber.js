// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.
 

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400


var rob = function(nums) {
    const n = nums.length;
   
   if (n === 0) return 0;
   if (n === 1) return nums[0];

   // Create an array to store the maximum amount of money robbed at each house
   const dp = new Array(n);
   dp[0] = nums[0];
   dp[1] = Math.max(nums[0], nums[1]);

   // Iterate through the rest of the houses
   for (let i = 2; i < n; i++) {
       // The maximum amount at the current house is either the sum of money at the current house
       // and the maximum amount two houses before, or the maximum amount at the previous house.
       dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
   }

   return dp[n - 1];
};

// var rob = function(nums) {
//     // let moneyLootedEven=0;
//     // let moneyLootedOdd=0;
//     // for (let i = 0; i < nums.length; i++) {
//     //     const money = nums[i];
//     //     if(i%2===0){
//     //         // console.log("**money",money);
//     //         moneyLootedEven+=money;
//     //     }else{
//     //         moneyLootedOdd+=money;
//     //     }
//     // }
//     // return Math.max(moneyLootedEven,moneyLootedOdd);

//     let currentMax=0;
//     for (let i = 0; i < nums.length; i++) {
//         const outerNumber = nums[i];
//         const sum = outerNumber;
//         currentMax= Math.max(sum,currentMax)
//         for (let j = i+2; j < nums.length; j++) {
//             const innerNumber = nums[j];
//             // console.log("**innerNumber",innerNumber);
//             const sum= outerNumber+innerNumber;
//             currentMax= Math.max(sum,currentMax)
//         }
//     }
//     return currentMax;
    
// };

// console.log("**rob",rob([1,2]));
// console.log("**rob",rob([1,2,3,1]));
console.log("**rob",rob([2,7,9,3,1]));
// console.log("**rob",rob([2,1,1,2]));