// https://leetcode.com/problems/maximum-product-of-three-numbers/description/

function solve(arr) {
    arr.sort((a, b) => a - b);
    let n = arr.length;
    return Math.max(arr[n - 1] * arr[n - 2] * arr[n - 3], arr[0] * arr[1] * arr[n - 1]);
}

let arr = [1, 2, 3, 4];
console.log(solve(arr));

// O(n log n)