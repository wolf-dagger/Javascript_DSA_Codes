// https://leetcode.com/problems/predict-the-winner/description/

function solve(arr) {
    let n = arr.length;

    let dp = Array.from({length: n}, () =>
        Array(n).fill(undefined)
    );

    return recur(arr, 0, n - 1, dp) >= 0;
}

function recur(arr, i, j, dp) {
    if (i > j) return 0;

    if (dp[i][j] !== undefined)
        return dp[i][j];

    if (i === j)
        return dp[i][j] = arr[i];

    let takeI = arr[i] - recur(arr, i + 1, j, dp);
    let takeJ = arr[j] - recur(arr, i, j - 1, dp);

    return dp[i][j] = Math.max(takeI, takeJ);
}

let arr = [1, 5, 2];
console.log(solve(arr));

// O(n^2)