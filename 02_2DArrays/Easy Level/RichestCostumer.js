// https://leetcode.com/problems/richest-customer-wealth/

"use strict"

let accounts = [[1, 2, 3], [3, 2, 1]];

console.log(solve(accounts))

function solve(accounts) {

    let maxSum = Number.MIN_VALUE;

    for (let i = 0; i < accounts.length; i++) {
        let sum = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j];
        }
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}