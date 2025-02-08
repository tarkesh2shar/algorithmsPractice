/**
 * 
 * Problem Statement

    Given an array of positive integers and a number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to 'S'. Return 0 if no such subarray exists.

    Example 1:

    Input: arr = [2, 1, 5, 2, 3, 2], S=7
    Output: 2
    Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].
    Example 2:

    Input: arr = [2, 1, 5, 2, 8], S=7
    Output: 1 
    Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
    Example 3:

    Input: arr = [3, 4, 1, 1, 6], S=8
    Output: 3
 */

/**
 * 
 *	1.	Initialize Variables:
        •	minLength = Infinity → To track the smallest length found.
        •	windowSum = 0 → To keep the current sum of the window.
        •	windowStart = 0 → To mark the start of the window.
    2.	Expand the Window:
        •	Loop through the array using windowEnd as the end of the window.
        •	Add arr[windowEnd] to windowSum.
    3.	Shrink When Condition is Met:
        •	When windowSum >= S, start shrinking the window:
        •	Update minLength with the current window size.
        •	Subtract arr[windowStart] from windowSum to shrink.
        •	Move windowStart forward.
    4.	Final Check:
        •	If minLength was updated, return it.
        •	If no subarray meets the condition, return 0.
 */


function smallestSubArrayWithGreatestSum(arr, S) {

    let minLength = Infinity;
    let windowSum = 0;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        while (windowSum >= S) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= arr[windowStart];
            windowStart++;

        }
    }
    return minLength === Infinity ? 0 : minLength;
}

console.log(smallestSubArrayWithGreatestSum([2, 1, 5, 2, 3, 2], 7));
