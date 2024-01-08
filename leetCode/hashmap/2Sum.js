
// ChatGPT
// Certainly! The Two Sum problem is a classic algorithmic problem often asked in interviews. Here's the description of the problem:

// Two Sum Problem:
// Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

// Example:

// plaintext
// Copy code
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Constraints:

// 2 <= nums.length <= 10^4
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9
// The goal is to find two numbers in the array such that their sum equals the given target, and then return the indices of those two numbers.



function twoSum(arr, target) {


    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {

            //    if(arr[i]!==arr[j]){
            //     if(arr[i]+arr[j]===target){
            //         return[i,j]
            //     }
            //    }

            if (arr[i] + arr[j] === target) {
                return [i, j]
            }


        }
    }
    return sums;
}



console.log(twoSum([2, 7, 11, 15], 9));