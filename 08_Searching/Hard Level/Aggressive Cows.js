// https://www.geeksforgeeks.org/problems/aggressive-cows/1
// https://leetcode.com/problems/magnetic-force-between-two-balls/

function solve(arr, k) {
    arr.sort((a, b) => a - b);

    let l = 1;
    let r = arr[arr.length - 1] - arr[0];
    let ans = 0;

    while (l <= r) {
        let mid = Math.floor(l + ((r - l) / 2));

        if (isPossible(k, arr, mid)) {
            l = mid + 1;
            ans = mid;
        } else {
            r = mid - 1;
        }
    }
    return ans;
}

function isPossible(k, arr, minDistance) {
    let lastPos = 0;
    let totalPlaced = 1;

    for (let i = 1; i < arr.length && totalPlaced < k; i++) {
        if (arr[i] - arr[lastPos] >= minDistance) {
            lastPos = i;
            totalPlaced++;
        }
    }
    return totalPlaced === k;
}

let arr = [1, 2, 4, 8, 9];
let k = 3;
console.log(solve(arr, k));

// O(n log n + n log(range))