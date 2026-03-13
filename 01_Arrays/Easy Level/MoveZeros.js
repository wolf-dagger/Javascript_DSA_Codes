// https://leetcode.com/problems/move-zeroes/

"use strict"

let arr = [0, 1, 0, 3, 12];

function fun(nums) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Swap only if needed
            [nums[k], nums[i]] = [nums[i], nums[k]];
            k++;
        }
    }
}

fun(arr);
console.log(arr)