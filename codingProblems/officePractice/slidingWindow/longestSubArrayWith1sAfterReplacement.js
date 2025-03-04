/**
 * 
 * 
 * Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

    Example 1:

    Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2  
    Output: 6  
    Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
    Example 2:

    Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3  
    Output: 9
    
 */


function longestSubArrayWithOnesAfterReplacements(arr, k) {
   let windowStart = 0;
   let maxOnesLength = 0;
   let zeroCount = 0; // Track number of zeros in window

   for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      if (arr[windowEnd] === 0) {
         zeroCount++;
      }

      // If there are more zeros than k, shrink the window
      while (zeroCount > k) {
         if (arr[windowStart] === 0) {
            zeroCount--;
         }
         windowStart++; // Shrink window
      }

      // Update the maximum length of the valid window
      maxOnesLength = Math.max(maxOnesLength, windowEnd - windowStart + 1);
   }

   return maxOnesLength;
}


console.log(longestSubArrayWithOnesAfterReplacements([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
console.log(longestSubArrayWithOnesAfterReplacements([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));