/**
 * Given an array of integers arr[]  and a number k. Return the maximum sum of a subarray of size k.

    Note: A subarray is a contiguous part of any given array.

    Examples:

    Input: arr[] = [100, 200, 300, 400] , k = 2
    Output: 700
    Explanation: arr3  + arr4 = 700, which is maximum.
    Input: arr[] = [100, 200, 300, 400] , k = 4
    Output: 1000
    Explanation: arr1 + arr2 + arr3 + arr4 = 1000, which is maximum.
    Input: arr[] = [100, 200, 300, 400] , k = 1
    Output: 400
    Explanation: arr4 = 400, which is maximum.
    Constraints:
    1 <= arr.size() <= 106
    1 <= arr[i]<= 106
    1 <= k<= arr.size()
 */


function maxSubarraySumNotBettter(arr, k) {
    let currentSum = 0;
    // Calculate sum of first window
    for (let i = 0; i < k; i++) {
        currentSum += arr[i];
    }

    let sum = currentSum;
    for (let i = k; i < arr.length; i++) {
        currentSum = currentSum - arr[i - k] + arr[i];
        sum = Math.max(sum, currentSum);
    }
    console.log("Initial sum of first window:", currentSum);
    return sum;
}

function maxSubarraySum(arr, k) {
    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i]; // we do this until we get to the k element ok 

        if (i >= k - 1) { // for all the i greator than k 
            maxSum = Math.max(maxSum, currentSum);
            currentSum = currentSum - arr[i - k + 1]
        }
    }
    return maxSum;
}


console.log(maxSubarraySum([100, 200, 300, 400], 2));

