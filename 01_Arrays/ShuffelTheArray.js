// https://leetcode.com/problems/shuffle-the-array/

"use strict"

let arr = [2, 5, 1, 3, 4, 7];
const len = 3;

console.log(fun(arr, len));

function fun(arr, n) {

    let m = n;
    let res = [];

    for (let i = 0; i < n; i++) {
        res.push(arr[i]);
        res.push(arr[m])
        m++;
    }

    return res;
}