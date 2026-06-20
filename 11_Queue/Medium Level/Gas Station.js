// https://leetcode.com/problems/gas-station/description/

function solve(gas, cost) {
    let totalGas = 0;
    let totalCost = 0;

    for (let i = 0; i < gas.length; i++) {
        totalCost += cost[i];
        totalGas += gas[i];
    }

    if (totalGas < totalCost) return -1;

    let currentGas = 0;
    let startingIndex = 0;

    for (let i = 0; i < gas.length; i++) {
        currentGas += gas[i] - cost[i];

        if (currentGas < 0) {
            startingIndex = i + 1;
            currentGas = 0;
        }
    }

    return startingIndex;
}

let gas = [1, 2, 3, 4, 5];
let cost = [3, 4, 5, 1, 2];

console.log(solve(gas, cost));

// O(n)