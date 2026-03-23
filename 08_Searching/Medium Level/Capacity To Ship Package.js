// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/

function solve(weights, days) {
    let minCap = 0;
    let maxCap = 0;

    for (let a of weights) {
        minCap = Math.max(minCap, a);
        maxCap += a;
    }

    while (minCap < maxCap) {
        let mid = Math.floor((minCap + ((maxCap - minCap) / 2)));

        let D = 1;
        let prev = 0;
        for (let weight of weights) {
            if (prev + weight > mid) {
                D++;
                prev = 0;
            }

            prev += weight;
        }

        if (D > days) {
            minCap = mid + 1;
        } else {
            maxCap = mid;
        }
    }

    return minCap;
}

let weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let days = 5;
console.log(solve(weights, days));

// O(n log n)