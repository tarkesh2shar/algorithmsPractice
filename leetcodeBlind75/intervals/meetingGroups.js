/**
 * You are given an array of meeting time intervals intervals,
    where each interval is represented as:
    [start, end]
    Return true if a person can attend all meetings,
    or false if any two meetings overlap.

    Examples

    Example 1

    Input: intervals = [[0,30],[5,10],[15,20]]
    Output: false
    Explanation: The meeting [0,30] overlaps with [5,10].


    Input: intervals = [[7,10],[2,4]]
    Output: true
    Explanation: These meetings do not overlap.


    Constraints
        •	0 <= intervals.length <= 10^4
        •	intervals[i].length == 2
        •	0 <= start < end <= 10^6

 */



var canAttendMeetings = function(intervals) {
     if (intervals.length === 0) return true;
    // 1. Sort by start time
    intervals.sort((a, b) => a[0] - b[0]);
    console.log("Sorted Intervals by start time:",intervals);

    let firstInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {

        if(firstInterval[1] > intervals[i][0]) {
            return false;
        } else {
            firstInterval = intervals[i];
        }
    }
    return true;
}

console.log(canAttendMeetings([[0,30],[5,10],[15,20]])) // false
// console.log(canAttendMeetings([[7,10],[2,4]])) // true;
