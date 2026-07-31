// https://www.geeksforgeeks.org/problems/activity-selection-1587115620/1

function solve(start, finish) {
    let pairs = [];

    for (let i = 0; i < start.length; i++) {
        pairs.push([start[i], finish[i]]);
    }

    pairs.sort((a, b) => a[1] - b[1]);

    let finishTime = -1;
    let ans = 0;

    for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i];

        if (pair[0] > finishTime) {
            finishTime = pair[1];
            ans++;
        }
    }

    return String(ans);
}

const start = [1, 3, 0, 5, 8, 5];
const finish = [2, 4, 6, 7, 9, 9];

console.log(solve(start, finish));