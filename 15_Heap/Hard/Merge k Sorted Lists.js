// https://leetcode.com/problems/merge-k-sorted-lists/

import PriorityQueue from "../../Helper functions/Priority Queue & Heaps/Priority Queue.js";

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function solve(lists) {

    let pq = new PriorityQueue((a, b) => a.val < b.val);

    for (let head of lists) {
        if (head !== null) {
            pq.enqueue(head);
        }
    }

    let dummy = new ListNode();
    let tail = dummy;

    while (pq.size() !== 0) {
        let node = pq.dequeue();

        tail.next = node;
        tail = tail.next;

        if (node.next !== null) {
            pq.enqueue(node.next);
        }
    }
    return dummy.next;
}

let head1 = new ListNode(1);
head1.next = new ListNode(4);
head1.next.next = new ListNode(5);

let head2 = new ListNode(1);
head2.next = new ListNode(3);
head2.next.next = new ListNode(4);

let head3 = new ListNode(2);
head3.next = new ListNode(6);

const lists = [head1, head2, head3];

console.log(solve(lists));

