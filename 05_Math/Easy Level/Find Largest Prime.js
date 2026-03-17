/*
Given a positive integer ‘N' ( 1 <= N <= 1015). Find the largest prime factor of a number.

Input 1: 6
Output 1: 3
Explanation 1: Prime factor of 6 are - 2, 3
Largest of them is '3'

Input 2: 15
Output 2: 5

Constraints:
1 <= N <= 1015
 */

function solve(n) {
    let factors = [];

    for (let i = 2; i * i <= n; i++) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }
    if (n > 1) factors.push(n);

    return factors[factors.length - 1];
}

let n = 15;
console.log(solve(n));

// O(√n)