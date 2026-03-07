// https://leetcode.com/problems/number-of-good-pairs/description/

'use strict'

function solve(nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
    }
    return count;
}

// O(n²)

function solve2(nums) {

    let map = new Map();
    let count = 0;

    for (let num of nums) {
        if (map.has(num)) {
            count += map.get(num);
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }

    return count;
}

// O(n)

let nums = [1, 2, 3, 1, 1, 3];
console.log(solve2(nums));