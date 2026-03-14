// https://leetcode.com/problems/special-positions-in-a-binary-matrix/description/

function solve(arr) {
    let r = arr.length;
    let c = arr[0].length;
    let count = 0;

    for (let row = 0; row < r; row++) {
        for (let col = 0; col < c; col++) {

            if (arr[row][col] === 0) continue;

            let flag = true;
            for (let trow = 0; trow < r; trow++) {
                if (trow !== row && arr[trow][col] === 1) {
                    flag = false;
                    break;
                }
            }

            for (let tcol = 0; tcol < c; tcol++) {
                if (tcol !== col && arr[row][tcol] === 1) {
                    flag = false;
                    break;
                }
            }
            if (flag) count++;
        }
    }

    return count;
}

let arr = [[1, 0, 0], [0, 0, 1], [1, 0, 0]];
console.log(solve(arr));

// O(r * c * (r + c))