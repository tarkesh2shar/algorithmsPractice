/**
 * Meeting Rooms II (LeetCode 253)

You are given an array of meeting time intervals called intervals, where each interval is represented as [start, end]. Your task is to return the minimum number of conference rooms required so that every meeting can take place without overlapping.

Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2
Explanation: The meeting [0,30] overlaps with both [5,10] and [15,20], so at least 2 rooms are required.

Example 2:
Input: intervals = [[7,10],[2,4]]
Output: 1
Explanation: These meetings do not overlap in time, so only 1 room is needed.

Informal restatement:
You need to find the maximum number of meetings that are happening at the same time. That number is the minimum number of conference rooms required.
 */


function minMeetingRooms(intervals) {
    if (intervals.length === 0) return 0;
    
    // 1. Separate start and end times
    const starts = intervals.map(interval => interval[0]).sort((a, b) => a - b);
    const ends = intervals.map(interval => interval[1]).sort((a, b) => a - b);

    console.log("Start Times:",starts);
    console.log("End Times:",ends);
    
    let startPointer = 0;
    let endPointer = 0;
    let usedRooms = 0;

    // 2. Iterate through meetings
    while (startPointer < intervals.length) {
        // If there's a meeting that has ended by the time the meeting at `startPointer` starts
        if (starts[startPointer] >= ends[endPointer]) {
            usedRooms -= 1; // Free up a room
            endPointer += 1;
        }

        // We need a room for the current meeting
        usedRooms += 1; 
        startPointer += 1;
        
        console.log("Used Rooms after processing meeting starting at",starts[startPointer - 1],":",usedRooms);
    }

    return usedRooms;
    

};

console.log(minMeetingRooms([[0,30],[5,10],[15,20]])) // 2
// console.log(minMeetingRooms([[7,10],[2,4]])) // 1;

