// https://leetcode.com/problems/single-number/description/

function solve(arr) {
    let unique = 0;

    for (let a of arr) {
        unique = unique ^ a;
    }

    return unique;
}

let arr = [4, 1, 2, 1, 2];

console.log(solve(arr));

// Time: O(n)