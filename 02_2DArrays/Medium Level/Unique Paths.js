// https://leetcode.com/problems/unique-paths/description/

function solve(m, n) {
    let arr = Array.from({length: m}, () => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                arr[i][j] = 1;
            } else {
                arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
            }
        }
    }
    return arr[m - 1][n - 1];
}

let m = 3;
let n = 7;
console.log(solve(m, n));

// Time Complexity: O(m × n)