// https://leetcode.com/problems/single-number-ii/description/

function solve(arr) {
    let ones = 0;
    let twos = 0;

    for (let a of arr) {
        ones = (ones ^ a) & (~twos);
        twos = (twos ^ a) & (~ones);
    }

    return ones;
}

let arr = [2, 2, 3, 2];

console.log(solve(arr));

// O(n)