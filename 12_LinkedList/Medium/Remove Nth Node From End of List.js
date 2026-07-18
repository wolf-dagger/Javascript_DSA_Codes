// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

class ListNode {
    constructor(val) {
        this.val = val === undefined ? null : val;
        this.next = null;
    }
}

function solve(head, n) {

    let dummy = new ListNode();
    dummy.next = head;

    let slow = dummy;
    let fast = dummy;

    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;

}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next = new ListNode(4);
head.next.next.next = new ListNode(5);

console.log(solve(head, 2));