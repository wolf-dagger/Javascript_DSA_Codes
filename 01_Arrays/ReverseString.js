"use strict"

let arr = ['h', 'e', 'l', 'l', 'o'];

console.log(fun(arr))

function fun(arr) {
    let l = 0;
    let r = arr.length - 1;

    while (l < r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;

        l++;
        r--;
    }

    return arr;
}