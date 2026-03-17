// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/description/

'use strict'

function solve(n) {
    let count = 0;

    while (n > 0) {
        if (n % 2 === 0) {
            count++;
            n = n / 2;
        } else {
            n--;
            count++
        }
    }
    return count;
}

let n = 14;
console.log(solve(n));

// O(log n)