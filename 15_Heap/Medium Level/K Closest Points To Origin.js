// https://leetcode.com/problems/k-closest-points-to-origin/description/

import PriorityQueue from "../../Helper functions/Priority Queue & Heaps/Priority Queue.js";

function solve(arr, k) {
    let pq = new PriorityQueue((a, b) => a[0] > b[0]);

    for (let [x, y] of arr) {
        let dist = x * x + y * y;
        pq.enqueue([dist, [x, y]]);

        if (pq.size() > k) pq.dequeue();
    }

    let res = [];

    for (let [a, b] of pq.heap) {
        res.push(b);
    }
    return res;
}

let arr = [[3, 3], [5, -1], [-2, 4]];
let k = 2;

console.log(solve(arr, k));

// (O(n log k))