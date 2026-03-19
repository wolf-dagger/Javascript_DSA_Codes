// https://leetcode.com/problems/counting-bits/description/

'use strict'

function solve(n) {
    let result = [];

    for (let num = 0; num <= n; num++) {
        let count = 0;

        for (let i = 0; i < 32; i++) {
            if (((num >> i) & 1) === 1) count++;
        }
        result.push(count);
    }

    return result;
}

const n = 2;
console.log(solve(n));


// O(n)