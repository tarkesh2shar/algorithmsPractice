/*
Problem Statement
Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.

Example 1:
 Input: [4, 1, 2, -1, 1, -3], target=1
Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
Explanation: Both the quadruplets add up to the target.


Example 2:
 Input: [2, 0, -1, 1, -2, 2], target=2
Output: [-2, 0, 2, 2], [-1, 0, 1, 2]
Explanation: Both the quadruplets add up to the target.

Constraints:
    •   1 <= nums.length <= 200
    •   -10^9 <= nums[i] <= 10^9
    •   -10^9 <= target <= 10^9

Solution
This problem follows the Two Pointers pattern and shares similarities with "Triplet Sum to Zero".
We can follow a similar approach to iterate through the array, taking one number at a time. At every step during the iteration, we will search for the quadruplets similar to Triplet Sum to Zero whose sum is equal to the given target.
Here's a detailed walkthrough of the algorithm:
    1.  In searchQuadruplets, the array is first sorted in ascending order. Sorting is important as it allows us to navigate our pointers based on the sum we're calculating and ensures that the generated quadruplets are in a predictable order.
    2.  A List named quadruplets is created to store all the quadruplets found.
    3.  The algorithm then loops over the array, stopping when there are less than four elements remaining (since we need groups of four).
    4.  If the current element is the same as the previous one (and it's not the first), we skip this iteration to avoid duplicate quadruplets.
    5.  A nested loop is initiated from the next index of the outer loop. This loop also ensures that the current element isn't the same as the previous one to avoid duplicates.
    6.  The searchPairs function is called with the array, target value, indices of the first two elements, and the quadruplets list. This function will find pairs in the array (from second+1 index to the end) whose sum with arr[first] and arr[second] equals the target. Any valid quadruplets found are added to the quadruplets list.
    7.  In searchPairs, two pointers left and right are initialized: left to second+1, and right to the last element of the array. It then enters a while loop that continues until left is less than right.
    8.  Inside this loop, the sum of the elements at the current four indices (first, second, left, right) is calculated. If this sum equals targetSum, a valid quadruplet is found.
    9.  This quadruplet is added to the quadruplets list, and both left and right pointers are moved inward. If the next elements are the same as the current elements of left and right respectively, they are skipped to avoid duplicates.
    10. If the calculated sum is less than targetSum, left is incremented to increase the sum (as the array is sorted), and if the sum is greater than targetSum, right is decremented to decrease the sum.
    11. This process repeats until left and right cross, by which point all possible pairs for the given first and second indices have been examined.
    12. Once searchPairs has processed all possible pairs for the given first and second indices, it returns, and the nested loop in searchQuadruplets continues until all possible starting points for quadruplets have been tried.
    13. Once all possible quadruplets have been considered, searchQuadruplets returns the quadruplets list.

Algorithm Walkthrough
Let's walk through the algorithm using the example input [4, 1, 2, -1, 1, -3] with a target of 1.
    1.  Sort the Array:
        Input: [4, 1, 2, -1, 1, -3]
        Sorted Array: [-3, -1, 1, 1, 2, 4]
    2.  Initialize Result List:
        quadruplets = []
    3.  First Loop (i = 0):
        Current Element (arr[i] = -3)
        Second Loop (j = 1):
            Current Element (arr[j] = -1)
            Two Pointers: left = 2, right = 5
    4.  Two-Pointer Process:
        First Sum Calculation:
            sum = arr[0] + arr[1] + arr[2] + arr[5]
            sum = -3 + (-1) + 1 + 4 = 1
            Matches Target: Add [-3, -1, 1, 4] to quadruplets
            Update Pointers:
            left = 3
            right = 4
        Check Duplicates:
            Skip duplicates by moving pointers:
            left moves to 4
            right moves to 4
        Second Sum Calculation:
            Pointers Overlap: End of this pair search
    5.  Second Loop (j = 2):
        Current Element (arr[j] = 1)
        Two Pointers: left = 3, right = 5
        First Sum Calculation:
            sum = arr[0] + arr[2] + arr[3] + arr[5]
            sum = -3 + 1 + 1 + 4 = 3
            Greater Than Target: Move right pointer left
            right = 4
        Second Sum Calculation:
            sum = arr[0] + arr[2] + arr[3] + arr[4]
            sum = -3 + 1 + 1 + 2 = 1
            Matches Target: Add [-3, 1, 1, 2] to quadruplets
            Update Pointers:
            left = 4
            right = 3
        Check Duplicates:
            Skip duplicates by moving pointers:
            left moves to 4
            right moves to 3
        Pointers Overlap: End of this pair search
    6.  Second Loop (j = 3):
        Current Element (arr[j] = 1) (Duplicate)
        Skip this element to avoid duplicates.
    7.  First Loop (i = 1):
        Current Element (arr[i] = -1)
        Second Loop (j = 2):
            Current Element (arr[j] = 1)
            Two Pointers: left = 3, right = 5
        First Sum Calculation:
            sum = arr[1] + arr[2] + arr[3] + arr[5]
            sum = -1 + 1 + 1 + 4 = 5
            Greater Than Target: Move right pointer left
            right = 4
        Second Sum Calculation:
            sum = arr[1] + arr[2] + arr[3] + arr[4]
            sum = -1 + 1 + 1 + 2 = 3
            Greater Than Target: Move right pointer left
            right = 3
        Pointers Overlap: End of this pair search
    8.  Second Loop (j = 3):
        Current Element (arr[j] = 1) (Duplicate)
        Skip this element to avoid duplicates.
    9.  First Loop (i = 2):
        Current Element (arr[i] = 1)
        Second Loop (j = 3):
            Current Element (arr[j] = 1) (Duplicate)
        Skip this element to avoid duplicates.
    •   Final Result: The unique quadruplets are [[ -3, -1, 1, 4], [-3, 1, 1, 2]].
    •
--]]
*/


function quadrupletSum(arr, target) {
    // Return early if array has fewer than 4 elements
    if (arr.length < 4) return [];

    // Sort the array to enable two-pointer approach
    const sortedArray = arr.sort((a, b) => a - b);
    const quadruplets = [];

    for (let i = 0; i < sortedArray.length - 3; i++) {
        // Skip duplicates for `i`
        if (i > 0 && sortedArray[i] === sortedArray[i - 1]) continue;

        for (let j = i + 1; j < sortedArray.length - 2; j++) {
            // Skip duplicates for `j`
            if (j > i + 1 && sortedArray[j] === sortedArray[j - 1]) continue;

            let left = j + 1;
            let right = sortedArray.length - 1;

            while (left < right) {
                const sum = sortedArray[i] + sortedArray[j] + sortedArray[left] + sortedArray[right];

                if (sum < target) {
                    left++;
                } else if (sum > target) {
                    right--;
                } else {
                    // Found a quadruplet
                    quadruplets.push([sortedArray[i], sortedArray[j], sortedArray[left], sortedArray[right]]);

                    // Skip duplicates for `left` and `right`
                    while (left < right && sortedArray[left] === sortedArray[left + 1]) left++;
                    while (left < right && sortedArray[right] === sortedArray[right - 1]) right--;

                    // Move pointers inward
                    left++;
                    right--;
                }
            }
        }
    }

    return quadruplets;
}

// Example Usage
console.log(quadrupletSum([4, 1, 2, -1, 1, -3], 1));
// Output: [[-3, -1, 1, 4], [-3, 1, 1, 2]]

console.log(quadrupletSum([2, 0, -1, 1, -2, 2], 2));
// Output: [[-2, 0, 2, 2], [-1, 0, 1, 2]]
