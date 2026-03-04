"use strict"

let arr = [1, 2, 3, 4];

function fun(arr) {

    for (let i = 1; i < arr.length; i++) {
        arr[i] += arr[i - 1];
    }

    return arr;
}

console.log(fun(arr));