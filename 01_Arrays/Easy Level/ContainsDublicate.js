// https://leetcode.com/problems/contains-duplicate/

"use strict"

let arr = [1, 2, 3];

console.log(fun(arr))


function fun(arr) {
    let set = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) {
            return true;
        } else {
            set.add(arr[i]);
        }
    }
    return false;
}