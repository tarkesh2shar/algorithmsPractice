/**
 * 
 * Given an array of positive numbers and a positive number 'k,' find the maximum sum of any contiguous subarray of size 'k'.

    Example 1:

    Input: arr = [2, 1, 5, 1, 3, 2], k=3 
    Output: 9
    Explanation: Subarray with maximum sum is [5, 1, 3].
    Example 2:

    Input: arr = [2, 3, 4, 1, 5], k=2 
    Output: 7
    Explanation: Subarray with maximum sum is [3, 4].


 */

function maxSubarraySum(arr, k) {

    let currentSum = 0;
    let maxSum = -Infinity;
    let resultSubarray = [];

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if (i >= k - 1) {
            if (currentSum > maxSum) {
                maxSum = currentSum;
                resultSubarray = arr.slice(i - k + 1, i + 1);  // Store the subarray only when it's the new max
            }
            currentSum -= arr[i - k + 1];  // Shrink window
        }
    }

    return resultSubarray;
}


console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3));