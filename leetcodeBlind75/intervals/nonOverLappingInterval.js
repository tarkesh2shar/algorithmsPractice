/**
 * Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.

 

Example 1:

Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
Example 2:

Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
Example 3:

Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
 

Constraints:

1 <= intervals.length <= 105
intervals[i].length == 2
-5 * 104 <= starti < endi <= 5 * 104
 */


var eraseOverlapIntervals = function(intervals) {

 if (intervals.length == 0) return 0;

    // 1. Sort by end time
    intervals.sort((a, b) => a[1] - b[1]);

    console.log("Sorted Intervals by end time:",intervals);
    

    var countKeep = 1; // we always keep the first
    var prevEnd = intervals[0][1];


    

    // 2. Scan from second interval
    for (var i = 1; i < intervals.length; i++) {
        var start = intervals[i][0];
        var end = intervals[i][1];
            console.log("prevEnd:",prevEnd);
        console.log("start:",start,"end:",end);
        
        if (start >= prevEnd) {
            console.log("overlap not found");
            
            // No overlap → we keep it
            countKeep++;
            prevEnd = end;
        } else {
            console.log("overlap found");
            // Overlap → we "remove" this interval (do nothing)
            // Because it ends later or equal, and we prefer the one with smaller end
        }
        console.log("------------");
        
    }

    return intervals.length - countKeep; // removed = total - kept


}



console.log(eraseOverlapIntervals([[1,5],[3,7],[4,6] ,[6,8]])) // 1;

// console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])) // 1
// console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]])) // 2
// console.log(eraseOverlapIntervals([[1,2],[2,3]])) // 0;
