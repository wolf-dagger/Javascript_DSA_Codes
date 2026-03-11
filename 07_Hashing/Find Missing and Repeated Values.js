// https://leetcode.com/problems/find-missing-and-repeated-values/description/

function solve(arr) {
    let n = arr.length;
    let gridLen = n * n;
    let set = new Set();
    let repeating = -1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (set.has(arr[i][j])) repeating = arr[i][j];

            set.add(arr[i][j]);
        }
    }

    let totalSum = (gridLen * (gridLen + 1)) / 2;

    let sum = 0;

    for (let a of set) {
        sum += a;
    }

    let missing = totalSum - sum;

    return [repeating, missing];
}

let arr = [[1, 3], [2, 2]];
console.log(solve(arr));

// O(n²)