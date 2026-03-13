// https://leetcode.com/problems/spiral-matrix/description/

function solve(arr) {
    let rowBegin = 0;
    let rowEnd = arr.length - 1;
    let colBegin = 0;
    let colEnd = arr[0].length - 1;

    let res = [];

    while (rowBegin <= rowEnd && colBegin <= colEnd) {

        // Traverse Right
        for (let i = colBegin; i <= colEnd; i++) {
            res.push(arr[rowBegin][i]);
        }
        rowBegin++;

        // Traverse Down
        for (let i = rowBegin; i <= rowEnd; i++) {
            res.push(arr[i][colEnd]);
        }
        colEnd--;

        // Traverse Left
        if (rowBegin <= rowEnd) {
            for (let i = colEnd; i >= colBegin; i--) {
                res.push(arr[rowEnd][i]);
            }
        }
        rowEnd--;

        // Traverse Up
        if (colBegin <= colEnd) {
            for (let i = rowEnd; i >= rowBegin; i--) {
                res.push(arr[i][colBegin]);
            }
        }
        colBegin++;
    }

    return res;
}

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(solve(arr));

// O(m x n)