// https://leetcode.com/problems/find-the-pivot-integer/description/

'use strict'

function solve(n) {
    let totalSum = (n * (n + 1)) / 2;

    let leftSum = 0;

    for (let i = 1; i <= n; i++) {
        leftSum += i;

        if (leftSum === totalSum - leftSum + i) {
            return i;
        }
    }
    return -1
}

// O(n)

function solve2(n) {
    let x = Math.sqrt((n * (n + 1)) / 2);
    return Number.isInteger((x)) ? x : -1;
}

//  O(1)


let n = 8;

console.log(solve2(n));