// https://leetcode.com/problems/01-matrix/description/

function solve(mat) {
    let rows = mat.length;
    let cols = mat[0].length;
    let res = [];

    // Initialize the result matrix with maximum values
    for (let i = 0; i < rows; i++) {
        res[i] = [];
        for (let j = 0; j < cols; j++) {
            res[i][j] = Number.MAX_VALUE;
        }
    }

    // First Pass : top to left - bottom to right

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (mat[i][j] === 0) res[i][j] = 0;
            else {
                if (i > 0) res[i][j] = Math.min(res[i][j], res[i - 1][j] + 1);

                if (j > 0) res[i][j] = Math.min(res[i][j], res[i][j - 1] + 1);
            }
        }
    }

    // Second Pass : bottom-right to top-left

    for (let i = rows - 1; i >= 0; i--) {
        for (let j = cols - 1; j >= 0; j--) {
            if (mat[i][j] !== 0) {
                if (i < rows - 1) res[i][j] = Math.min(res[i][j], res[i + 1][j] + 1);

                if (j < cols - 1) res[i][j] = Math.min(res[i][j], res[i][j + 1] + 1);
            }
        }
    }

    return res;
}

let mat = [[0, 0, 0], [0, 1, 0], [1, 1, 1]];

console.log(solve(mat));

// O(m x n)