/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
Example 3:

Input: intervals = [[4,7],[1,4]]
Output: [[1,7]]
Explanation: Intervals [1,4] and [4,7] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
 */


var merge = function(intervals) {
    if (intervals.length === 0) return [];

    intervals.sort((a,b) => a[0] - b[0]); // Sort intervals based on start time
     const results = [];
    // 2. Start with the first interval
    let current = intervals[0];
    results.push(current);
    for (let i = 1; i < intervals.length; i++) {
        console.log("Current Interval:",current, "Next Interval:",intervals[i]);
        // If next overlaps with current, merge
        const next = intervals[i];
        if (next[0] <= current[1]) {
            current[1] = Math.max(current[1], next[1]);
            console.log("Merged Interval:",current);
            
        } else {
            // No overlap → push new interval and move current
           current = next; 
            results.push(current);
        }
             console.log("------------");
          console.log("Results so far:",results);
        console.log("------------"); 
    }
    return results;
}



console.log(merge([[1,3],[2,6],[8,10],[15,18]])) // [[1,6],[8,10],[15,18]]
// console.log(merge([[1,4],[4,5]])) // [[1,5]]
// console.log(merge([[4,7],[1,4]])) // [[1,7]];
