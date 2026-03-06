// https://leetcode.com/problems/minimum-bit-flips-to-convert-number/

function solve(start, goal) {
    let n = start ^ goal;

    let count = 0;

    while (n > 0) {
        if ((n & 1) === 1) {
            count++;
        }
        n = n >> 1;
    }
    return count;
}

let start = 10;
let goal = 7;

console.log(solve(start, goal));

// O(n)