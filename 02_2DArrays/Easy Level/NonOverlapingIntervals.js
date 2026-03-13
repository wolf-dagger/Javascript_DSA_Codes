// LeetCode : https://leetcode.com/problems/non-overlapping-intervals/

"use strict"

let intervals = [[1, 2], [2, 3], [3, 4], [1, 3]];

console.log(solve(intervals));

function solve(intervals) {

    if (intervals.length === 0) return 0;

    // Step 1: Sort by end time
    intervals.sort((a, b) => a[1] - b[1]);

    let removeCount = 0;
    let prevEnd = intervals[0][1];

    // Step 2: Traverse
    for (let i = 1; i < intervals.length; i++) {
        let [start, end] = intervals[i];

        if (start < prevEnd) {
            // Overlapping → remove this interval
            removeCount++;
        } else {
            // No overlap → update prevEnd
            prevEnd = end;
        }
    }

    return removeCount;
}


// Time Complexity ; O(n log n)