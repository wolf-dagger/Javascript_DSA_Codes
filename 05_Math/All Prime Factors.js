/*
Given a number n, write an efficient function to print all prime factors of n.
 For example, if the input number is 12, then the output should be “2 2 3”.
 And if the input number is 315, then the output should be “3 3 5 7”.

 Input 1: 315
Output 1: 3 3 5 7
Explanation 1: Prime Factors of 315 are 3, 3, 5, 7

Input 2: 12
Output 2: 2 2 3

Constraints:
1 <= N <= 106
 */


'use strict'

function solve(n) {
    let factors = [];

    for (let i = 2; i * i <= n; i++) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }
    if (n > 1) factors.push(n);

    return factors;
}

let n = 12;

console.log(solve(n));

// O(√n)