// https://leetcode.com/problems/nth-magical-number/description/

function solve(n, a, b) {
    let mod = 1e9 + 7;

    let lcm = (a * b) / gcd(a, b);

    let left = 1;
    let right = n * Math.min(a, b);

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        let count =
            Math.floor(mid / a) +
            Math.floor(mid / b) -
            Math.floor(mid / lcm);

        if (count < n) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left % mod;
}

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let n = 1;
let a = 2;
let b = 3;

console.log(solve(n, a, b));

// O(log n)