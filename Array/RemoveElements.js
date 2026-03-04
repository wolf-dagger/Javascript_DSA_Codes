"use strict"

let arr = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

console.log(fun(arr, val));


function fun(arr, val) {

    let p = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== val) {
            arr[p] = arr[i];
            p++;
        }
    }
    return p;
}