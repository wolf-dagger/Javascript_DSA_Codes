// https://leetcode.com/problems/k-closest-points-to-origin/description/

import {Heap} from "heap-js";

function solve(arr, k) {
    let heap = new Heap((a, b) => b[0] - a[0]);

    for (let [x, y] of arr) {

        const dist = x * x + y * y;

        heap.push([dist, [x, y]]);

        if (heap.size() > k) {
            heap.pop();
        }
    }

    const res = [];

    while (heap.size() > 0) {
        res.push(heap.pop()[1]);
    }

    return res;
}

let arr = [[3, 3], [5, -1], [-2, 4]];
let k = 2;

console.log(solve(arr, k));

// (O(n log k))