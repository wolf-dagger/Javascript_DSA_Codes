// https://leetcode.com/problems/number-of-unequal-triplets-in-array/

'use strict'

function solve(arr) {
    let map = new Map();
    for (let a of arr) {
        map.set(a, (map.get(a) || 0) + 1);
    }
    let left = 0
    let result = 0;
    let n = arr.length;

    for (let freq of map.values()) {
        let right = n - left - freq;
        result += left * freq * right;
        left += freq;
    }
    return result;
}

let arr = [4, 4, 2, 4, 3];
console.log(solve(arr));

// O(n)