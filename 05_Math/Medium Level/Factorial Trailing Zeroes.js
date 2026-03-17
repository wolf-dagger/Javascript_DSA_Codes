// https://leetcode.com/problems/factorial-trailing-zeroes/description/

function solve(n) {
    let trailingZeroes = 0;

    while (n >= 5) {
        n = Math.floor(n / 5);
        trailingZeroes += n;
    }

    return trailingZeroes;
}

let n = 10;

console.log(solve(n));

// Time Complexity: O(log n)