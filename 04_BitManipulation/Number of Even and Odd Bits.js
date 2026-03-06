// https://leetcode.com/problems/number-of-even-and-odd-bits/description/

'use strict'

function solve(n) {

    let res = [0, 0];

    let i = 0;
    while (n > 0) {

        if ((n & 1) === 1) {
            if (i % 2 === 0) {
                res[0]++;
            } else {
                res[1]++;
            }
        }
        i++;
        n = n >> 1;
    }

    return res;
}

let n = 50;
console.log(solve(n));

// O(log n)