// https://www.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1

import PriorityQueue from "../../Helper functions/Priority Queue/Priority Queue.js"

function solve(arr) {
    let pq = new PriorityQueue((a, b) => a < b);

    for (let a of arr) {
        pq.enqueue(a);
    }

    let ans = 0;

    while (pq.size() > 1) {
        let first = pq.dequeue();
        let second = pq.dequeue();

        let sum = first + second;
        ans += sum;
        pq.enqueue(sum);
    }
    return ans;
}

const arr = [4, 3, 2, 6];
console.log(solve(arr));