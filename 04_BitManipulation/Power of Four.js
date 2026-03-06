// https://leetcode.com/problems/power-of-four/description/

'use strict'

function solve(n) {
    let count = 0;

    for (let i = 0; i < 32; i++) {
        if (((n >> i) & 1) !== 0) {
            count++;

            if (i % 2 === 1) return false;
        }
    }
    return count === 1;
}

const n = 16;

console.log(solve(n));

// O(n)