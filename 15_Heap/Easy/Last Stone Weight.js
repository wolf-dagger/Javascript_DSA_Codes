// https://leetcode.com/problems/last-stone-weight/

import priorityQueue from "../../Helper functions/Priority Queue & Heaps/Priority Queue.js";

function solve(stones) {
    let pq = new priorityQueue((a, b) => a > b);

    for (let stone of stones) {
        pq.enqueue(stone);
    }

    while (pq.size() > 1) {
        let x = pq.dequeue();
        let y = pq.dequeue();

        if (x === y) continue;

        if (x !== y) {
            let z = Math.abs(x - y);
            pq.enqueue(z);
        }
    }
    return pq.peek() ? pq.peek() : 0;
}

const stones = [2, 2];
console.log(solve(stones));