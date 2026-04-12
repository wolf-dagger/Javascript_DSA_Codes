// https://leetcode.com/problems/set-matrix-zeroes/description/

function solve(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let zeroRows = new Set();
    let zeroCols = new Set();

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                zeroRows.add(i);
                zeroCols.add(j);
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (zeroRows.has(i) || zeroCols.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}

let arr = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
console.log(solve(arr));