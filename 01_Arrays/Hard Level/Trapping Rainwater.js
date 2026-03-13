// https://leetcode.com/problems/trapping-rain-water/description/

'use strict'

function solve(height) {
    let n = height.length;
    if (n === 0) return 0;

    let leftMax = [];
    let rightMax = [];
    leftMax[0] = height[0];
    rightMax[n - 1] = height[n - 1];

    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }
    for (let j = n - 2; j >= 0; j--) {
        rightMax[j] = Math.max(rightMax[j + 1], height[j]);
    }

    let totalWater = 0;

    for (let i = 0; i < n; i++) {
        totalWater += Math.min(rightMax[i], leftMax[i]) - height[i];
    }

    return totalWater;
}

let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(solve(arr));

// O(n)