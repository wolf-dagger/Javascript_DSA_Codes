// https://leetcode.com/problems/matrix-diagonal-sum/

"use strict"

let matrix = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]

console.log(sumOfDiagonal(matrix));

function sumOfDiagonal(arr) {

    let sum = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        sum += arr[i][i];
        sum += arr[i][n - i - 1];
    }

    if (n % 2 !== 0) {
        let mid = Math.floor(n / 2);
        sum -= arr[mid][mid];
    }
    return sum;
}