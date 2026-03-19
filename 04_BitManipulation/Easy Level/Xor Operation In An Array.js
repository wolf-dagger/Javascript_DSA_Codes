// https://leetcode.com/problems/xor-operation-in-an-array/description/

'use strict'

function solve(n, start) {
    let res = 0;

    for (let i = 0; i < n; i++) {
        let num = start + 2 * i;
        res = res ^ num;
    }

    return res;
}

let n = 5;
let start = 0;

console.log(solve(n, start));