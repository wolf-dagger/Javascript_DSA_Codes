// https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/description/

import PriorityQueue from "../../Helper functions/Priority Queue & Heaps/Priority Queue.js";

function solve(mat, k) {
    const m = mat.length;

    let startSum = 0;
    let startIndex = new Array(m).fill(0);

    for (let i = 0; i < m; i++) {
        startSum += mat[i][0];
    }

    let pq = new PriorityQueue((a, b) => a.sum < b.sum);
    pq.enqueue({
        sum: startSum,
        idx: startIndex,
    });

    let visited = new Set();

    while (--k > 0) {
        const {sum, idx} = pq.dequeue();

        for (let row = 0; row < m; row++) {
            if (idx[row] + 1 >= mat[row].length) continue;

            const nextIdx = [...idx];
            nextIdx[row]++;

            const key = nextIdx.join(',');

            if (visited.has(key)) continue;

            visited.add(key);

            const nextSum = sum - mat[row][idx[row]] + mat[row][nextIdx[row]];

            pq.enqueue({
                sum: nextSum,
                idx: nextIdx,
            });
        }
    }
    return pq.peek().sum;
}

const mat = [[1, 3, 11], [2, 4, 6]];
const k = 5;

console.log(solve(mat, k));