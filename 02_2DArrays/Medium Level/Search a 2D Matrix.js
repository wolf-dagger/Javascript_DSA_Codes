// https://leetcode.com/problems/search-a-2d-matrix/

function solve(arr, target) {

    let rows = arr.length;
    let cols = arr[0].length;

    let left = 0;
    let right = rows * cols - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        let row = Math.floor(mid / cols);
        let col = mid % cols;

        let value = arr[row][col];
        if (value === target) return true;

        if (value < target) left = mid + 1;
        else right = mid - 1;
    }

    return false;
}

let arr = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
let target = 3;

console.log(solve(arr, target));

// O(log(m × n))