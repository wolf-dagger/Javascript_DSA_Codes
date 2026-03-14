// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/description/

function solve(arr) {
    let row = arr.length;
    let col = arr[0].length;

    let r = 0;
    let c = col - 1;
    let count = 0;

    while (r < row && c >= 0) {
        if (arr[r][c] < 0) {
            count += (row - r);
            c--;
        } else {
            r++;
        }
    }
    return count;
}

let arr = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]];
console.log(solve(arr));

// O(m + n)