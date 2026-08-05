// https://leetcode.com/problems/house-robber/description/

function solve(houses) {
    let n = houses.length;

    if (n === 1) return houses[0];

    // dp[i] -> maximum amount robbed/lootted till ith house
    let dp = new Array(n).fill(0);

    dp[0] = houses[0];
    dp[1] = Math.max(houses[1], dp[0]);

    for (let i = 2; i < n; i++) {
        let pick = houses[i] + dp[i - 2];
        let notPick = dp[i - 1];

        dp[i] = Math.max(pick, notPick);
    }

    return dp[n - 1];
}

const houses = [2, 7, 9, 3, 1];
console.log(solve(houses));