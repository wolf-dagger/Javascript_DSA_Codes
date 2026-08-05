// https://leetcode.com/problems/coin-change/description/

function solve(coins, amount) {
    let n = coins.length;
    let m = amount;

    let dp = Array.from({length: n + 1}, () => Array(m + 1).fill(0));

    for (let i = 0; i <= n; i++) {
        dp[i][0] = 0;
    }

    for (let j = 0; j <= m; j++) {
        dp[0][j] = Number.MAX_SAFE_INTEGER - 1;
    }

    dp[0][0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {

            if (coins[i - 1] > j) {
                dp[i][j] = dp[i - 1][j];
            } else {
                let pick = 1 + dp[i][j - coins[i - 1]];
                let notPick = dp[i - 1][j];

                dp[i][j] = Math.min(pick, notPick);
            }
        }
    }

    return dp[n][m] === Number.MAX_SAFE_INTEGER - 1 ? -1 : dp[n][m];
}

const coins = [1, 2, 5];
const amount = 11;

console.log(solve(coins, amount));