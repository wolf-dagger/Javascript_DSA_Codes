// LeetCode : https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

"use strict"

let grid = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]];

console.log(solve(grid))

function solve(grid) {

    let rows = grid.length;
    let cols = grid[0].length;

    let row = 0;
    let col = cols - 1;
    let count = 0;

    while (row < rows && col >= 0) {
        if (grid[row][col] < 0) {
            count += (rows - row);
            col--;
        } else {
            row++;
        }
    }

    return count;
}

// Time complexity = O(m + n)