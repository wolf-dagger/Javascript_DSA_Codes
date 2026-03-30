// https://leetcode.com/problems/largest-perimeter-triangle/

function solve(arr) {
    arr.sort((a, b) => a - b);

    for (let i = arr.length - 1; i >= 2; i--) {
        let a = arr[i - 2];
        let b = arr[i - 1];
        let c = arr[i];

        if (a + b > c) return a + b + c;
    }
    return 0;
}

let nums = [2, 1, 2];

console.log(solve(nums));

// O(n log n)