// https://leetcode.com/problems/sum-of-all-subset-xor-totals/

function solve(arr) {
    let or = 0;

    for (let num of arr) {
        or |= num;
    }

    return or * (1 << (arr.length - 1));
}

let nums = [5, 1, 6];

console.log(solve(nums));

// O(n)