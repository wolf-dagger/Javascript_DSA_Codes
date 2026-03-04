// LeetCode : https://leetcode.com/problems/two-sum/description/

"use strict";

let arr = [3, 2, 4];
const target = 6;

function fun(arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (map.has(target - arr[i])) {
            return [i, map.get(target - arr[i])];
        } else {
            map.set(arr[i], i);
        }
    }

    return [-1, -1];
}

console.log(fun(arr));
