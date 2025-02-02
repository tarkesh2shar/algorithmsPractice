/**
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 *
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 * Constraints:
 * 2 <= nums.length <= 104
 * -109 <= nums[i] <= 109
 * -109 <= target <= 109
 * Only one valid answer exists.
 */

// Brute Force
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
/**
 * Time Complexity: O(n^2)
 * - Two nested loops each potentially iterating through the array.
 * Space Complexity: O(1)
 * - No extra space is used other than a few variables.
 */

// Using Hashmap
var sum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]; // Store the difference in the map 
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }
};
/**
 * Time Complexity: O(n)
 * - Single iteration through the array.
 * - Lookup and insertion operations in the hashmap take O(1).
 * Space Complexity: O(n)
 * - The hashmap stores up to n elements in the worst case.
 */

// Using Two Pointers
var sumTwoPointers = function (nums, target) {
    // Create an array of [value, index] pairs to keep track of original indices
    const sortedNums = nums.map((value, index) => [value, index]).sort((a, b) => a[0] - b[0]);

    let left = 0;
    let right = sortedNums.length - 1;

    while (left < right) {
        const sum = sortedNums[left][0] + sortedNums[right][0];
        if (sum === target) {
            // Return the original indices of the two numbers
            return [sortedNums[left][1], sortedNums[right][1]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    // If no solution is found (should not happen given constraints)
    return [];
};
/**
 * Time Complexity: O(n log n)
 * - Sorting the array takes O(n log n).
 * - The two-pointer traversal takes O(n).
 * Space Complexity: O(n)
 * - The sorted array requires additional space to store pairs of values and their original indices.
 */

console.log(sumTwoPointers([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(sumTwoPointers([3, 2, 4], 6));      // Output: [1, 2]
console.log(sumTwoPointers([3, 3], 6));         // Output: [0, 1]