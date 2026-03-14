// https://leetcode.com/problems/max-chunks-to-make-sorted-ii/?q=Max+Chunks+Sorted+Ii

function solve(arr) {
    let n = arr.length;
    let rightMin = new Array(n);

    rightMin[n - 1] = arr[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        rightMin[i] = Math.min(arr[i], rightMin[i + 1]);
    }

    let chunks = 1;
    let leftMax = arr[0];

    for (let i = 0; i < n - 1; i++) {

        leftMax = Math.max(leftMax, arr[i]);

        if (leftMax <= rightMin[i + 1]) {
            chunks++;
        }
    }

    return chunks;
}

let arr = [5, 4, 3, 2, 1];

console.log(solve(arr));

// O(n)