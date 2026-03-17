// Given a number N, the task is to find the even factor sum of a number.
//
//     Input 1: 30
// Output 1: 48
// Explanation 1: Even dividers sum 2 + 6 + 10 + 30 = 48
//
// Input 2: 18
// Output 2: 26
//
// Constraints:
//     1 <= N <= 106

'use strict'

function solve(n) {
    let sum = 0;

    for (let i = 1; i * i <= n; i++) {

        if (n % i === 0) {

            if (i % 2 === 0) {
                sum += i;
            }

            let other = n / i;

            if (other !== i && other % 2 === 0) {
                sum += other;
            }
        }
    }

    return sum;
}

let n = 30;

console.log(solve(n));

// O(√n)