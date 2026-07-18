// https://leetcode.com/problems/merge-two-sorted-lists/
import LinkedList from "../../Helper functions/LinkedList.js";

class ListNode {
    constructor(val) {
        this.val = val === undefined ? null : val;
        this.next = null;
    }
}

function solve(list1, list2) {
    const dummy = new ListNode();

    let current = dummy;

    while (list1 && list2) {
        if (list1.data <= list2.data) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

    current.next = list1 || list2;

    return dummy.next;

}


const list1 = new LinkedList();
const list2 = new LinkedList();


list1.addFirst(1);
list1.addLast(2);
list1.addLast(4);

list2.addFirst(1);
list2.addLast(3);
list2.addLast(4);

console.log(solve(list1.head, list2.head));

