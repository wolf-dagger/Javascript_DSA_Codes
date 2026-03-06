'use strict'

function solve(n) {
    if (n <= 0) return false;

    return (n & (n - 1)) === 0;
}

const n = 8;
console.log(solve(n));

// O(1)