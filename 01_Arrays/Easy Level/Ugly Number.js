// https://leetcode.com/problems/ugly-number/description/?q=Ugly+Number+Ii

function solve(n) {
    if (n <= 0) return false;

    let factors = [2, 3, 5];

    for (let factor of factors) {
        while (n % factor === 0) {
            n = n / factor;
        }
    }
    return n === 1;
}

let n = 6;
console.log(solve(n));

// O(log n)