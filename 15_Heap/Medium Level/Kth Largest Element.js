// https://leetcode.com/problems/kth-largest-element-in-an-array/description/

import {Heap} from "heap-js";

/*
class MaxHeapp {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    heapifyUp() {
        let i = this.heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            // CHANGE: >= instead of <=
            if (this.heap[parent] >= this.heap[i]) break;

            [this.heap[parent], this.heap[i]] =
                [this.heap[i], this.heap[parent]];

            i = parent;
        }
    }

    heapifyDown() {
        let i = 0;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let largest = i;

            if (left < this.heap.length &&
                this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            if (right < this.heap.length &&
                this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if (largest === i) break;

            [this.heap[i], this.heap[largest]] =
                [this.heap[largest], this.heap[i]];

            i = largest;
        }
    }
}

export default MaxHeapp;
 */

function solve(arr, k) {
    const heap = new Heap();

    for (let a of arr) {
        heap.push(a);

        if (heap.size() > k) {
            heap.pop();
        }
    }
    return heap.peek();

}

let arr = [3, 2, 1, 5, 6, 4];
let k = 2
console.log(solve(arr, k));

// O(n log k)