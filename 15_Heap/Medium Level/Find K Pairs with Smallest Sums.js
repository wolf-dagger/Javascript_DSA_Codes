// https://leetcode.com/problems/find-k-pairs-with-smallest-sums/description/

import PriorityQueue from "../../Helper functions/Priority Queue & Heaps/Priority Queue.js";

function solve(nums1, nums2, k) {
    let ans = []

    let pq = new PriorityQueue((a, b) => a.sum < b.sum);

    for (let a of nums1) {
        for (let b of nums2) {
            pq.enqueue({
                first: a,
                second: b,
                sum: a + b
            });
        }
    }

    while (k > 0 && pq.size() !== 0) {
        let pair = pq.dequeue();

        ans.push([pair.first, pair.second]);

        k--;
    }

    return ans;
}

const nums1 = [1, 7, 11];
const nums2 = [2, 4, 6];
const k = 3;

console.log(solve(nums1, nums2, k));