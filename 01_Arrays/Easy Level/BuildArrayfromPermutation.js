// https://leetcode.com/problems/build-array-from-permutation/

"use strict"

const arr = [0, 2, 1, 5, 3, 4];

console.log(fun(arr));

function fun(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        res.push(arr[arr[i]]);
    }

    return res;
}