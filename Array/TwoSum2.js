"use strict"

let arr = [2, 3, 4];
let target = 6;

console.log(fun(arr, target))

function fun(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] + arr[right] === target) {
            return [left + 1, right + 1];
        } else if (arr[left] + arr[right] > target) {
            right--;
        } else {
            left++;
        }
    }
    return [-1, -1];
}