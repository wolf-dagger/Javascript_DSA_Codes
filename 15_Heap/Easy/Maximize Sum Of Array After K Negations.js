// https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/description/

import PriorityQueue from "../../Helper functions/Priority Queue & Heaps/Priority Queue.js";

function solve(arr, k) {
    let pq = new PriorityQueue((a, b) => a < b);

    for (let a of arr) {
        pq.enqueue(a);
    }

    while (k !== 0) {
        let smallest = pq.dequeue();
        smallest = -smallest;

        pq.enqueue(smallest);
        k--;
    }

    let ans = 0;

    for (let a of pq.heap) {
        ans += a;
    }

    return ans;
}

const arr = [4, 2, 3];
const k = 1;

console.log(solve(arr, k));