/*

Check if a number has bits in an alternate pattern.

Input 1: 10
Output 1: true
Explanation 1: 10 in binary = (1010), has an alternate pattern.

Input 2: 12
Output 2: false

Constraints:
1 <= N <= 109

 */

'use strict'

function solve(n) {
    let x = n ^ (n >> 1);

    return (x & (x + 1)) === 0;
}

let n = 12;

console.log(solve(n));