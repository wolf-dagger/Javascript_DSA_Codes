// https://leetcode.com/problems/linked-list-cycle/

class ListNode {
    constructor(val) {
        this.val = val === undefined ? null : val;
        this.next = null;
    }
}

function solve(head) {
    let dummy = head;

    let fast = dummy;
    let slow = dummy;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) return true;
    }

    return false;
}

let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next = head.next;

console.log(solve(head));

