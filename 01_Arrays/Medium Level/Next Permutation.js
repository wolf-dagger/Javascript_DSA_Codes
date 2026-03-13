// https://leetcode.com/problems/next-permutation/description/

'use strict'

function solve(arr) {
    let i = arr.length - 2;

    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }

    if (i >= 0) {
        let j = arr.length - 1;
        while (arr[j] >= 0 && arr[j] <= arr[i]) j--;

        swap(arr, i, j);
    }

    reverse(arr, i + 1);

    return arr;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function reverse(arr, start) {
    let end = arr.length - 1;
    while (start < end) {
        swap(arr, start, end);
        start++;
        end--;
    }
}

let arr = [1, 2, 3];
console.log(solve((arr)));

// O(n)