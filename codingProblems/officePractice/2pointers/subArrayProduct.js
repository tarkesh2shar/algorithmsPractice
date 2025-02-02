// Today's Problem
// Subarrays with Product Less than a Target (medium)
// Problem Statement
// Given an array with positive numbers and a positive target number, find all of its contiguous subarrays whose product is less than the target number.
// Example 1:

//  
//  Input: [2, 5, 3, 10], target=30                                              
// Output: [2], [5], [2, 5], [3], [5, 3], [10]                           
// Explanation: There are six contiguous subarrays whose product is less than the target.


// Example 2:

//  
//  Input: [8, 2, 6, 5], target=50                                              
// Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5]                         
// Explanation: There are seven contiguous subarrays whose product is less than the target.


// Constraints:
// 	•	1 <= arr.length <= 3 * 104
// 	•	1 <= arr[i] <= 1000
// 	•	0 <= k <= 106




function subArrayProductLessThanK(nums, k) {
    if (k <= 1) return 0; // No subarray product can be less than 1

    let start = 0;
    let product = 1;
    let count = 0;

    for (let x = 0; x < nums.length; x++) {

        //choose
        product *= nums[x]; // Expand the window by multiplying the current number

        // Shrink the window from the left while the product >= k


        // explore
        while (product >= k) {
            //unchoose 
            product /= nums[start];
            start++;
        }

        // Add all subarrays ending at 'end' to the count
        count += x - start + 1;
    }

    return count;

}


console.log(subArrayProductLessThanK([8, 2, 6, 5], 50));
console.log(subArrayProductLessThanK([2, 5, 3, 10], 30));

