/*

Given an integer N, the task is to find the number of trailing zeroes in the binary representation of the given number.

Input 1: N = 12
Output 1: 2
Explanation 1: The binary representation of the number 12 is “1100”. Therefore, there are two trailing zeros in the 12.

Input 2: -56
Output 2: 3

Constraints:
-106 <= N <= 106

 */

'use strict'

function solve(n) {

    n = Math.abs(n);
    let count = 0;

    while ((n & 1) === 0 && n !== 0) {
        count++;
        n = n >> 1;
    }
    return count;
}

let n = 12;

console.log(solve(n));

// O(n)