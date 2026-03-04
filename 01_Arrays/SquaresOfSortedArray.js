// https://leetcode.com/problems/squares-of-a-sorted-array/

"use strict"

const nums = [-4, -1, 0, 3, 10];

console.log(squareSorted(nums));

function squareSorted(arr) {
    let n = arr.length;
    let res = new Array(n);

    let left = 0;
    let right = n - 1;
    let pos = n - 1;

    while (left <= right) {
        let leftSquare = arr[left] * arr[left];
        let rightSquare = arr[right] * arr[right];

        if (leftSquare > rightSquare) {
            res[pos] = leftSquare;
            left++;
        } else {
            res[pos] = rightSquare;
            right--;
        }
        pos--;
    }
    return res;

}