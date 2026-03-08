// https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/description/

function solve(arr) {
    let sum = 0;
    let max = 0;

    for (let a of arr) {
        sum += a;
        max = Math.max(max, a);
    }

    return Math.max(max, Math.ceil(sum / 2));
}

let arr = [1, 4, 2];

console.log(solve(arr));