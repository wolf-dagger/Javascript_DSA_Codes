// https://leetcode.com/problems/hamming-distance/description/

function solve(x, y) {
    let temp = x ^ y;
    let count = 0;

    while (temp !== 0) {
        temp = temp & (temp - 1);
        count++;
    }
    return count;
}

let x = 1, y = 4;
console.log(solve(x, y));

// Time: O(32) = O(1)