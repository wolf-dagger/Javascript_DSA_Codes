// https://leetcode.com/problems/max-chunks-to-make-sorted/?q=Max+Chunks+Sorted+Ii

function solve(arr) {
    let max = Number.MIN_VALUE;
    let n = arr.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        max = Math.max(max, arr[i]);
        if (max < i + 1) count++;
    }
    return count;
}

let arr = [4, 3, 2, 1, 0];
console.log(solve(arr));

// O(n)