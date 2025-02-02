/**
 * Find Non-Duplicate Number Instances (Easy)
 * 
 * Problem Statement:
 * Given an array of sorted numbers, move all non-duplicate number instances 
 * to the beginning of the array in-place. The non-duplicate numbers should 
 * remain sorted, and the solution must use constant space (i.e., no extra space).
 * 
 * After moving the unique numbers, return the length of the subarray that 
 * contains no duplicates.
 * 
 * Example 1:
 * Input: [2, 3, 3, 3, 6, 9, 9]
 * Output: 4
 * Explanation:
 * The first four elements after removing duplicates will be [2, 3, 6, 9].
 * 
 * Example 2:
 * Input: [2, 2, 2, 11]
 * Output: 2
 * Explanation:
 * The first two elements after removing duplicates will be [2, 11].
 * 
 * Constraints:
 * 1. 1 <= nums.length <= 3 * 10^4
 * 2. -100 <= nums[i] <= 100
 * 3. nums is sorted in non-decreasing order.
 * 
 * Goal:
 * Move all unique number instances to the beginning of the array and 
 * return the length of the subarray with no duplicates.
 */


// Wrong approach 
function removeDuplicatesWrongSolution(nums) {
    let removedArray = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) continue;
        removedArray.push(nums[i]);
    }
    return removedArray.length
}


function removeDuplicates(nums) {
    // Index to place the next unique element
    let uniqueIndex = 0;

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // If the current number is not the same as the next number, it's unique
        if (i === nums.length - 1 || nums[i] !== nums[i + 1]) {
            nums[uniqueIndex] = nums[i]; // Place the unique number at the current unique index
            uniqueIndex++; // Increment the unique index
        }
    }

    // Return the length of the subarray with no duplicates
    return uniqueIndex;


}

// •	Time Complexity: O(n), where n is the length of the array. We iterate through the array once.
// •	Space Complexity: O(1), since no extra space is used.

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9])); // Output: 4
console.log(removeDuplicates([2, 2, 2, 11]));         // Output: 2


