// https://leetcode.com/problems/most-profit-assigning-work/

function solve(difficulty, profit, worker) {

    const jobs = difficulty.map((d, i) => [d, profit[i]]);

    jobs.sort((a, b) => a[0] - b[0]);
    worker.sort((a, b) => a - b);

    let totalProfit = 0;
    let bestProfit = 0;
    let jobIndex = 0;

    for (const ability of worker) {
        while (jobIndex < jobs.length && jobs[jobIndex][0] <= ability) {
            bestProfit = Math.max(bestProfit, jobs[jobIndex][1]);
            jobIndex++;
        }

        totalProfit += bestProfit;
    }

    return totalProfit;
}

const difficulty = [2, 4, 6, 8, 10];
const profit = [10, 20, 30, 40, 50];
const worker = [4, 5, 6, 7];

console.log(solve(difficulty, profit, worker));