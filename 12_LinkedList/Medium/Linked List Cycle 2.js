// https://leetcode.com/problems/linked-list-cycle-ii/description/

class ListNode {
    constructor(val) {
        this.val = val === undefined ? null : val;
        this.next = null;
    }
}

function solve(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (fast === slow) {
            let pointer = head;

            while (pointer !== slow) {
                slow = slow.next;
                pointer = pointer.next;
            }

            return pointer;
        }
    }

    return null;
}

let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next = head.next;

console.log(solve(head));